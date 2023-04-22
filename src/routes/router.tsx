import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Challenges } from "../pages/Challenges";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/challenges" element={<Challenges />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
