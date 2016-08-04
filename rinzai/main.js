$(document).ready(function() {
  $('li').on('click', function() {
    $(this).toggleClass('done');
  });

  $('.fa-times').on('click', function(e) {
    e.stopPropagation();
    $(this).parent().remove();
  });
});
