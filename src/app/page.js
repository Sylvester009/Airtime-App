import Image from "next/image";

import Header from "./components/header/Header";
import About from "./components/About";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <About />
      <Faqs />
      <Footer />
    </main>
  );
}
