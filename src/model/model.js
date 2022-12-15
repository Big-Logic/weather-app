import { WEATHER_API_ENDPOINT, WEATHER_API_KEY, CITIES_LIST_API_ENDPOINT, CITIES_LIST_API_KEY } from "./constants";

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

export const getCities = async (value) => {
  try {
    const response = await fetch(
      `${CITIES_LIST_API_ENDPOINT}name=${value.trim()}&limit=15`,
      {
        headers: {
          "X-Api-Key": `${CITIES_LIST_API_KEY}`,
        },
        contentType: "application/json",
        method: "GET",
      }
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
