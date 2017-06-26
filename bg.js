chrome.runtime.onMessage.addListener(function(msg, sender){
  chrome.tabs.create(
    { url: msg
    , index: sender.tab.index
    , active: true
    }
  );
  chrome.tabs.remove(sender.tab.id);
});
