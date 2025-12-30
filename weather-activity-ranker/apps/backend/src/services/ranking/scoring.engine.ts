type WeatherDay = {
  temperature: number;
  precipitation: number;
  windSpeed: number;
};

export function scoreDay(day: WeatherDay) {
  return [
    scoreSkiing(day),
    scoreSurfing(day),
    scoreOutdoor(day),
    scoreIndoor(day),
  ];
}

function scoreSkiing(day: WeatherDay) {
  let score = 0;

  if (day.temperature < 2) score += 40;
  if (day.precipitation > 5) score += 40;
  if (day.windSpeed < 20) score += 20;

  return {
    activity: "Skiing",
    score,
    description: "Cold temperatures and snowfall improve skiing conditions",
  };
}

function scoreSurfing(day: WeatherDay) {
  let score = 0;

  if (day.windSpeed >= 10 && day.windSpeed <= 25) score += 50;
  if (day.temperature > 15) score += 30;
  if (day.precipitation < 5) score += 20;

  return {
    activity: "Surfing",
    score,
    description: "Moderate wind and warm weather favor surfing",
  };
}

function scoreOutdoor(day: WeatherDay) {
  let score = 0;

  if (day.precipitation < 3) score += 50;
  if (day.temperature >= 10 && day.temperature <= 25) score += 50;

  return {
    activity: "Outdoor sightseeing",
    score,
    description: "Dry and mild weather is best for outdoor activities",
  };
}

function scoreIndoor(day: WeatherDay) {
  let score = 0;

  if (day.precipitation > 5) score += 50;
  if (day.temperature < 10) score += 50;

  return {
    activity: "Indoor sightseeing",
    score,
    description: "Poor outdoor weather makes indoor attractions appealing",
  };
}
