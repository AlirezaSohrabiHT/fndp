export default function Footer() {
  const enamadHTML = `
<a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=679330&Code=dKgihrGGXhINkcijwKPhlQzDBZp6mCvX'><img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=679330&Code=dKgihrGGXhINkcijwKPhlQzDBZp6mCvX' alt='' style='cursor:pointer' code='dKgihrGGXhINkcijwKPhlQzDBZp6mCvX'></a>
  `;

  return (
    <footer className="border-t border-slate-200 bg-white pt-12 pb-8 text-sm text-slate-500">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-right">
          <span className="font-bold text-[#071a2b]">فرداد نیرو</span>
          <span className="hidden md:inline text-slate-300">|</span>
          <p>© ۱۴۰۳ تمامی حقوق محفوظ است.</p>
        </div>

        <div
          className="flex items-center gap-4 grayscale opacity-70 transition-all hover:grayscale-0 hover:opacity-100"
          dangerouslySetInnerHTML={{ __html: enamadHTML }}
        />
      </div>
    </footer>
  );
}