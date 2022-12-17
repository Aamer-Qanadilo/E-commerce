import "./App.css";
import React from "react";
import PageRouter from "./PageRouter";
import { FeaturedProvider } from "./components/FeaturedContext";
import { UserProvider } from "./components/UserContext/UserContext";

function App() {
  return (
    <UserProvider>
      <FeaturedProvider>
        <PageRouter />
      </FeaturedProvider>
    </UserProvider>
  );
}

export default App;
