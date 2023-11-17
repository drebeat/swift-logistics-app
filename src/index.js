import React from "react";
import ReactDOM from "react-dom/client";
import "./input.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PasswordResetContextProvider from "./contexts/PasswordResetContext";
import AuthContextProvider from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <PasswordResetContextProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </PasswordResetContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);

reportWebVitals();
