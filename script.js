$(document).ready(main);

function main() {
  $('.about').hide();
  $('.about').fadeIn(2000);

  $('.resume').hide();
  $('.resume').fadeIn(3000);
  
  $('.linkedin').hide();
  $('.linkedin').fadeIn(4000);

  $('.projects').hide();
  $('.projects').fadeIn(5000);

  $('.contact').hide();
  $('.contact').fadeIn(6000);

  $('.aboutPage').hide();
  $('.about').click(function() {
    $('.aboutPage').fadeToggle(1000);
  })

}
