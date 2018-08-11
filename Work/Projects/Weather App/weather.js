class Weather {
  constructor(city) {
    // this.apiKey = '99dfe35fcb7de1ee';
    this.apiKey = '61beb78dc84c4c4ba22105408180508';
    this.city = city;
    // this.country = country;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.apixu.com/v1/current.json?key=61beb78dc84c4c4ba22105408180508&q=${this.city}`);

    return await response.json();
  }

  // Change weather location
  changeLocation(city) {
    this.city = city;
    // this.country = country;
  }
}
