// AOS

AOS.init();

AOS.init({
    offset: 120,
    delay: 0,
    duration: 700,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
});

// Secret

var code = '';

window.addEventListener('keydown', function(e) {
  char = String.fromCharCode(e.keyCode || e.which);

  if(e.keyCode == 8) code = code.slice(0, -1);
  else if((e.keyCode > 64 && e.keyCode < 91) || e.keyCode == 32) code = (code+char).substr(-7);
  else code = code;

  switch(code) {
    case 'DEVIOUS': {
      this.window.removeEventListener('keydown', arguments.callee);
      this.window.location.href = './assets/html/secret';
    }
  }
}, false);