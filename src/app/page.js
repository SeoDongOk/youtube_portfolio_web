"use client";
import React, { useState, useEffect } from "react";
import Hero from "./components/Home/hero";
import Footer from "./components/footer";
import Header from "./components/header";
import ThemeProvider from "./components/custom-Themes";

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState("light");
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setCurrentTheme(savedTheme || "light");
    console.log("currentTheme: ", currentTheme);
  }, []);

  return (
    <ThemeProvider currentTheme={currentTheme}>
      <div>
        <Header />
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
          <div
            className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
            bis_skin_checked="1"
          >
            <Hero />
          </div>
        </section>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
