document.getElementById('min-button').addEventListener('click', () => {
    windowControls.minimize()
})
  
document.getElementById('max-button').addEventListener('click', () => {
    windowControls.maximize()
})

document.getElementById('restore-button').addEventListener('click', () => {
    windowControls.unmaximize()
})

document.getElementById('close-button').addEventListener('click', () => {
    windowControls.close();
})

toggleMaxRestoreButtons();
windowControls.on('maximize', toggleMaxRestoreButtons);
windowControls.on('unmaximize', toggleMaxRestoreButtons);

function toggleMaxRestoreButtons() {
    if (windowControls.isMaximized()) {
        document.body.classList.add('maximized');
    } else {
        document.body.classList.remove('maximized');
    }
}