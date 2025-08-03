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

document.querySelector('.copyleft').innerHTML = `<i class='las la-copyright'></i> ${new Date().getFullYear()} Helm Labs`;

// Secret
var code = '';

window.addEventListener('keydown', function(e) {
	var pattern = /^.$/;

	if(e.key == 'Backspace') code = code.slice(0, -1);

	else if(pattern.test(e.key)) {
		code = (code.length >= 7) ? '' : (code+e.key).substring(0, 7);

		switch(code) {
			case 'devious': { this.window.location.href = './site-archive'; }
		}
	}

}, false);