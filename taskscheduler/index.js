
const electron = require('electron');
const { app, BrowserWindow, Menu } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({});
 mainWindow.loadURL(`file://${__dirname}/main.html`);
 
 const mainMenu = Menu.buildFromTemplate(menuTemplate);
 Menu.setApplicationMenu(mainMenu);
});
const menuTemplate = [
  {
    label: 'File',
    submenu: [
      { label: 'New Scheduler'}
      {
        label: 'Quit',
        click() {
          app.quit();
        }
      }
    ]
  }
];

if(process.platform === 'win32') {
  menuTemplate.unshift({});
}
