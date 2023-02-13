import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePage from "./components/CreatePage";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from "./components/Navbar1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/newjob" element={<CreatePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
