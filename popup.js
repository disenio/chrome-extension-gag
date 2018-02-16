document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('humpPage');
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.executeScript(null, {file: "mental.js"});
  }, false);
}, false);

