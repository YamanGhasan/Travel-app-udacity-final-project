const geonamesApi = async (cityName) => {
  const geoURL = "http://api.geonames.org/searchJSON";
  const apiKey = "yamn";   
  const requestURL = `${geoURL}?q=${encodeURIComponent(cityName)}&maxRows=10&username=${apiKey}`;

  try {
    console.log("Requesting Geonames API:", requestURL);
    const res = await fetch(requestURL);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const result = await res.json();
    console.log("Geonames API Response:", result);

    if (result.geonames && result.geonames.length > 0) {
      return result;
    } else {
      throw new Error("Geonames API response is invalid or empty");
    }
  } catch (error) {
    console.log("Error fetching Geonames API:", error);
    throw error;
  }
};

export { geonamesApi };
