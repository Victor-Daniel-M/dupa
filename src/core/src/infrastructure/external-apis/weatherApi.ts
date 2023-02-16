import axios from 'axios';

export async function getCurrentWeather(city: string) {
  const apiKey = 'your_api_key';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  const { data } = await axios.get(url);
  return data;
}
