chrome.runtime.onInstalled.addListener(() => {
    // Initialize the list of keywords
    chrome.storage.local.set({ keywords: ["study iq", "tmkoc"] });
  });
  
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.title) {
      chrome.storage.local.get("keywords", (data) => {
        let keywords = data.keywords || [];
        for (let keyword of keywords) {
          if (tab.title.toLowerCase().includes(keyword.toLowerCase())) {
            chrome.tabs.remove(tabId);
            break;
          }
        }
      });
    }
  });