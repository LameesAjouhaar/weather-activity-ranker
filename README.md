## Weather Activity Ranker

A web application that ranks cities/towns by desirability for various activities over the next 7 days, based on weather data.

## Getting Started

Node.js >= 20
npm >= 9

## Backend
cd apps/backend
npm install
npm run dev

The backend runs on http://localhost:4000/.

## Frontend
cd apps/frontend
npm install
npm run dev

The frontend runs on http://localhost:5173/.


## 1. Architecture Overview & Technical Choices

## Frontend

React + TypeScript: For scalable, type-safe UI development.

Apollo Client: Handles GraphQL queries and state management.

Component Design:

Home.tsx handles user input and renders ranking results.

Clean separation between UI, state, and data fetching.

Styling: Inline styles for simplicity in this assessment; production ready version could migrate to CSS Modules or Tailwind.

## Backend

Node.js + Apollo Server + TypeScript: Provides a GraphQL API.

GraphQL Schema: Clearly separates DayRanking, ActivityScore, and Weather types.

Scoring Engine: Encapsulated in scoring.engine.ts for maintainability, extensibility, and testability.

Weather Data Integration: Uses Open Meteo API (openMeteo.client.ts) for forecasts.

Testing

Jest + React Testing Library: Frontend and backend unit tests.

Mocked Apollo Provider: Ensures predictable, isolated frontend tests.

Focus: Core functionality and UI rendering; tests are extendable for more coverage.

## 2. AI Assistance

All AI generated output was carefully reviewed, refactored, and integrated to meet production quality standards, ensuring readability, maintainability, and adherence to best practices.

## 3. Omissions & Trade-Offs

UI Polish: Styling is minimal; prioritized functional clarity over design.

Weather Details: Only basic weather metrics included; full-featured UI with icons or graphs was skipped to focus on core ranking logic.

Error Handling: Basic error messages implemented; extensive UX improvements (e.g., retry logic, spinners) were omitted for time constraints.

Testing Coverage: Core flows are tested; edge cases and network errors can be added in a production iteration.

Future Improvements

Extract reusable UI components (e.g., tables, cards) for better scalability.

Add caching and loading state optimizations for API calls.

Integrate full responsive design for mobile devices.

## 4. Key Design Principles

Separation of Concerns: Backend handles scoring logic and API, frontend focuses on rendering.

Extensibility: Adding new activities or scoring rules requires minimal changes.

Readability & Maintainability: TypeScript types, modular functions, and clear code structure.

AI as a Tool: Used to accelerate development, not replace judgment.
