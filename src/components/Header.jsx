import logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-[#071a2b] text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-3 px-6 py-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffffff_0,#ffffff_35%,#07101c_36%,#07101c_100%)]">
            <img
              src={logo}
              alt="لوگوی فرداد نیرو"
              className="h-8 w-8 object-contain drop-shadow-[0_4px_10px_rgba(15,23,42,0.6)]"
            />
          </div>

          <div className="flex flex-col leading-tight">
            <div className="text-sm font-semibold">شرکت فرداد نیرو داده پردازان</div>
            <div className="text-[11px] text-white/75">فعال در صنعت برق و سامانه‌های نرم‌افزاری</div>
          </div>
        </div>

        <nav aria-label="اصلی">
          <ul className="flex flex-wrap items-center gap-2 text-sm md:gap-3">
            {[
              ["#about", "درباره\u00A0ما"],
              ["#services", "خدمات"],
              ["#products", "محصولات"],
              ["#contact", "تماس\u00A0با\u00A0ما"],
            ].map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="inline-flex items-center rounded-full px-3 py-1 text-white/90 transition hover:-translate-y-[1px] hover:bg-slate-900/60 hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
