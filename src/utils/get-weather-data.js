import constructApiUrl from './construct-api-url';
import formatWeatherData from './format-weather-data';

export default async function getWeatherData(location, scale) {
  const unitSystem = scale === 'C' ? 'metric' : 'us';
  const url = constructApiUrl(location, unitSystem);
  const response = await fetch(url, { mode: 'cors' });
  const data = await response.json();
  return formatWeatherData(data);
}
