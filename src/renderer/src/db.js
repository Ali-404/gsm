export async function sql(func,s, ...args) {
   return window.electron.ipcRenderer.invoke("db",func, s, ...args)
}

