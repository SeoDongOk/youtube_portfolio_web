"use client";
import Header from "../components/header";
import Footer from "../components/footer";
import { ThemeProvider } from "next-themes";
import { TOKEN } from "../config";
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
          </div>
        </section>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export async function getStaticProps() {
  const options = {
    method: "POST",
    header: {
      Accept: "application/json",
      "Notion-Version": "2022-02-22",
      "Content-Type": "application/json",
      Authorization: `${TOKEN}`,
    },
    body: JSON.stringify({ page_size: 100 }),
  };
}
