$(document).ready(function() {
  showQuote();

  $("#js-problem").on("click", function() {
    showQuote();
  })

  function showQuote() {
    var quotes = ["Global warming", "problem one", "problem two", "problem three"];
    var index = Math.floor(Math.random() * (quotes.length + 1));
    var entry = quotes[index];
    entry = entry.split('^');
    $("#js-problem-container").empty();
    // $("#js-problem-container").html("<strong>" + entry[0] + "</strong>")
    $("#js-problem-container").html(entry[0])
  }
});
