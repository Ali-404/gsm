import { app, shell, BrowserWindow, screen, ipcMain } from "electron";
import { join } from "path";
import { electronApp, optimizer, is } from "@electron-toolkit/utils";
import icon from "../../resources/icon.png?asset";
import Database from "better-sqlite3"; // Import better-sqlite3

let splashScreen;

let db;


function createSplashScreen(){
  splashScreen = new BrowserWindow({
    width: 650,
    height: 400,
    frame: false,

    transparent: true,
    show: true,
    alwaysOnTop: true,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
    },
  })


  const splashPath = join( __dirname, "../renderer/splash/index.html");
  console.log("Loading splash screen from:", splashPath);

  if (is.dev ){
    splashScreen.loadURL("http://localhost:5173/splash/index.html")
  }else {
    splashScreen.loadFile(splashPath)
  }
}

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: Math.floor(screen.getPrimaryDisplay().workAreaSize.width * 0.8),
    height: Math.floor(screen.getPrimaryDisplay().workAreaSize.height * 0.8),
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === "linux" ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, "../preload/index.js"),
      sandbox: false,
    },
  });

  mainWindow.on("ready-to-show", () => {

    mainWindow.show();
    if (splashScreen) {
      splashScreen.destroy();
    }

  });

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: "deny" };
  });

  if (is.dev && process.env["ELECTRON_RENDERER_URL"]) {
    mainWindow.loadURL(process.env["ELECTRON_RENDERER_URL"]);
  } else {
    mainWindow.loadFile(join(__dirname, "../renderer/index.html"));
  }
}

app.whenReady().then(async () => {
  electronApp.setAppUserModelId("com.electron");

  app.on("browser-window-created", (_, window) => {
    optimizer.watchWindowShortcuts(window);
  });

  createSplashScreen();
  // Initialize the database
  await initDB().then(() => {

    setTimeout(function () {
      createWindow();

      app.on("activate", function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
      });
    }, 3000)

  })

});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Function to initialize the database
async function initDB() {
  const dbPath = is.dev
    ? join(__dirname, "database.db") // Development
    : join(app.getPath("userData"), "database.db"); // Production

  db = new Database(dbPath); // Initialize better-sqlite3 database

  console.log("Database initialized at:", dbPath);

  // Create tables if not exist
  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT,
      password TEXT,
      isBlocked INTEGER DEFAULT 0
    );

    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT
    );

    CREATE TABLE IF NOT EXISTS medicaments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      source TEXT,
      stock INT DEFAULT 0,
      categorie_id INTEGER,
      FOREIGN KEY (categorie_id) REFERENCES categories(id)
    );

    CREATE TABLE IF NOT EXISTS notifications (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      message TEXT,
      type TEXT,
      read INTEGER DEFAULT 0,
      cleared INTEGER DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  // Register handler for IPC communication
  ipcMain.handle("db", async (event, sql, ...params) => {
    if (!db) {
      throw new Error("Database not initialized");
    }
    return db.prepare(sql).run(...params);
  });
}
