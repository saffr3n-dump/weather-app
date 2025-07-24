import getWeatherData from './get-weather-data';

const scaleEls = document.querySelectorAll('.scale');
const addressEl = document.querySelector('.address');
const conditionEl = document.querySelector('.condition');
const weatherIcon = document.querySelector('.icon');
const realTempValueEl = document.querySelector('.real .value');
const feelTempValueEl = document.querySelector('.feel .value');

export default async function updateDom(location, scale) {
  const data = await getWeatherData(location, scale);
  const { default: iconSrc } = await import(
    `../assets/weather-icons/${data.icon}`
  );

  scaleEls.forEach((el) => (el.textContent = scale));
  addressEl.textContent = data.address;
  conditionEl.textContent = data.condition;
  weatherIcon.src = iconSrc;
  realTempValueEl.textContent = data.realTemp;
  feelTempValueEl.textContent = data.feelTemp;
}
