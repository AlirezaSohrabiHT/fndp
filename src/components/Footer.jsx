export default function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-900/40 bg-[#071a2b] py-4 text-sm text-slate-200/85">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-3 px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-300/90" />
          <span>© تمامی حقوق متعلق به شرکت فرداد نیرو داده پردازان می‌باشد.</span>
        </div>

        <a
          referrerPolicy="origin"
          target="_blank"
          rel="noreferrer"
          href="https://trustseal.enamad.ir/?id=5030808&Code=dKgihrGGXhINkcijwKPhlQzDBZp6mCvX"
          className="inline-flex"
        >
          <img
            referrerPolicy="origin"
            src="https://trustseal.enamad.ir/logo.aspx?id=5030808&Code=dKgihrGGXhINkcijwKPhlQzDBZp6mCvX"
            alt="اینماد"
            className="h-10 w-auto"
          />
        </a>
        

        <div className="text-slate-300/95">
          تاسیس ۱۳۹۰ – فردادنیرو | راهکارهای هوشمند برای صنعت برق
        </div>
      </div>
    </footer>
  );
}
