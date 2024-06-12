chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ keywords: ["study iq", "tmkoc", "minitv", "mx player", "south movie", "korean","study glows", "ankit awasthi", "status", "reels", "shorts", "Sony Sab", "affairs", "drama", "food Vlog", "street food", "Jio Cinema", "Cricket", "Pahul Walia", "rj raunac", "tanay", "Dhruv Rathee", "swagger sharma", "web series", "movie"] });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'checkTitle') {
    chrome.storage.local.get("keywords", (data) => {
      let keywords = data.keywords || [];
      for (let keyword of keywords) {
        if (message.title.toLowerCase().includes(keyword.toLowerCase())) {
          chrome.tabs.remove(sender.tab.id, () => {
            chrome.notifications.create({
              type: 'basic',
              iconUrl: 'icon.png',
              title: 'Tab Closed',
              message: `Closed tab because it contained the keyword: "${keyword}".`
            });
          });
          break;
        }
      }
    });
  }
});
