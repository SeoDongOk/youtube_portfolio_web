"use client";
import Header from "../components/header";
import Footer from "../components/footer";
import { ThemeProvider } from "next-themes";
export default function Home() {
  return (
    <div>
      <ThemeProvider>
        <Header />
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
          <div
            className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
            bis_skin_checked="1"
          >
            <h1>connect</h1>
          </div>
        </section>
        <Footer />
      </ThemeProvider>
    </div>
  );
}
