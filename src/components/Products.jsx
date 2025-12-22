function SectionHeader({ title, lead }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div className="h-8 w-2 rounded-full bg-gradient-to-b from-[#0f2b44] to-[#071a2b] shadow-lg" />
      <div>
        <h2 className="text-lg font-semibold text-[#071a2b]">{title}</h2>
        <p className="text-sm text-slate-500">{lead}</p>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section id="products" className="mb-12">
      <SectionHeader title="محصولات" lead="سامانه‌ای برای ساده‌سازی فرآیندهای پیچیده کدگذاری در صنعت برق." />

      <div className="rounded-[14px] bg-white p-6 shadow-[0_14px_30px_rgba(15,23,42,0.12)]">
        <div className="grid gap-7 md:grid-cols-[1.5fr_2fr] md:items-start">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-blue-50/40 px-3 py-1 text-sm text-[#071a2b]">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              <span>سامانه کدگذاری آنلاین تجهیزات و هستنده‌های مکانی</span>
            </div>

            <h3 className="mb-2 text-[15px] font-semibold text-[#071a2b]">سامانه کدگذاری آنلاین</h3>

            <p className="mb-4 text-sm leading-7 text-slate-600">
              این سامانه به منظور تسهیل فرآیند جمع‌آوری و ورود اطلاعات مکانی و غیرمکانی صنعت برق طراحی شده است تا کاربران بتوانند
              مطابق دستورالعمل‌های توانیر، خروجی جداول کدگذاری‌شده را به صورت خودکار و در فرمت‌های استاندارد دریافت نمایند.
            </p>

            <div className="grid gap-2 sm:grid-cols-2">
              {[
                ["استاندارد توانیر", "پشتیبانی از ساختار دیتابیس‌های برق منطقه‌ای و تجمیع کشوری"],
                ["کاربران هدف", "واحدهای GIS برق منطقه‌ای، مشاوران و پیمانکاران صنعت برق"],
                ["خروجی‌ها", "تولید خودکار جداول کدگذاری در قالب‌ها و فرمت‌های مختلف دیتابیسی"],
                ["مزیت کلیدی", "کاهش چشمگیر زمان و هزینه ورود و کنترل اطلاعات پروژه‌ها"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl border border-slate-100 bg-slate-50/70 p-3 text-sm text-slate-600">
                  <div className="mb-1 text-xs text-slate-400">{k}</div>
                  {v}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 text-sm leading-7 text-slate-500">
            <p>
              با توجه به الزام شرکت محترم توانیر مبنی بر ورود کلیه اطلاعات مکانی و توصیفی صنعت برق در فرمت‌های استاندارد و
              دیتابیس‌های مصوب، اقدامات مختلفی برای طراحی سامانه‌های واسط انجام شده است. با تکمیل و توسعه استانداردها و تغییرات
              متعدد در اقلام اطلاعاتی، نهایتاً دستورالعمل جامع نحوه کدگذاری یا شناسه‌گذاری تجهیزات و هستنده‌های مکانی و غیرمکانی
              ابلاغ گردید که به دلیل ارتباطات پیچیده میان جداول، اجرای آن به‌صورت دستی بسیار دشوار است.
            </p>

            <p>
              شرکت فرداد نیرو به منظور تسهیل این فرآیند، <strong className="text-slate-700">سامانه کدگذاری آنلاین</strong> را راه‌اندازی
              نموده است. در این سامانه، کاربران با مشخص کردن برخی اقلام اطلاعاتی مرتبط با بخشی که قصد ورود اطلاعات آن را دارند،
              می‌توانند به‌صورت اتوماتیک خروجی جداول کدگذاری‌شده خود را در قالب‌های متنوع، از جمله فرمت استاندارد دیتابیس، دریافت کنند.
            </p>

            <p>
              نتیجه استفاده از این سامانه، <strong className="text-slate-700">صرفه‌جویی قابل توجه در زمان و هزینه‌های جانبی پروژه‌ها</strong>{" "}
              و همچنین کاهش خطاهای انسانی در فرآیند ورود و یکپارچه‌سازی داده‌ها است.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
