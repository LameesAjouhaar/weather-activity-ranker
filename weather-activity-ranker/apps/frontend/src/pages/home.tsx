import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { RANK_CITY } from "../graphql/queries";

export default function Home() {
  const [city, setCity] = useState("");
  const [fetchRankings, { data, loading, error }] = useLazyQuery(RANK_CITY);


  return (
    <div style={{ padding: 24, fontFamily: "Arial, sans-serif" }}>
      <h1>Weather Activity Ranking</h1>

      <div style={{ marginBottom: 16 }}>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city"
          style={{ padding: 8, fontSize: 16, marginRight: 8 }}
        />
        <button
          onClick={() => fetchRankings({ variables: { city } })}
          style={{ padding: "8px 16px", fontSize: 16 }}
        >
          Rank
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error loading data</p>}

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {data?.rankCity.map((day: any) => (
          <div
            key={day.date}
            style={{
              border: "1px solid #ccc",
              borderRadius: 8,
              padding: 16,
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3 style={{ marginBottom: 8 }}>Date: {day.date}</h3>
            <p>
      🌡 Temp: {day.weather.temperature}°C | ☔ Precipitation: {day.weather.precipitation}mm | 🌬 Wind: {day.weather.windSpeed} km/h
    </p>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                    <th style={{ textAlign: "left", padding: 8 }}>Activity</th>           
                    <th style={{ textAlign: "left", padding: 8 }}>Recommendation</th> 
                    </tr>
                </thead>
                <tbody>
                    {day.scores.map((s: any) => (
                    <tr key={s.activity}>
                        <td style={{ padding: 8 }}>{s.activity}</td>
                        <td style={{ padding: 8 }}>{s.recommendation}</td> 
                    </tr>
                    ))}
                </tbody>
                </table>
          </div>
        ))}
      </div>
    </div>
  );
}
