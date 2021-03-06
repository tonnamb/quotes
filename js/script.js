/*jslint browser: true*/
/*global $, jQuery, alert*/

function displayQuote(data) {
  
  "use strict";
  $(".main-quote h4").html(data.value.joke);
  
}

function fetchQuote() {
  
  "use strict";
  $.getJSON("https://api.icndb.com/jokes/random", function (data) {
    displayQuote(data);
  });
  
}

function tweetQuote() {
  
  "use strict";
  var link = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent($(".main-quote h4").text());
  window.open(link, '_blank');
  
}


$(document).ready(function () {
  
  "use strict";
  fetchQuote();
  
  $("#fetch").click(function (event) {
    fetchQuote();
    event.preventDefault();
  });
  
  $("#tweet").click(function (event) {
    tweetQuote();
    event.preventDefault();
  });
 
});