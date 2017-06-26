function each(arr, act){
  var i;
  for(i=0; i<arr.length; ++i)
    act(arr[i], i);
}

function modify_link(link){
  link.addEventListener('click', function(ev){
    if( !ev.ctrlKey ){
      ev.preventDefault();
      ev.stopPropagation();
      chrome.runtime.sendMessage(link.href);
    }
  });
}

each(document.querySelectorAll('a[href^="https://www.facebook.com/?"],a[href="https://www.facebook.com/"]'), modify_link);

var profile_link = document.querySelector('a[title=Profile][href^="https://www.facebook.com/"]');
each(document.querySelectorAll('a[href^="' + profile_link.href + '"]'), modify_link);
