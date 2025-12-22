export default function Hero() {
  return (
    <section id="about" className="mb-12">
      <div className="grid gap-7 md:grid-cols-[2.2fr_1.4fr] md:items-center">
        <div className="rounded-[14px] bg-white p-6 shadow-[0_14px_30px_rgba(15,23,42,0.12)]">
          <h1 className="mb-2 text-2xl font-bold text-[#071a2b]">
            شرکت فرداد نیرو داده پردازان – فردادنیرو
          </h1>

          <p className="mb-4 text-sm text-slate-500">
            تاسیس سال ۱۳۹۰، فعال در حوزه‌های تخصصی صنعت برق با تمرکز بر سامانه‌های نرم‌افزاری، GIS،
            انرژی‌های تجدیدپذیر و طراحی و اجرای پست‌ها و خطوط انتقال.
          </p>

          <div className="space-y-3 text-[15px] leading-8 text-slate-800">
            <p>
              شرکت فرداد نیرو داده پردازان با برند <strong>فردادنیرو</strong> در زمینه صنعت برق فعالیت می‌نماید. یکی از حوزه‌های
              تخصصی این شرکت طراحی و توسعه نرم‌افزار، نظارت، مشاوره و اجرای خدمات{" "}
              <strong>GIS (پایگاه داده‌های مکانی و توصیفی)</strong> است که با استفاده از کادر مجرب و توسعه نرم‌افزارهای مرتبط،
              امکان کدگذاری اطلاعات و انتقال آن‌ها به بانک‌های ژئودیتابیس مطابق با آخرین استانداردهای ابلاغی از سوی شرکت توانیر را فراهم می‌آورد.
            </p>

            <p>
              از دیگر حوزه‌های فعالیت شرکت، <strong>انرژی‌های تجدیدپذیر</strong> به‌صورت تخصصی در بخش{" "}
              <strong>انرژی خورشیدی</strong> و نیز طراحی، نظارت، مشاوره و اجرای{" "}
              <strong>پست‌ها و خطوط انتقال فوق‌توزیع</strong> است.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {["تاسیس ۱۳۹۰", "خدمات تخصصی GIS", "نیروگاه‌های خورشیدی", "پست‌ها و خطوط فوق‌توزیع"].map((b) => (
              <span
                key={b}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-600"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        <aside className="relative overflow-hidden rounded-[22px] bg-[radial-gradient(circle_at_10%_0%,#102841_0,#040b12_65%,#000000_100%)] p-6 text-white shadow-[0_18px_30px_rgba(15,23,42,0.7)]">
          <div className="pointer-events-none absolute inset-0 opacity-90 mix-blend-screen [background-image:radial-gradient(circle_at_90%_-10%,rgba(96,165,250,0.75)_0,transparent_50%),radial-gradient(circle_at_0_100%,rgba(45,212,191,0.15)_0,transparent_50%)]" />

          <div className="relative">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-300/40 bg-slate-900/40 px-3 py-1 text-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(34,197,94,0.9)]" />
              <span>همراه فعالان صنعت برق کشور</span>
            </div>

            <div className="mb-2 text-base font-semibold">یکپارچه‌سازی داده و انرژی</div>

            <p className="mb-5 text-sm text-slate-200/95">
              از طراحی پایگاه‌های داده مکانی تا اجرای نیروگاه‌های خورشیدی و خطوط فوق‌توزیع، فردادنیرو در کنار شماست تا
              پروژه‌هایتان مطابق آخرین استانداردهای توانیر، دقیق، سریع و قابل اتکا اجرا شوند.
            </p>

            <div className="flex gap-6 text-sm">
              <div>
                <div className="text-lg font-bold">GIS</div>
                <div className="text-xs text-slate-200/90">طراحی و توسعه پایگاه‌های مکانی و سامانه‌های کدگذاری</div>
              </div>
              <div>
                <div className="text-lg font-bold">خورشیدی</div>
                <div className="text-xs text-slate-200/90">طراحی، نظارت و اجرای نیروگاه‌های خورشیدی</div>
              </div>
            </div>

            <div className="mt-4 text-xs text-slate-200/80">
              هم‌راستا با استانداردهای دیتابیس توانیر و برق منطقه‌ای
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
