chrome.runtime.onInstalled.addListener(() => {
    // Initialize the list of keywords
    chrome.storage.local.set({ keywords: ["study iq", "tmkoc", "korean","study glows", "ankit awasthi", "status", "reel", "shorts", "fun", "Taarak Mehta Ka Ooltah Chashmah", "affairs", "drama"] });
  });

  
  // this is old one it work when the tab reloaded 
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

// this is new version where that tab is always been checking 