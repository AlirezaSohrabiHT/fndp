import { Database, Sun, Zap, ChevronLeft } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="relative mb-24 pt-12">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/50 bg-blue-50/50 px-3 py-1 text-xs font-medium text-blue-800 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
            </span>
            پیشگام در هوشمندسازی صنعت برق
          </div>

          <h1 className="text-4xl font-bold leading-tight text-[#071a2b] sm:text-5xl lg:text-6xl">
            شرکت <span className="text-blue-700">فرداد نیرو</span>
            <br />
            <span className="text-3xl text-slate-500 sm:text-4xl">داده پردازان</span>
          </h1>

          <p className="max-w-xl text-lg leading-8 text-slate-600">
            تخصص ما طراحی نرم‌افزارهای GIS، انرژی‌های تجدیدپذیر و اجرای پست‌های فوق‌توزیع است. 
            ما داده‌ها را به <span className="font-semibold text-slate-800">انرژی پایدار</span> تبدیل می‌کنیم.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-xl bg-[#071a2b] px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-blue-900/20 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              محصولات ما
              <ChevronLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-3.5 text-sm font-medium text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50"
            >
              تماس با ما
            </a>
          </div>

          {/* Industry Icons */}
          <div className="flex flex-wrap gap-x-8 gap-y-4 pt-6 text-sm font-medium text-slate-500 border-t border-slate-200">
            <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <Database size={18} className="text-blue-500" />
              <span>GIS تخصصی</span>
            </div>
            <div className="flex items-center gap-2 hover:text-amber-600 transition-colors">
              <Sun size={18} className="text-amber-500" />
              <span>نیروگاه خورشیدی</span>
            </div>
            <div className="flex items-center gap-2 hover:text-purple-600 transition-colors">
              <Zap size={18} className="text-purple-500" />
              <span>پست فوق‌توزیع</span>
            </div>
          </div>
        </div>

        {/* Right Visual Card - Abstract representation of data/energy */}
        <div className="relative">
          <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-blue-600 to-cyan-400 opacity-20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[24px] bg-[#0b1e33] p-10 text-white shadow-2xl ring-1 ring-white/10">
            {/* Background Pattern */}
            <div className="absolute right-0 top-0 h-96 w-96 -translate-y-1/2 translate-x-1/3 rounded-full bg-blue-500/20 blur-[80px]" />
            
            <div className="relative z-10 flex flex-col h-full justify-between gap-10">
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/25">
                  <Database className="text-white" size={28} />
                </div>
                
                <h3 className="mb-3 text-2xl font-bold tracking-tight">یکپارچه‌سازی داده و انرژی</h3>
                <p className="text-slate-300 leading-7">
                  از طراحی پایگاه‌های داده مکانی تا اجرای نیروگاه‌های خورشیدی، پروژه‌های شما مطابق آخرین استانداردهای توانیر اجرا خواهند شد.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl bg-white/5 p-4 backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="mb-1 text-2xl font-bold text-blue-400">GIS</div>
                  <div className="text-xs text-slate-400">کدگذاری و استانداردسازی</div>
                </div>
                <div className="rounded-xl bg-white/5 p-4 backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="mb-1 text-2xl font-bold text-amber-400">Solar</div>
                  <div className="text-xs text-slate-400">انرژی‌های تجدیدپذیر</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}