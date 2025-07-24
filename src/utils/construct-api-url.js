export default function constructApiUrl(location, unitSystem) {
  return (
    'https://weather.visualcrossing.com/' +
    `VisualCrossingWebServices/rest/services/timeline/${location}?` +
    `unitGroup=${unitSystem}&` +
    'include=current&' +
    'key=FUNBB3LMMKZE5XL5LVHG52NCK&' +
    'contentType=json'
  );
}
