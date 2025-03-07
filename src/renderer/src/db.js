export async function sql(s, ...args) {
   return window.electron.ipcRenderer.invoke("db", s, ...args)
}

