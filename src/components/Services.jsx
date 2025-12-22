const SERVICES = [
  {
    icon: "GIS",
    title: "خدمات GIS و پایگاه‌های داده مکانی",
    text:
      "طراحی و توسعه نرم‌افزارهای تخصصی، مشاوره و اجرای پروژه‌های GIS برای جمع‌آوری، کدگذاری و انتقال اطلاعات مکانی و توصیفی به ژئودیتابیس‌ها مطابق با استانداردهای ابلاغی شرکت توانیر و برق‌های منطقه‌ای.",
  },
  {
    icon: "☀︎",
    title: "نیروگاه‌های خورشیدی و انرژی‌های تجدیدپذیر",
    text:
      "طراحی، نظارت، مشاوره و اجرای نیروگاه‌های خورشیدی با رویکرد تخصصی در حوزه انرژی‌های تجدیدپذیر، از مراحل مطالعاتی تا راه‌اندازی و بهره‌برداری.",
  },
  {
    icon: "⚡",
    title: "پست‌ها و خطوط انتقال فوق‌توزیع",
    text:
      "ارائه خدمات طراحی، نظارت، مشاوره و اجرای پروژه‌های مرتبط با پست‌ها و خطوط انتقال فوق‌توزیع با استفاده از نیروهای متخصص و نرم‌افزارهای ویژه این حوزه برای اطمینان از دقت و پایداری شبکه.",
  },
];

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

export default function Services() {
  return (
    <section id="services" className="mb-12">
      <SectionHeader title="خدمات" lead="راهکارهای فردادنیرو در سه حوزه اصلی صنعت برق ارائه می‌شود." />

      <div className="grid gap-6 md:grid-cols-3">
        {SERVICES.map((s) => (
          <article
            key={s.title}
            className="rounded-[14px] bg-white p-5 shadow-[0_14px_30px_rgba(15,23,42,0.12)]"
          >
            <div className="mb-3 grid h-10 w-10 place-items-center rounded-2xl border border-slate-200 bg-slate-50 text-sm text-[#071a2b]">
              {s.icon}
            </div>
            <h3 className="mb-2 text-[15px] font-semibold text-[#071a2b]">{s.title}</h3>
            <p className="text-sm leading-7 text-slate-500">{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
