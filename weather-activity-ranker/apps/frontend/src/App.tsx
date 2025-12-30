import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo/client";
import Home from "./pages/home";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}