export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pt-12 pb-8 text-sm text-slate-500">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-right">
             <span className="font-bold text-[#071a2b]">فرداد نیرو</span>
             <span className="hidden md:inline text-slate-300">|</span>
             <p>© ۱۴۰۳ تمامی حقوق محفوظ است.</p>
        </div>
        
        <div className="flex items-center gap-4 grayscale opacity-70 transition-all hover:grayscale-0 hover:opacity-100">
          <a
            href="https://trustseal.enamad.ir/?id=5030808&Code=dKgihrGGXhINkcijwKPhlQzDBZp6mCvX"
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <img
              src="https://trustseal.enamad.ir/logo.aspx?id=5030808&Code=dKgihrGGXhINkcijwKPhlQzDBZp6mCvX"
              alt="E-Namad"
              className="h-14 w-auto object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}