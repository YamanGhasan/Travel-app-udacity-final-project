// callWeatherbitApi.js
export const weatherbitApi = async (geoData) => {
  const weatherURL = "https://api.weatherbit.io/v2.0/forecast/daily";
  const apiKey = "4ff9227d7ff24c2aa5cbba5ea9f69221"; // Use your valid API key here
  const requestURL = `${weatherURL}?lat=${geoData.lat}&lon=${geoData.lng}&key=${apiKey}`;

  try {
    const res = await fetch(requestURL);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error fetching Weatherbit API:", error);
    throw error;
  }
};
