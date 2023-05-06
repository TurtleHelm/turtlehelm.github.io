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

//Bideo 404 Background Video

(function () {

  var bv = new Bideo();

  bv.init({
    // Video element
    videoEl: document.querySelector('#background_video'),

    // Container element
    container: document.querySelector('body'),

    // Resize
    resize: true,

    // autoplay: false,

    isMobile: window.matchMedia('(max-width: 768px)').matches,

    playButton: document.querySelector('#play'),
    pauseButton: document.querySelector('#pause'),

    // What to do once video loads (initial frame)
    onLoad: function () {
      document.querySelector('#video_cover').style.display = 'none';
    }
  });
});