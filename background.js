chrome.runtime.onInstalled.addListener((details) => {
    chrome.contextMenus.create({
        title: "test context menu",
        id: "contextMenu1",
        contexts: ["page", "selection"]
    })
    chrome.contextMenus.onClicked.addListener((event) => {
        console.log(event);
    })
    chrome.contextMenus.create({
        title: "test context menu 1",
        id: "contextMenu2",
        parentId: "contextMenu1",
        contexts: ["page", "selection"]
    })
    chrome.contextMenus.create({
        title: "test context menu 2",
        id: "contextMenu3",
        parentId: "contextMenu1",
        contexts: ["page", "selection"]
    })
});

console.log("background script running");