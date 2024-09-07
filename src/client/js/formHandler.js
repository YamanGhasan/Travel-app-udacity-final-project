import { geonamesApi } from './callGeonamesApi';
import { pixabayApi } from './callPixabayApi';
import { weatherbitApi } from './callWeatherbitApi';
import { updateUi } from './updateUi';

export async function formHandler() {
  let geoData = {};
  const cityName = document.getElementById("zip").value;
  const departure = document.getElementById("date").value;

  let countDownDate = Date.parse(departure);
  let now = new Date().getTime();
  let distance = countDownDate - now;
  let daysUntil = Math.floor(distance / (1000 * 60 * 60 * 24));
  geoData.daysUntil = daysUntil;

  try {
    const geoRes = await geonamesApi(cityName);
    console.log("Geonames API Response:", geoRes);

    if (geoRes.geonames && geoRes.geonames.length > 0) {
      geoData.name = geoRes.geonames[0].name;
      geoData.lat = geoRes.geonames[0].lat; // Ensure lat is correctly assigned
      geoData.lng = geoRes.geonames[0].lng; // Ensure lng is correctly assigned
      geoData.countryCode = geoRes.geonames[0].countryCode;

      if (geoData.lat && geoData.lng) {
        const weatherRes = await weatherbitApi(geoData); // Pass the correct geoData object
        console.log("Weatherbit API Response:", weatherRes);

        if (weatherRes.data && weatherRes.data.length > 0) {
          geoData.currentTemp = weatherRes.data[0].temp;
          geoData.weatherIcon = weatherRes.data[0].weather.icon;

          const pixabayRes = await pixabayApi(cityName);
          console.log("Pixabay API Response:", pixabayRes);

          if (pixabayRes.hits && pixabayRes.hits.length > 0) {
            geoData.image = pixabayRes.hits[0].webformatURL;
            console.log(geoData);
            updateUi(geoData);
          } else {
            console.error("No images found in Pixabay API response.");
          }
        } else {
          console.error("No weather data found in Weatherbit API response.");
        }
      } else {
        console.error("Latitude and Longitude are missing in geoData.");
      }
    } else {
      console.error("No geonames data found in Geonames API response.");
    }
  } catch (err) {
    console.error("Error in formHandler:", err);
  }
}
