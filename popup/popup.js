function handleCopy(tabId){
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ["scripts/copy.js"]
    });
}

function handlePaste(tabId){
    chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ["scripts/paste.js"],
    });
}

chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
}, ([tab]) => {
    document.getElementById("copy").addEventListener("click", () => handleCopy(tab.id));
    document.getElementById("paste").addEventListener("click", () => handlePaste(tab.id));
});