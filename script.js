$(document).ready(main);

function main() {
  $('.about').hide();
  $('.about').fadeIn(2000);

  $('.resume').hide();
  $('.resume').fadeIn(4000);

  $('.projects').hide();
  $('.projects').fadeIn(6000);

  $('.contact').hide();
  $('.contact').fadeIn(8000);

  $('.aboutPage').hide();
  $('.about').click(function() {
    $('.aboutPage').fadeToggle(3000);
  })

}
