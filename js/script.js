// event pada saat di klik
$('.page-scroll').on('click', function(event){

  //ambil isi href
  var tujuan = $(this).attr('href');
  // tangkap elemen yang bersangkutan
  var elemenTujuan = $(tujuan);

  // pindahkan scroll

  $('html, body').animate({
    scrollTop: elemenTujuan.offset().top -50
  }, 1250, 'easeInOutExpo');

  event.preventDefault();

});

// parallax
// abot
$(window).on('load', function() {
  $('.pkiri').addClass('pmuncul');
  $('.pkanan').addClass('pmuncul');
});


$(window).scroll(function() {
  var wScroll = $(this).scrollTop();

  //jumbotron

  $('.jumbotron img').css({
    'transform' : 'translate(0px, '+ wScroll/4 +'%)'
  });

  $('.jumbotron h1').css({
    'transform' : 'translate(0px, '+ wScroll/2 +'%)'
  });

  $('.jumbotron p').css({
    'transform' : 'translate(0px, '+ wScroll/1.2 +'%)'
  });


  //Portofolio
  if( wScroll > $('.portfolio').offset().top - 250 ) {
    $('.portfolio .thumbnail').each(function(i) {
      setTimeout(function() {
        $('.portfolio .thumbnail').eq(i).addClass('muncul');
      }, 300 * (i+1));
    });

    
    //$('.portfolio .thumbnail').addClass('muncul');
  }


});