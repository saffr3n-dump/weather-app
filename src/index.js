import constructApiUrl from './utils/construct-api-url';
import formatWeatherData from './utils/format-weather-data';

async function getWeatherData(location, unitSystem) {
  const url = constructApiUrl(location, unitSystem);
  const response = await fetch(url, { mode: 'cors' });
  const data = await response.json();
  return formatWeatherData(data);
}
