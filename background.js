chrome.webRequest.onBeforeSendHeaders.addListener(
  details => {
    const requestHeadersWithoutReferer = details.requestHeaders.filter(
      requestHeader => requestHeader.name !== "Referer"
    );
    return {
      requestHeaders: [
        ...requestHeadersWithoutReferer,
        { name: "Referer", value: "https://www.facebook.com/" }
      ]
    };
  },
  {
    urls: ["https://www.wsj.com/articles/*", "https://blogs.wsj.com/*"]
  },
  ["blocking", "requestHeaders"]
);
