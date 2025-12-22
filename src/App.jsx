import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Products from "./components/Products.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-800">
      <Header />
      <main className="mx-auto max-w-[1100px] px-6 pb-14 pt-10">
        <Hero />
        <Services />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
