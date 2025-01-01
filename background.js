chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
      id: "copyTableAsCSV",
      title: "Copy Table as CSV",
      contexts: ["all"],
    });
    chrome.contextMenus.create({
      id: "copyTableAsJSON",
      title: "Copy Table as JSON",
      contexts: ["all"],
    });
  });
  
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId === "copyTableAsCSV") {
      chrome.tabs.sendMessage(tab.id, { action: "copyTableCSV" });
    } else if (info.menuItemId === "copyTableAsJSON") {
      chrome.tabs.sendMessage(tab.id, { action: "copyTableJSON" });
    }
  });
  