$(document).ready(function() {
  console.log('hello world');
  
});

$('#tweet-input').keyup(function () {
  let count = 140;
  let length = $(this).val().length;
  if (length > 140) {
    $('span.counter').css('color', 'red');
  }
  let remainingChar = count - length;
  $('span.counter').text(remainingChar);
});
