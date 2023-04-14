function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == 200) {
      var allText = rawFile.responseText;
      callback(allText);
    }
  }
  rawFile.send(null);
}

var blockedUrls = [];
readTextFile("exclude-list.txt", function (text) {
  var lines = text.split("\n");
  for (var i = 0; i < lines.length; i++) {
    var url = lines[i].trim();
    if (url != "") {
      blockedUrls.push(url);
    }
  }
});


chrome.storage.sync.get('isEnabled', function (data) {
  var isEnabled = data.isEnabled !== undefined ? data.isEnabled : false;
  chrome.runtime.sendMessage({ type: 'toggleBypass', isEnabled: isEnabled });
});

const requestListener = function (details) {
  const url = details.url;
  const regex = /\.([0-9a-z]+)(?:[\?#]|$)/i;
  const extension = url.match(regex)?.[1]?.toLowerCase();
  const blockedExtensions = ['js', 'css', 'jpg', 'jpeg', 'png', 'gif', 'svg', 'webp', 'mp4', 'webm'];

  if (blockedExtensions.includes(extension) && !url.includes('popup.js')) {
    const urlHostName = new URL(url).hostname.match(/^(?:[^\/]+\.)?([^\/]+\.[^\/]+)$/)?.[1];
    if (urlHostName && blockedUrls.includes(urlHostName)) {
      return { cancel: false };
    } else {
      return { cancel: true };
    }
  }
};


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.type === 'toggleBypass') {
    var isEnabled = message.isEnabled;
    chrome.storage.sync.set({ isEnabled: isEnabled });

    if (isEnabled) {
      chrome.webRequest.onBeforeRequest.addListener(
        requestListener,
        { urls: ['<all_urls>'] },
        ['blocking']
      );
    } else {
      chrome.webRequest.onBeforeRequest.removeListener(requestListener);
    }
  }
});
