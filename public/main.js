//const {app, BrowserWindow} = require('electron');
const { app, BrowserWindow } = require("electron")

function createWindow() {
  // Create the browser window
  const win = new BrowserWindow({ width: 1024, height: 640 })

  // and load the index.html of the app
  //win.loadFile('index.html')
  win.loadURL("http://localhost:3000/")
}
app.on("ready", createWindow)
