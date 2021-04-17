console.log('calling preload.js ...')

window.ipcRenderer = require('electron').ipcRenderer;

console.log('window.ipcRenderer: ' + window.ipcRenderer); // Works!


const notification = document.getElementById('notification');
const message = document.getElementById('message');
const restartButton = document.getElementById('restart-button');
console.log('notification: ' + notification);
console.log('message: ' + message);
console.log('restartButton: ' + restartButton);

ipcRenderer.on('update_available', () => {
    console.log('ipcRenderer.on(update_available)');
    const notification = document.getElementById('notification');
    console.log('notification2: ' + notification);
    const message = document.getElementById('message');
    console.log('message2: ' + message);
    ipcRenderer.removeAllListeners('update_available');
    message.innerText = 'A new update is available. Downloading now...';
    notification.classList.remove('hidden');
});
ipcRenderer.on('update_downloaded', () => {
    console.log('ipcRenderer.on(update_download');
    ipcRenderer.removeAllListeners('update_downloaded');
    message.innerText = 'Update Downloaded. It will be installed on restart. Restart now?';
    restartButton.classList.remove('hidden');
    notification.classList.remove('hidden');
});
function closeNotification() {
    console.log('closeNotification');
    notification.classList.add('hidden');
}
function restartApp() {
    ipcRenderer.send('restart_app');
}
