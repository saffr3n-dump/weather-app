import formatWeatherData from './utils/format-weather-data';

function constructUrlString(location, unitSystem) {
  return (
    'https://weather.visualcrossing.com/' +
    `VisualCrossingWebServices/rest/services/timeline/${location}?` +
    `unitGroup=${unitSystem}&` +
    'key=FUNBB3LMMKZE5XL5LVHG52NCK&' +
    'contentType=json'
  );
}

async function getWeatherData(location, unitSystem) {
  const url = constructUrlString(location, unitSystem);
  const response = await fetch(url, { mode: 'cors' });
  const data = await response.json();
  return formatWeatherData(data);
}
