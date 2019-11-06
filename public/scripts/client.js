/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

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
      <section class="tweeter">${tweet.content.text}</section>
      <footer>
        <div class="date-posted">${tweet.created_at}</div>
      </footer>
    </article>
  </section>
`
return $tweet;
}

  $("#new-tweet").submit(function(ev) {
    ev.preventDefault();

    const formData = $(this).serialize();

    $.post('/tweets/', formData, function() {
      console.log("done posting");

      $.getJSON('/tweets/', function(updatedTweets) {
        console.log("ll tweetssss", updatedTweets)
        renderTweets(updatedTweets);
      })
    })
  })


// renderTweets(data);