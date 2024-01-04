"use client";
import Hero from "./components/Home/hero";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
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
  );
}
