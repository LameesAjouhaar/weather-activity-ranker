import { fetchWeather } from "../../services/weather/openMeteo.client";
import { scoreDay } from "../../services/ranking/scoring.engine";

export const rankCity = async (
  _: unknown,
  { city }: { city: string }
) => {
  const forecast = await fetchWeather(city);

  return forecast.map(day => ({
    date: day.date,
    scores: scoreDay(day),
  }));
};
