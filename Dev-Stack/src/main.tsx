import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Technologies from "./components/Technologies";
import type { IPopularProduct } from "./types";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

const usersFetch = async (): Promise<IPopularProduct[]> => {
  const response = await fetch("/technologies-card.json");
  const data = await response.json();
  return data;
};

const usersPromise = usersFetch();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <Banner />
    <Suspense
      fallback={
        <h3 className="mt-5 text-xl font-semibold text-gray-800">Loading...</h3>
      }
    >
      <Technologies usersPromise={usersPromise} />
    </Suspense>
    <Footer/>
    <ToastContainer />
  </StrictMode>,
);
