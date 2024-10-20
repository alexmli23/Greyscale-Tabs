chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) =>{
    if(changeInfo.status === "complete" && tab.active){
        console.log("User is on: ", tab.url)
    }
})


chrome.tabs.onActivated.addListener((activeInfo) =>{
    chrome.tabs.get(activeInfo.tabId, (tab) =>{
        console.log("User switched to: ", tab.url)
    })
})