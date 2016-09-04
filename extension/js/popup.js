document.addEventListener('DOMContentLoaded', init, false);

function init() {
  var containter = document.getElementsByTagName('div')[0];
  chrome.management.getAll(function(result) {
    for( var i = 0; i < result.length; i++) {
      var name = result[i]['shortName'] || result[i]['name'];
      var status = result[i].enabled;
      var div = document.createElement('div');
      div.innerHTML = name + ': ' + status;
      containter.appendChild(div);
    }
  });
}

