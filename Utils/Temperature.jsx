export function confertToFahrenheit(celcius) {
  return (celcius * 9) / 5 + 32;
}

export function convertToCelcius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}
