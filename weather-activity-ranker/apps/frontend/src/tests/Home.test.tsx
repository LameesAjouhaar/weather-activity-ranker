import { render, screen, fireEvent, act } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Home from "../pages/home";
import { RANK_CITY } from "../graphql/queries";

const mocks = [
  {
    request: {
      query: RANK_CITY,
      variables: { city: "Cape Town" },
    },
    result: {
      data: {
        rankCity: [
          {
            date: "2025-12-30",
            weather: {
              temperature: 22,
              precipitation: 5,
              windSpeed: 10,
            },
            scores: [
              {
                activity: "Skiing",
                score: 20,
                description: "Cold temperatures and snowfall improve skiing conditions",
                recommendation: "Not recommended",
              },
            ],
          },
        ],
      },
    },
  },
];

describe("Home component basic test", () => {
  it("renders input and button", () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <Home />
      </MockedProvider>
    );

    expect(screen.getByPlaceholderText(/Enter city/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Rank/i })).toBeInTheDocument();
  });

  it("fetches and displays a ranking", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Home />
    </MockedProvider>
  );

  fireEvent.change(screen.getByPlaceholderText(/Enter city/i), {
    target: { value: "Cape Town" },
  });

  fireEvent.click(screen.getByRole("button", { name: /Rank/i }));

  // Wait for the data to appear
  expect(await screen.findByText("Skiing")).toBeInTheDocument();
  expect(await screen.findByText("Not recommended")).toBeInTheDocument();
  expect(await screen.findByText(/Temp: 22°C/)).toBeInTheDocument();
  expect(await screen.findByText(/Precipitation: 5mm/)).toBeInTheDocument();
  expect(await screen.findByText(/Wind: 10 km\/h/)).toBeInTheDocument();
});
});
