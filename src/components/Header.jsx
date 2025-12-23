import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";

const NAV_LINKS = [
  { href: "#about", label: "درباره ما" },
  { href: "#services", label: "خدمات" },
  { href: "#products", label: "محصولات" },
  { href: "#contact", label: "تماس با ما" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071a2b]/95 backdrop-blur-md supports-[backdrop-filter]:bg-[#071a2b]/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-full border border-white/10 bg-white/5 shadow-inner">
            <img src={logo} alt="فرداد نیرو" className="h-full w-full object-cover scale-110" />
          </div>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="font-bold text-white tracking-wide">فرداد نیرو</span>
            <span className="text-[10px] text-slate-400">داده پردازان صنعت برق</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:bg-white/10 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="rounded-lg p-2 text-slate-300 hover:bg-white/10 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-white/10 bg-[#071a2b] p-4 shadow-xl md:hidden">
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg p-3 text-sm text-slate-300 hover:bg-white/10 hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}