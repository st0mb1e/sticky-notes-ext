function getDomainKey(domain: string) {
    return `domain:${domain}`;
}

async function saveTabDomainState(tab: chrome.tabs.Tab, state: unknown) {
    const domain = new URL(tab.url ?? '').hostname;
    const key = getDomainKey(domain);
    await chrome.storage.local.set({ [key]: state });
}

chrome.runtime.onMessage.addListener(async (msg, sender) => {
    const tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    const tab = tabs[0];
    const tabId = tab?.id;
    if (!tabId) {
        return;
    }

    if (msg.type === 'state-update') {
        saveTabDomainState(tab, msg.state);
    }

    await chrome.tabs.sendMessage(tabId, msg);
});
