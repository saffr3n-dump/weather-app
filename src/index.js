import './style.css';
import updateDom from './utils/update-dom';

let location = 'Tokyo';
let scale = 'C';

const searchForm = document.querySelector('.search');
const searchInput = searchForm.querySelector('#search');
searchForm.onsubmit = function (e) {
  e.preventDefault();
  location = searchInput.value;
  updateDom(location, scale);
};

updateDom(location, scale);
