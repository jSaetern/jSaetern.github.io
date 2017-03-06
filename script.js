$(document).ready(main);

function main() {
  $('.about').hide();
  $('.about').fadeIn(2000);

  $('.resume').hide();
  $('.resume').fadeIn(4000);
  
  $('.linkedin').hide();
  $('.linkedin').fadeIn(6000);

  $('.projects').hide();
  $('.projects').fadeIn(8000);

  $('.contact').hide();
  $('.contact').fadeIn(10000);

  $('.aboutPage').hide();
  $('.about').click(function() {
    $('.aboutPage').fadeToggle(3000);
  })

}
