// List of keywords to block
var blockedKeywords = ["south movie", "tmkoc", "worldaffairs", "study iq"];

// Function to check if the URL contains any blocked keywords
function checkKeywords(url) {
  for (var i = 0; i < blockedKeywords.length; i++) {
    if (url.includes(blockedKeywords[i])) {
      return true;
    }
  }
  return false;
}

// Listen for page load
window.addEventListener("load", function () {
  // Get the current tab's URL
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var url = tabs[0].url;
    // Check if the URL contains any blocked keywords
    if (checkKeywords(url)) {
      // Close the tab
      chrome.tabs.remove(tabs[0].id);
    }
  });
});
