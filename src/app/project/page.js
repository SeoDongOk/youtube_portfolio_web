"use client";
import Header from "../components/header";
import Footer from "../components/footer";
import { ThemeProvider } from "next-themes";
import { getNotionDataApi } from "../data/NotionData";

const demo = getNotionDataApi();
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
            <h1>프로젝트</h1>
            <p>demo</p>
          </div>
        </section>
        <Footer />
      </ThemeProvider>
    </div>
  );
}
