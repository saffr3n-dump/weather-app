export default function formatWeatherData(data) {
  return {
    address: data.resolvedAddress,
    condition: data.currentConditions.conditions,
    icon: `${data.currentConditions.icon}.png`,
    realTemp: data.currentConditions.temp,
    feelTemp: data.currentConditions.feelslike,
  };
}
