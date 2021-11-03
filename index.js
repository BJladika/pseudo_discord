const { app, BrowserWindow, ipcMain } = require('electron')
// include the Node.js 'path' module at the top of your file
const path = require('path')

function createWindow () {
    const win = new BrowserWindow({
      width: 1560,
      height: 900,
      frame: false,
      /*titleBarStyle: 'show',
      titleBarOverlay: {
        color: '#2f3241',
        symbolColor: '#74b1be'
      },*/
      backgroundColor: '#FFF',
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        contextIsolation: true, // this is the default in Electron >= 12
        nodeIntegration: false, // this is the default in Electron >= 5
      }
    })
  
    win.loadFile('index.html')

    ipcMain.on('windowControls:maximize', () => {
      if (win.isMaximized()) {
        win.restore()
      } else {
        win.maximize()
      }
    })
  
    ipcMain.on('windowControls:minimize', () => {
      win.minimize()
    })
  
    ipcMain.on('windowControls:close', () => {
      win.close()
    })
  }

  app.whenReady().then(() => {
    createWindow()
  })

  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  })

  
  