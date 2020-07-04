chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {
      cancel: true
    };
  },
  // can specify more subdomains of advertisements here to block
  { urls: ["*://*.doubleclick.net/"] },
  ["blocking"]
);
