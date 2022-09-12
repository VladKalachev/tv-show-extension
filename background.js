chrome.runtime.onInstalled.addListener((details) => {
    console.log("details", details);
});

console.log("background script running");