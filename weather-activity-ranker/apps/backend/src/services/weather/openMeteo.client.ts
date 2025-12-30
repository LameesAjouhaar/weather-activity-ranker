import fetch from "node-fetch";

type WeatherDay = {
  date: string;
  temperature: number;
  precipitation: number;
  windSpeed: number;
};

type GeoResult = {
  results: Array<{
    latitude: number;
    longitude: number;
    name: string;
    country: string;
  }>;
};

type ForecastResponse = {
  daily: {
    time: string[];
    temperature_2m_max: number[];
    precipitation_sum: number[];
    windspeed_10m_max: number[];
  };
};

export async function fetchWeather(city: string): Promise<WeatherDay[]> {
  const geoRes = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
  );
  const geo = (await geoRes.json()) as GeoResult;

  if (!geo.results?.length) {
    throw new Error("City not found");
  }

  const { latitude, longitude } = geo.results[0];

  const weatherRes = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,precipitation_sum,windspeed_10m_max&timezone=auto`
  );

  const data = (await weatherRes.json()) as ForecastResponse;

  return data.daily.time.map((date: string, index: number) => ({
    date,
    temperature: data.daily.temperature_2m_max[index],
    precipitation: data.daily.precipitation_sum[index],
    windSpeed: data.daily.windspeed_10m_max[index],
  }));
}
