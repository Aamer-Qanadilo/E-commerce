import "./App.css";
import React from "react";
import PageRouter from "./PageRouter";
import { FeaturedProvider } from "./components/FeaturedContext";

function App() {
  return (
    <FeaturedProvider>
      <PageRouter />
    </FeaturedProvider>
  );
}

export default App;
