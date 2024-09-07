const pixabayApi = async (cityName) => {
  const pixabayApiKey = "45853452-b329940ffb198c14a6a60161f";
  const pixabayApiReqURL = `https://pixabay.com/api/?key=${pixabayApiKey}&q=${cityName}&image_type=photo`;

  try {
    console.log("Requesting Pixabay API:", pixabayApiReqURL);
    const res = await fetch(pixabayApiReqURL);

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const result = await res.json();
    console.log("Pixabay API Response:", result);
    return result;
  } catch (error) {
    console.log("Error fetching Pixabay API:", error);
    throw error;
  }
};

export { pixabayApi };
