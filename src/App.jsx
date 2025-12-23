import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div dir="rtl" className="min-h-screen selection:bg-blue-500 selection:text-white">
      <Header />
      <main className="mx-auto max-w-7xl px-6">
        <Hero />
        <Services />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}