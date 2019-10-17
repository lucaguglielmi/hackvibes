$(document).ready(function() {
  showQuote();

  $("#js-problem").on("click", function() {
    showQuote();
  })

  function showQuote() {
    var quotes = ["Global warming", "lack of economic opportunity and employment", "lack of education", "food and water security", "Government accountability", "Biosecurity", "risks from AI"];
    var index = Math.floor(Math.random() * (quotes.length + 1));
    var entry = quotes[index];
    entry = entry.split('^');
    $("#js-problem-container").empty();
    // $("#js-problem-container").html("<strong>" + entry[0] + "</strong>")
    $("#js-problem-container").html(entry[0])
  }
});
