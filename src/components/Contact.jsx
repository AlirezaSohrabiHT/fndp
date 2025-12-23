import { Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="mb-24">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Text Area */}
        <div className="flex flex-col justify-center">
          <h2 className="mb-6 text-3xl font-bold text-[#071a2b]">آغاز همکاری</h2>
          <p className="mb-8 text-slate-600 leading-8 text-lg">
            برای مشاوره در خصوص پروژه‌های اجرایی، دمو سامانه کدگذاری یا خدمات GIS، 
            تیم فنی فرداد نیرو آماده پاسخگویی به شماست.
          </p>

          <div className="space-y-4">
             <div className="flex items-center gap-5 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">پشتیبانی تلفنی</div>
                  <div className="font-bold text-slate-800 text-lg">همراه شما هستیم</div>
                </div>
             </div>
          </div>
        </div>

        {/* Contact Info Card */}
        <div className="relative overflow-hidden rounded-3xl bg-[#071a2b] p-8 lg:p-10 text-white shadow-xl">
           {/* Abstract Background */}
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
           <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/30 blur-[80px] rounded-full" />

           <div className="relative z-10">
             <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-500 rounded-full block"></span>
                راه‌های ارتباطی
             </h3>
             
             <div className="space-y-8">
               <div className="flex items-start justify-between border-b border-white/10 pb-4">
                 <span className="text-slate-400 text-sm">دفتر مرکزی</span>
                 <div className="text-right">
                    <span className="block font-medium">مشهد / تهران</span>
                 </div>
               </div>

               <div className="space-y-4">
                  <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">تلفن مشهد</span>
                      <span className="font-mono text-lg dir-ltr">051 - 9109 8480</span>
                  </div>
                  <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">تلفن تهران</span>
                      <span className="font-mono text-lg dir-ltr">021 - 9109 8480</span>
                  </div>
               </div>
               
               <p className="text-xs text-slate-500 leading-6 pt-4">
                 جهت هماهنگی جلسات حضوری یا دریافت کاتالوگ‌های فنی، لطفاً در ساعات اداری با شماره‌های فوق تماس حاصل فرمایید.
               </p>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
}