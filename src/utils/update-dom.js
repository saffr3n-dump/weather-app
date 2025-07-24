import getWeatherData from './get-weather-data';

const scaleEls = document.querySelectorAll('.scale');
const addressEl = document.querySelector('.address');
const conditionEl = document.querySelector('.condition');
const weatherIcon = document.querySelector('.icon');
const realTempValueEl = document.querySelector('.real .value');
const feelTempValueEl = document.querySelector('.feel .value');
const modal = document.querySelector('dialog');
const modalTitle = modal.querySelector('h1');
const modalDesc = modal.querySelector('p');

export default async function updateDom(location, scale) {
  const data = await getWeatherData(location, scale);

  if (typeof data === 'number') {
    if (data === 400) {
      modalTitle.textContent = 'Invalid Location';
      modalDesc.textContent =
        "If you're trying to use latitude and longitude, please separate them with space.";
    } else {
      modalTitle.textContent = 'Oops!';
      modalDesc.textContent =
        'Something went wrong. Service might be temporarily unavailable. Please try again later.';
    }
    modal.showModal();
    return;
  }

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
