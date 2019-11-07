$(document).ready(function() {
  console.log('hello world');
  
});

$('#tweet-input').keyup(function () {
  let count = 140;
  let length = $(this).val().length;
  if (length > 140) {
    $('span.counter').css('color', 'red');
    $('.error1').slideDown("slow");
  } else if (length < 140) {
    $('span.counter').css('color', 'DimGray');
    $('.error1').slideUp("slow");
  }
  let remainingChar = count - length;
  $('span.counter').text(remainingChar);
});
