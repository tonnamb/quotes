/*jslint browser: true*/
/*global $, jQuery, alert*/

function displayQuote(data) {
  
  "use strict";
  $(".main-quote h2").html(data.value.joke);
  
}

function fetchQuote() {
  
  "use strict";
  $.getJSON("http://api.icndb.com/jokes/random", function (data) {
    displayQuote(data);
  });
  
}

function tweetQuote() {
  
  "use strict";
  var link = 'http://twitter.com/intent/tweet?text=' + encodeURIComponent($(".main-quote h2").text());
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