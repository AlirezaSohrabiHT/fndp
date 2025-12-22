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

export default function Contact() {
  return (
    <section id="contact">
      <SectionHeader title="تماس با ما" lead="برای همکاری در پروژه‌های اجرایی یا مشاوره، در کنار شما هستیم." />

      <div className="grid gap-6 md:grid-cols-[2fr_1.2fr]">
        <div className="rounded-[14px] bg-white p-6 shadow-[0_14px_30px_rgba(15,23,42,0.12)]">
          <p className="text-sm leading-7 text-slate-500">
            همکاران ما در شرکت فرداد نیرو آمادگی دارند در صورت تمایل شما نسبت به همکاری در پروژه‌های مختلف اجرایی و یا ارائه
            مشاوره در خصوص فعالیت‌های مرتبط، اقدام نمایند. برای کسب اطلاعات بیشتر یا آغاز همکاری، می‌توانید از طریق شماره‌های
            تماس زیر با ما در ارتباط باشید.
          </p>
        </div>

        <div className="rounded-[14px] bg-gradient-to-br from-[#071a2b] to-slate-950 p-5 text-slate-100 shadow-[0_14px_30px_rgba(15,23,42,0.12)]">
          <div className="mb-3 text-[15px] font-semibold text-white">راه‌های ارتباطی</div>

          <div className="space-y-3 text-sm">
            <div className="flex items-baseline gap-2">
              <span className="min-w-[72px] text-xs text-slate-300">تلفن مشهد</span>
              <span className="font-medium [direction:ltr] [unicode-bidi:bidi-override]">051-91098480</span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="min-w-[72px] text-xs text-slate-300">تلفن تهران</span>
              <span className="font-medium [direction:ltr] [unicode-bidi:bidi-override]">021-91098480</span>
            </div>

            <p className="pt-2 text-xs text-slate-300">
              برای هماهنگی جلسات حضوری، ارائه دمو از سامانه کدگذاری یا دریافت اطلاعات تکمیلی پروژه‌ها، از طریق شماره‌های فوق با
              تیم فردادنیرو در ارتباط باشید.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
