function open_block () {
  var h = document.getElementById('hide-container');
  
    if (document.getElementById('hide-container').style.display == 'none') {
       h.style.display = 'block';
    }
    else {
      h.style.display = 'none';
    }
  }

  function menu () {
    var h = document.getElementById('navigation');
    
      if (document.getElementById('navigation').style.display == 'block') {
         h.style.display = 'none';
      }
      else {
        h.style.display = 'block';
      }
    }