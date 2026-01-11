// main.js — Electron main process entry point

const { app, BrowserWindow } = require("electron");

// Create and show the main application window.
function createWindow() {
  // BrowserWindow options: set the initial size and web preferences
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      // Enable Node integration for renderer (gives access to Node.js APIs in web pages).
      // NOTE: Enabling `nodeIntegration` can be a security risk for untrusted content.
      // In production apps, prefer `contextIsolation: true` and use a preload script
      // to selectively expose safe APIs instead of enabling full node integration.
      nodeIntegration: true,
    },
  });

  // Load the app's HTML into the window. This displays `index.html` inside the BrowserWindow.
  win.loadFile("index.html");
}

// When Electron has finished initialization and is ready to create browser windows,
// call `createWindow`. This maps to the 'ready' lifecycle event.
app.whenReady().then(createWindow);

// Quit the app when all windows are closed, except on macOS (darwin).
// On macOS, it's common for applications to stay open until the user quits explicitly
// and for new windows to be created when the dock icon is clicked.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
