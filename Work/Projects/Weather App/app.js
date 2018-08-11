// Init Storage
const storage = new Storage1();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.city);
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;

  // Change Location
  weather.changeLocation(city);

  // Set location in LS
  storage.setLocationData(city);

  // Get and display weather
  getWeather();

  // close modal
  $('#locModal').modal('hide');
});


// weather.changeLocation('Moscow');

function getWeather() {
  weather.getWeather()
    .then((results) => {
      ui.paint(results);
      // console.log(results);
    })
    .catch(err => console.log(err));
}
