import { app, shell, BrowserWindow ,screen, ipcMain} from 'electron'
import  { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'




function createWindow() {
  // Create the main window window.
  const mainWindow = new BrowserWindow({
    width: Math.floor(screen.getPrimaryDisplay().workAreaSize.width * 0.8),
    height: Math.floor(screen.getPrimaryDisplay().workAreaSize.height * 0.8),
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })


  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}


app.whenReady().then(async () => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  //initialize db
  await initDB();


  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})



// db
const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

let db;

// Function to initialize the database
async function initDB() {
  const dbPath = is.dev
    ? join(__dirname, "database.db") // Development
    : join(app.getPath("userData"), "database.db"); // Production

  db = await sqlite.open({
    filename: dbPath,
    driver: sqlite3.Database,
  });



  console.log("Database initialized at:", dbPath);

  // Create tables if not exist

  await db.exec(`
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
      stock int DEFAULT 0,
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


  // register handler
  ipcMain.handle("db", async (event, sql, ...params) => {
    if (!db) {
      throw new Error("Database not initialized");
    }
    return db[sql](...params);
  });
}




