var toggleButton = document.getElementById('toggle');

chrome.storage.sync.get('isEnabled', function (data) {
  toggleButton.innerText = data.isEnabled ? 'غیر فعال' : 'فعال';
});

toggleButton.addEventListener('click', function () {
  chrome.storage.sync.get('isEnabled', function (data) {
    var isEnabled = !data.isEnabled;
    chrome.storage.sync.set({ isEnabled: isEnabled }, function () {
      toggleButton.innerText = isEnabled ? 'غیر فعال' : 'فعال';
      chrome.runtime.sendMessage({ type: 'toggleBypass', isEnabled: isEnabled });
    });
  });
});

// Set the initial state of the extension
chrome.storage.sync.get('isEnabled', function (data) {
  var isEnabled = data.isEnabled !== undefined ? data.isEnabled : true;
  chrome.storage.sync.set({ isEnabled: isEnabled }, function () {
    toggleButton.innerText = isEnabled ? 'غیر فعال' : 'فعال';
    chrome.runtime.sendMessage({ type: 'toggleBypass', isEnabled: isEnabled });
  });
});
