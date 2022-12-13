import { WEATHER_API_ENDPOINT, WEATHER_API_KEY } from "./constants";

export const getData = async ([lat, lon]) => {
  try {
    const response = await fetch(
      `${WEATHER_API_ENDPOINT}lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    }
  } catch (err) {
    console.log(err.message);
  }
};
