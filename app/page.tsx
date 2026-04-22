import { LanguageProvider } from "./i18n/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Solutions from "./components/Solutions";
import WhySCoreTech from "./components/WhySCoreTech";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <About />
        <Solutions />
        <WhySCoreTech />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
