chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {
      cancel: true
    };
  },
  // can specify more subdomains of advertisements here to block
  // look at cookies to find more sites to block
  { urls: ["*://*.doubleclick.net/"] },
  ["blocking"]
);
