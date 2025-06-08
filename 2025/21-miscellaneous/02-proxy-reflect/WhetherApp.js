/**
 *  baseurl, api version, end point, api key, query/location q=bangalore
 *   https://api.weatherapi.com/v1/current.json?key=cf472f1d99374a7693a112657250806&q=Surat&aqi=nov
 */


function* generateSequences() {
    for (let i = 0; i < 10; i++) {
        yield i;
    }
}

class WhetherApp {
    #baseURL    = '';
    #apiVersion = '';
    #endPoint   = '';
    #apiKey     = '';
    location    = '';
    
    constructor(baseURL = "") {
        this.#baseURL = baseURL;
    }

    #constructURL(location) {
        this.location = location;
        return `${this.#baseURL}/${this.#apiVersion}/${this.#endPoint}?key=${this.#apiKey}&q=${this.location}`;
    }

    setBaseURL(baseURL) {
        this.#baseURL = baseURL;
    }

    setApiVersion(version) {
        this.#apiVersion = version;
    }

    setEndPoint(endPoint) {
        this.#endPoint = endPoint;
    }


    setApiKey(key) {
        this.#apiKey = key;
    }

    async #fetchWeather(location) {
        const url = this.#constructURL(location);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error : ${response.status}`);
            }
            return await response.json();

        } catch (error) {
            console.error(`Failed to fetch Weather Data: ${error}`)
            return null;
        }
    }
   
    async getWeather(location) {
        return await this.#fetchWeather(location);
    }
}

const weatherApp = new WhetherApp();

  weatherApp.setBaseURL('https://api.weatherapi.com');
  weatherApp.setApiVersion('v1');
  weatherApp.setEndPoint('current.json');
  weatherApp.setApiKey('cf472f1d99374a7693a112657250806');

  const weatherData = await weatherApp.getWeather('Surat');
  console.log('WEATHER DATA:', weatherData);

