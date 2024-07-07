if (window.location.href.includes("https://www.linkedin.com/feed/")) {
  window.location.href = "https://www.linkedin.com/jobs/";
}
// else if (window.location.href.includes("https://www.udemy.com/course/react-the-complete-guide-incl-redux/")) {
//   alert("executing")
//   $(document).ready(function() {
//     alert("entering in the word")
//     $('.ud-text-xl video-viewer--title-overlay--YZQuH').html('');
//   });
// }

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
  