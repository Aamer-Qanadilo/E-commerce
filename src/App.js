import "./App.css";
import React from "react";
import PageRouter from "./PageRouter";
import { FeaturedProvider } from "./components/FeaturedContext";
import { UserProvider } from "./components/UserContext/UserContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <UserProvider>
      <FeaturedProvider>
        <ToastContainer />
        <PageRouter />
      </FeaturedProvider>
    </UserProvider>
  );
}

export default App;
