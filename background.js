chrome.runtime.onInstalled.addListener((details) => {
    chrome.contextMenus.create({
        title: "test context menu",
        id: "contextMenu1",
        contexts: ["page", "selection"]
    })
    chrome.contextMenus.onClicked.addListener((event) => {
        console.log(event);
        // chrome.search.query({
        //     disposition: "NEW_TAB",
        //     text: event.selectionText,
        // })
        // chrome.tabs.query({
        //     currentWondow: true,
        // }, (tabs) => {
        //     console.log(tabs);
        // })
        chrome.tabs.create({
            url: `https://www.imdb.com/find?q=${event.selectionText}&ref_=nv_sr_sm`
        })
    })
});

console.log("background script running");