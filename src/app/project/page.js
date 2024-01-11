"use client";
import Header from "../components/header";
import Footer from "../components/footer";
import { ThemeProvider } from "next-themes";

// const demo = getServerSideProps();

export default function Home({ projectNames }) {
  console.log("projectNames: ", projectNames);
  return (
    <div>
      <ThemeProvider>
        <Header />
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
          <div
            className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
            bis_skin_checked="1"
          >
            <h1>프로젝트</h1>
          </div>
        </section>
        <Footer />
      </ThemeProvider>
    </div>
  );
}
