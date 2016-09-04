document.addEventListener('DOMContentLoaded', init, false);

function init() {
  var containter = document.getElementsByTagName('ul')[0];
  containter.innerHTML = '';
  chrome.management.getAll(function(result) {
    for( var i = 0; i < result.length; i++) {
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = result[i]['id'];
      checkbox.checked = result[i]['enabled'];
      checkbox.addEventListener('click', function() {
        __this = this;
        chrome.management.setEnabled(__this.id, __this.checked, function() {
          init();
        });
      });
      var name = document.createTextNode(result[i]['shortName'] || result[i]['name']);
      var li = document.createElement('li');
      li.appendChild(checkbox);
      li.appendChild(name);
      containter.appendChild(li);
    }
  });
}

