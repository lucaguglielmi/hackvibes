$(document).ready(function() {
  showQuote();

  $("#js-solution").on("click", function() {
    showQuote();
  })

  function showQuote() {
    var quotes = ["Blockchain", "AI", "Crowd Sourcing", "Your Friends"];
    var index = Math.floor(Math.random() * (quotes.length + 1));
    var entry = quotes[index];
    entry = entry.split('^');
    $("#js-solution-container").empty();
    // $("#js-solution-container").html("<strong>" + entry[0] + "</strong>")
    $("#js-solution-container").html(entry[0])

  }
});
