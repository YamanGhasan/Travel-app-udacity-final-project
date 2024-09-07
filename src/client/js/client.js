import { geonamesApi } from './callGeonamesApi';
import { pixabayApi } from './callPixabayApi';
import { weatherbitApi } from './callWeatherbitApi';
import { updateUi } from './updateUi';

const Client = {
  geonamesApi,
  pixabayApi,
  weatherbitApi,
  updateUi
};

export default Client;
