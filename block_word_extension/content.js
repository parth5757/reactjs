function checkTitle() {
    const title = document.title;
    chrome.runtime.sendMessage({ type: 'checkTitle', title: title });
  }
  
  let previousTitle = document.title;
  setInterval(() => {
    if (document.title !== previousTitle) {
      previousTitle = document.title;
      checkTitle();
    }
  }, 1000);
  
  checkTitle(); // Initial check when the script runs
  