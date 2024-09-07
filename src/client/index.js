import { formHandler } from "./js/formHandler";
import { updateUi } from "./js/updateUi";
import { geonamesApi } from "./js/callGeonamesApi";
import { pixabayApi } from "./js/callPixabayApi";
import { weatherbitApi } from "./js/callWeatherbitApi";

import './styles/style.scss';

// Ensure DOM is fully loaded before attaching event listener
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("generate").addEventListener("click", formHandler);
});

export { formHandler, updateUi, geonamesApi, pixabayApi, weatherbitApi };
