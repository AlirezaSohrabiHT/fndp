import { CheckCircle2, Server, Database, Layers } from "lucide-react";

export default function Products() {
  return (
    <section id="products" className="mb-24">
      {/* Container with a subtle border and shadow */}
      <div className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-slate-200/50 ring-1 ring-slate-900/5 md:grid md:grid-cols-2">
        
        {/* Left: Content & Value Prop */}
        <div className="p-8 lg:p-14 flex flex-col justify-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700 w-fit">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            محصول نرم‌افزاری ویژه
          </div>
          
          <h2 className="mb-6 text-3xl font-bold text-[#071a2b]">سامانه کدگذاری آنلاین تجهیزات</h2>
          
          <p className="mb-8 text-slate-600 leading-8">
            راهکاری هوشمند برای تسهیل فرآیند پیچیده جمع‌آوری و استانداردسازی اطلاعات مکانی صنعت برق. 
            با این سامانه، خروجی‌های دیتابیس دقیقاً مطابق دستورالعمل‌های توانیر تولید می‌شوند.
          </p>

          <div className="space-y-4">
            {[
              "تولید خودکار جداول کدگذاری استاندارد",
              "پشتیبانی از ساختار دیتابیس‌های برق منطقه‌ای",
              "کاهش ۹۰٪ خطاهای انسانی در ورود داده",
              "مناسب برای واحدهای GIS و پیمانکاران"
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-600" />
                <span className="text-sm font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Visual Context (Dark Mode to represent 'Tech') */}
        <div className="relative bg-[#0f172a] p-8 lg:p-14 flex flex-col justify-between overflow-hidden">
          {/* Decorative Gradients */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600/20 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
               <div className="p-3 bg-white/10 rounded-lg backdrop-blur-md border border-white/10">
                 <Server className="text-blue-400" size={24} />
               </div>
               <div className="text-white font-bold text-lg">چرا این سامانه؟</div>
            </div>

            <p className="text-slate-400 leading-7 text-sm mb-10">
                دستورالعمل‌های کدگذاری توانیر پیچیده هستند. اجرای دستی آن‌ها زمان‌بر و پرخطاست. 
                ما این فرآیند را اتوماتیک کرده‌ایم تا شما بر روی تحلیل داده‌ها تمرکز کنید، نه ورود آن‌ها.
            </p>
            
            {/* Stats Card */}
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <Database className="text-emerald-400 mb-3" size={20} />
                    <div className="text-2xl font-bold text-white mb-1">۱۰۰٪</div>
                    <div className="text-xs text-slate-400">انطباق با استاندارد</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                    <Layers className="text-amber-400 mb-3" size={20} />
                    <div className="text-2xl font-bold text-white mb-1">خودکار</div>
                    <div className="text-xs text-slate-400">تولید لایه‌های GIS</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}