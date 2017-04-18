var apiKey = "daa0dea45b2dbdba457cfb161d422e8c";

$(document).ready(function() {
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $('.showWeather').text("The city you have chosen is " + city + ".");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey, function(response) {
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%, " + "The longitude of " + city + " is " + response.coord.lon + ", " + " and The latitude of " + city + " is " + response.coord.lat + ".");
    });
  });
});
