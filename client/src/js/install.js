const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
// event listener for `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    //Store the triggered events
    window.deferredPrompt = event
    // Remove the hidden class from the button
    butInstall.classList.toggle('hidden', false)
});

// TODO: Implement a click event handler on the `butInstall` element
// event listener for click install btn
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return
    }
    //show prompt
    promptEvent.prompt()
    //reset the deffered prompt variable, it can only be used once.
    window.deferredPrompt = null

    butInstall.classList.toggle('hidden', true)
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
      //clear prompt
      window.deferredPrompt = null
});
