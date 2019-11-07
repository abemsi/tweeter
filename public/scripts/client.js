/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const renderTweets = function(tweets) {
  $('.tweets-container').empty();
// loops through tweets
for (let tweet of tweets) {
  // calls createTweetElement for each tweet
  const newTweet = createTweetElement(tweet);
  // takes return value and appends it to the tweets container
  $('.tweets-container').prepend(newTweet);
}
}


const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

const createTweetElement = function(tweet) {
let $tweet = `
  <section class="tweet-container">
    <article class="tweet">
      <header class="tweet-header">
        <div class="profile">
          <img src="${tweet.user.avatars}">
          <span>${tweet.user.name}</span>
        </div>
        <div class="tweeter-handle">${tweet.user.handle}</div>
      </header>
      <section class="tweeter">${escape(tweet.content.text)}</section>
      <footer>
        <div class="date-posted">${tweet.created_at}</div>
      </footer>
    </article>
  </section>
`
return $tweet;
}

$(".arrow-bounce").click(function() {
  $(".new-tweet").toggle();
});


  $("#new-tweet").submit(function(ev) {
    ev.preventDefault();
  
    const formData = $(this).serialize();
    $.post('/tweets/', formData, function(tweet) {
      console.log("done posting");

      $.getJSON('/tweets/', function(updatedTweets) {
        console.log("all tweetssss", updatedTweets)
        renderTweets(updatedTweets);
      })
    })
  })


// renderTweets(data);