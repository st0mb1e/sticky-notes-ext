chrome.runtime.onMessage.addListener((msg) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const tabId = tabs[0]?.id;
        if (!tabId) {
            return;
        }

        chrome.tabs.sendMessage(tabId, msg);
    });
});
