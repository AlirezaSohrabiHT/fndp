import { Globe, Sun, Zap } from "lucide-react";

const SERVICES = [
  {
    icon: Globe,
    color: "bg-blue-500",
    shadow: "shadow-blue-500/30",
    title: "GIS و پایگاه‌های مکانی",
    desc: "طراحی و توسعه نرم‌افزار، مشاوره و اجرای پروژه‌های GIS جهت کدگذاری و انتقال اطلاعات به ژئودیتابیس‌های استاندارد توانیر.",
  },
  {
    icon: Sun,
    color: "bg-amber-500",
    shadow: "shadow-amber-500/30",
    title: "نیروگاه‌های خورشیدی",
    desc: "طراحی، نظارت و اجرای نیروگاه‌های خورشیدی با رویکرد تخصصی در حوزه تجدیدپذیر، از مطالعات اولیه تا بهره‌برداری.",
  },
  {
    icon: Zap,
    color: "bg-purple-500",
    shadow: "shadow-purple-500/30",
    title: "پست‌ها و خطوط انتقال",
    desc: "خدمات مهندسی، نظارت و اجرای پست‌ها و خطوط فوق‌توزیع با تضمین پایداری شبکه و رعایت دقیق استانداردها.",
  },
];

export default function Services() {
  return (
    <section id="services" className="mb-24">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-[#071a2b]">خدمات تخصصی</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">راهکارهای جامع مهندسی برای چالش‌های پیچیده صنعت برق</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {SERVICES.map((s, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:border-blue-100"
          >
            <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl ${s.color} text-white shadow-lg ${s.shadow}`}>
              <s.icon size={28} />
            </div>
            <h3 className="mb-4 text-xl font-bold text-slate-800 group-hover:text-blue-700 transition-colors">
              {s.title}
            </h3>
            <p className="text-sm leading-7 text-slate-500">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}