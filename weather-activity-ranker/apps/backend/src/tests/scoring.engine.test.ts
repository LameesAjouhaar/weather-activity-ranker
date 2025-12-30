import { scoreDay } from "../services/ranking/scoring.engine";

describe("Scoring Engine", () => {
  it("should score skiing correctly for cold snowy day", () => {
    const day = {
      temperature: 0,
      precipitation: 10,
      windSpeed: 10,
    };

    const scores = scoreDay(day);

    const skiing = scores.find(s => s.activity === "Skiing");
    expect(skiing).toBeDefined();
    expect(skiing?.score).toBe(100); // 40 + 40 + 20
    expect(skiing?.recommendation).toBe("Highly recommended");
  });

  it("should recommend indoor sightseeing for rainy cold day", () => {
    const day = {
      temperature: 5,
      precipitation: 10,
      windSpeed: 5,
    };

    const scores = scoreDay(day);

    const indoor = scores.find(s => s.activity === "Indoor sightseeing");
    expect(indoor).toBeDefined();
    expect(indoor?.recommendation).toBe("Highly recommended");
  });

  it("should recommend surfing for warm and moderate wind", () => {
    const day = {
      temperature: 20,
      precipitation: 0,
      windSpeed: 15,
    };

    const scores = scoreDay(day);

    const surfing = scores.find(s => s.activity === "Surfing");
    expect(surfing).toBeDefined();
    expect(surfing?.recommendation).toBe("Highly recommended");
  });

  it("should recommend outdoor sightseeing for mild, dry weather", () => {
    const day = {
      temperature: 22,
      precipitation: 0,
      windSpeed: 5,
    };

    const scores = scoreDay(day);

    const outdoor = scores.find(s => s.activity === "Outdoor sightseeing");
    expect(outdoor).toBeDefined();
    expect(outdoor?.recommendation).toBe("Highly recommended");
  });
});
