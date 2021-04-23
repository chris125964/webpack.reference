const { app, BrowserWindow, ipcMain } = require('electron');
const { autoUpdater } = require('electron-updater')

let mainWindow;
let padding = 20;
let gap = 12;
let tile = 150;
let rows = 5;
let columns = 6;

let width = 2 * padding + (columns - 1) * gap + columns * tile;
let height = 2 * padding + (rows - 1) * gap + rows * tile + 57;

console.log(`width: ${width} - height: ${height}`);


function createWindow() {
  mainWindow = new BrowserWindow({
    width,
    height,
    webPreferences: {
      nodeIntegration: true,
      preload: __dirname + '/preload.js'
    },
  });
  // mainWindow.loadFile('index.html');
  mainWindow.loadURL('http://localhost:8080');
  mainWindow.openDevTools();
  mainWindow.on('closed', function () {
    mainWindow = null;
  });

  mainWindow.once('ready-to-show', () => {
    console.log('mainWindow.once.ready-to-show');
    autoUpdater.checkForUpdatesAndNotify();
  });
}

app.on('ready', () => {
  console.log('app.on(ready)');
  createWindow();
  // mainWindow.webContents.send('update_available');
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  console.log('app.on(ctivate)');
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('app_version', (event) => {
  event.sender.send('app_version', { version: app.getVersion() });
});
// ------------------------------------------------------------------

autoUpdater.on('update-available', () => {
  console.log('autoUpdater.update-available');
  mainWindow.webContents.send('update_available');
});
autoUpdater.on('update-downloaded', () => {
  console.log('autoUpdater.update-downloaded');
  mainWindow.webContents.send('update_downloaded');
});

ipcMain.on('restart_app', () => {
  autoUpdater.quitAndInstall();
});

