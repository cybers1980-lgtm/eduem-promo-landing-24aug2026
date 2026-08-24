import img1 from "../../imports/Главная/59e66bf59a807adfcca622214c7905f257593139.png";
import imgFood from "../../imports/Главная/d245b0a7b9336fb1a1a764186bad7c7f458649a1.png";
import imgScreen from "../../imports/Главная/ea2ab2f8afc5ae3feb9ac692035389acc8852453.png";
import imgGroup1 from "../../imports/Главная/d41d01e9e6e092722bb82904f7fb9fd485e812f3.png";
import imgGroup2 from "../../imports/Главная/0c7ad141b199ecdd943bcaadfe269d486644496a.png";
import imgScreen1 from "../../imports/Главная/79bc1e0be85b52402ee1f1c539da1c5be0458c13.png";
import imgImage3 from "../../imports/Главная/26a5671c6b3af6e3a5debe9492f9a16cd155989b.png";
import imgImage2 from "../../imports/Главная/600dd68d73287a8bc8e20e1c7ceddef2b4292e82.png";
import imgImage10 from "../../imports/Главная/2c67b81cac11ecd17b88808accddd5dae40d186c.png";
import imgRect1 from "../../imports/Главная/b19fead027e37b046ce9e28330fe995df6ef85d1.png";
import imgRect2 from "../../imports/Главная/46a5a978d4b6958c77b800616336cd896e4dfd20.png";
import imgAppStore1 from "../../imports/Главная/01110021dc68afc73bbae7902e76eed0ddee0d8b.png";
import imgAppStore2 from "../../imports/Главная/141fa5cc08ea9e5e619790fa50f4cfb62d4a0ef5.png";
import imgScreen2 from "../../imports/Главная/bd469d2d5247ed729f79bd7179fb36e88692117f.png";
import imgQr from "../../imports/Главная/9f95f8e8285eb609ecaa5cfd4598568b82589639.png";

const PROMO_CODE = "PROM15";
const CTA_URL = "https://delivery.eduem.ru/";

function Logo({ size = "default" }: { size?: "default" | "small" }) {
  const textSize = size === "small" ? "text-2xl" : "text-3xl";
  return (
    <div className="flex items-center gap-1">
      <span
        style={{ fontFamily: "'Gilroy', 'Montserrat', sans-serif", fontWeight: 800 }}
        className={`${textSize} text-[#272727]`}
      >
        Еду
      </span>
      <span
        style={{ fontFamily: "'Gilroy', 'Montserrat', sans-serif", fontWeight: 800 }}
        className={`${textSize} text-[#FFD53F]`}
      >
        Ем
      </span>
    </div>
  );
}

function CtaButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={CTA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block bg-[#FFD53F] rounded-[10px] px-6 py-4 text-[#303030] hover:bg-[#f5ca30] active:scale-95 transition-all duration-150 cursor-pointer ${className}`}
      style={{ fontFamily: "'Gilroy', 'Montserrat', sans-serif", fontWeight: 700, fontSize: 18 }}
      data-ym-goal="click_cta"
    >
      Заказать со скидкой
    </a>
  );
}

export function EduEmLanding() {
  return (
    <div
      className="w-full min-h-screen bg-white overflow-x-hidden"
      style={{ fontFamily: "'Gilroy', 'Montserrat', sans-serif" }}
    >
      {/* ── HEADER ────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-6 text-[#262626]" style={{ fontWeight: 600, fontSize: 15 }}>
            <a href="#how" className="hover:text-[#FFD53F] transition-colors">Как это работает</a>
            <a href="#benefits" className="hover:text-[#FFD53F] transition-colors">Преимущества</a>
            <a href="#app" className="hover:text-[#FFD53F] transition-colors">Приложение</a>
          </div>
          <a
            href="tel:88002228004"
            className="text-[#FFD53F] hover:text-[#f5ca30] transition-colors"
            style={{ fontWeight: 700, fontSize: 16 }}
          >
            8 (800) 222-80-04
          </a>
        </div>
      </header>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #ffffff 30%, #fff2c5 100%)" }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-10 md:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column */}
          <div className="flex flex-col gap-6 z-10">
            {/* Discount badge */}
            <div className="inline-flex items-center gap-3 bg-[#FFD53F] rounded-2xl px-5 py-3 w-fit">
              <span style={{ fontWeight: 700, fontSize: 28 }} className="text-[#303030]">−15%</span>
              <div>
                <p style={{ fontWeight: 600, fontSize: 13 }} className="text-[#303030]">Скидка на первый заказ</p>
                <p style={{ fontWeight: 700, fontSize: 13 }} className="text-[#303030]">
                  Промокод: <span className="tracking-widest">{PROMO_CODE}</span>
                </p>
              </div>
            </div>

            {/* Headline */}
            <div style={{ fontWeight: 700, lineHeight: 1.1 }}>
              <p className="text-[42px] sm:text-[52px] lg:text-[58px] text-[#303030]">Еда в поезд</p>
              <p className="text-[42px] sm:text-[52px] lg:text-[58px] text-[#303030]">со скидкой</p>
              <p className="text-[42px] sm:text-[52px] lg:text-[58px] text-[#FFD53F]">15%</p>
            </div>

            <p style={{ fontWeight: 400, fontSize: 18 }} className="text-[#303030] max-w-md">
              Оформите заказ на сайте или в приложении ЕдуЕм и получите еду прямо у вагона.
            </p>

            {/* Promo code block */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="bg-white border-2 border-dashed border-[#FFD53F] rounded-xl px-5 py-3">
                <p style={{ fontWeight: 500, fontSize: 13 }} className="text-[#303030] opacity-70">Промокод</p>
                <p style={{ fontWeight: 800, fontSize: 22, letterSpacing: "0.1em" }} className="text-[#303030]">{PROMO_CODE}</p>
              </div>
              <CtaButton className="text-lg" />
            </div>

            {/* Sub-CTA */}
            <p style={{ fontWeight: 400, fontSize: 14 }} className="text-[#303030] opacity-60">
              Введите промокод при оформлении заказа
            </p>
          </div>

          {/* Right column – hero image */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Decorative ring */}
            <div className="absolute w-[480px] h-[540px] border-4 border-[#fff2c3] rounded-[100px] rotate-[-5deg] hidden lg:block" />
            {/* Main app image */}
            <div className="relative z-10 rotate-[7deg] rounded-[80px] overflow-hidden shadow-2xl w-[300px] sm:w-[360px] lg:w-[400px]">
              <img src={img1} alt="ЕдуЕм приложение" className="w-full h-auto object-cover" />
            </div>
            {/* Floating city badges */}
            <div className="hidden lg:block absolute top-[32%] left-[-20px] z-20 backdrop-blur-md bg-white/80 rounded-2xl px-6 py-3 shadow-lg rotate-[-1deg]">
              <p style={{ fontWeight: 500, fontSize: 18 }} className="text-[#303030]">Москва</p>
            </div>
            <div className="hidden lg:block absolute top-[47%] right-[-10px] z-20 backdrop-blur-md bg-white/80 rounded-2xl px-6 py-3 shadow-lg rotate-[7deg]">
              <p style={{ fontWeight: 500, fontSize: 18 }} className="text-[#303030]">Сочи</p>
            </div>
            <div className="hidden lg:block absolute top-[62%] left-[-30px] z-20 backdrop-blur-md bg-white/80 rounded-2xl px-6 py-3 shadow-lg rotate-[-1deg]">
              <p style={{ fontWeight: 500, fontSize: 18 }} className="text-[#303030]">Дата</p>
            </div>
            {/* Yellow CTA button floating */}
            <div className="hidden lg:block absolute bottom-[10%] right-[5%] z-20 bg-[#fddf76] rounded-2xl px-6 py-4 shadow-lg rotate-[5deg]">
              <p style={{ fontWeight: 700, fontSize: 18 }} className="text-[#303030]">Оформить заказ!</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────── */}
      <section className="bg-[#f8f8f8] py-8">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 grid grid-cols-3 gap-4">
          {[
            { value: "400+", label: "Магазинов, кафе и ресторанов" },
            { value: "125+", label: "Городов и Ж/Д станций" },
            { value: "1 000 000+", label: "Довольных и сытых клиентов" },
          ].map((s) => (
            <div key={s.value} className="text-center px-2">
              <p style={{ fontWeight: 800, fontSize: "clamp(24px, 5vw, 42px)" }} className="text-[#FFD53F]">{s.value}</p>
              <p style={{ fontWeight: 500, fontSize: "clamp(11px, 2vw, 14px)" }} className="text-[#303030] mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────── */}
      <section id="how" className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <h2
            style={{ fontWeight: 700, fontSize: "clamp(28px, 4vw, 42px)" }}
            className="text-[#303030] text-center mb-12"
          >
            Как это работает?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-10">
            {[
              {
                num: "1",
                title: "Укажите поезд и станцию",
                desc: "Введите номер поезда, выберите станцию остановки и время прибытия.",
                img: imgImage3,
              },
              {
                num: "2",
                title: "Выберите еду",
                desc: "Кафе и рестораны прямо по вашему маршруту. Широкий выбор блюд.",
                img: imgImage2,
              },
              {
                num: "3",
                title: "Получите заказ у вагона",
                desc: "Курьер доставит заказ прямо к вашему вагону на перроне.",
                img: imgImage10,
              },
            ].map((step) => (
              <div
                key={step.num}
                className="flex flex-col items-center text-center gap-4 bg-[#fffae8] rounded-3xl p-6 lg:p-8"
              >
                <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md">
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover" />
                </div>
                <div className="w-10 h-10 bg-[#FFD53F] rounded-full flex items-center justify-center">
                  <span style={{ fontWeight: 800, fontSize: 20 }} className="text-[#303030]">{step.num}</span>
                </div>
                <h3 style={{ fontWeight: 700, fontSize: 20 }} className="text-[#303030]">{step.title}</h3>
                <p style={{ fontWeight: 400, fontSize: 15 }} className="text-[#303030] opacity-75">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <CtaButton />
          </div>
        </div>
      </section>

      {/* ── BENEFITS ──────────────────────────────────────────── */}
      <section
        id="benefits"
        className="py-16"
        style={{ background: "linear-gradient(180deg, #fffae8 0%, #fff2c5 100%)" }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <h2
            style={{ fontWeight: 700, fontSize: "clamp(28px, 4vw, 42px)" }}
            className="text-[#303030] text-center mb-12"
          >
            Почему ЕдуЕм?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🚂",
                title: "Доставка прямо к вагону",
                desc: "Курьер встретит вас точно у вашего вагона — не нужно бегать по перрону.",
                img: imgRect1,
              },
              {
                icon: "⏱️",
                title: "Заказ заранее",
                desc: "Оформите заказ за несколько часов до прибытия. Еда будет готова к вашему приезду.",
                img: imgRect2,
              },
              {
                icon: "🍽️",
                title: "Кафе и рестораны по маршруту",
                desc: "Выбирайте из 400+ партнёров — кафе, рестораны и магазины вдоль вашего пути.",
                img: imgGroup1,
              },
              {
                icon: "💳",
                title: "Удобная оплата",
                desc: "Онлайн-оплата картой, СБП или наличными при получении.",
              },
              {
                icon: "📱",
                title: "Приложение всегда под рукой",
                desc: "Мобильное приложение iOS и Android — заказывайте в любое время.",
              },
              {
                icon: "🏆",
                title: "1 000 000+ довольных клиентов",
                desc: "Миллион пассажиров уже оценили удобство ЕдуЕм. Присоединяйтесь!",
              },
            ].map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3"
              >
                {b.img ? (
                  <div className="w-full h-32 rounded-2xl overflow-hidden mb-1">
                    <img src={b.img} alt={b.title} className="w-full h-full object-cover" />
                  </div>
                ) : (
                  <span className="text-4xl">{b.icon}</span>
                )}
                <h3 style={{ fontWeight: 700, fontSize: 18 }} className="text-[#303030]">{b.title}</h3>
                <p style={{ fontWeight: 400, fontSize: 14 }} className="text-[#303030] opacity-70">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* Promo reminder */}
          <div className="mt-12 bg-[#FFD53F] rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p style={{ fontWeight: 800, fontSize: 28 }} className="text-[#303030]">Скидка 15% на первый заказ</p>
              <p style={{ fontWeight: 500, fontSize: 16 }} className="text-[#303030] opacity-80 mt-1">
                Используйте промокод <strong className="tracking-wider">{PROMO_CODE}</strong> при оформлении
              </p>
            </div>
            <CtaButton className="shrink-0" />
          </div>
        </div>
      </section>

      {/* ── APP SECTION ───────────────────────────────────────── */}
      <section id="app" className="py-16 bg-white overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* App mockup */}
            <div className="relative flex justify-center">
              <div
                className="relative w-[300px] sm:w-[360px] rounded-[50px] overflow-hidden shadow-2xl"
                style={{ background: "linear-gradient(180deg, #fffae8 0%, #fff2c5 100%)" }}
              >
                <img src={imgScreen} alt="ЕдуЕм приложение" className="w-full h-auto" />
              </div>
              {/* Decorative food images */}
              <div className="absolute -top-6 -right-4 w-20 h-20 rounded-full overflow-hidden rotate-[-12deg] hidden sm:block shadow-lg">
                <img src={imgFood} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full overflow-hidden rotate-[18deg] hidden sm:block shadow-lg">
                <img src={imgFood} alt="" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6">
              <div>
                <p style={{ fontWeight: 600, fontSize: 14, color: "#9c9c9c" }} className="mb-2 uppercase tracking-wide">Мобильное приложение</p>
                <h2 style={{ fontWeight: 700, fontSize: "clamp(28px, 4vw, 40px)" }} className="text-[#303030]">
                  ЕдуЕм всегда<br />под рукой
                </h2>
              </div>

              <p style={{ fontWeight: 400, fontSize: 16 }} className="text-[#303030] opacity-75">
                Скачайте приложение и заказывайте еду к вагону в любое время — с телефона или планшета.
              </p>

              {/* Steps */}
              <div className="flex flex-col gap-3">
                {[
                  "Укажите поезд и станцию",
                  "Выберите любимые блюда",
                  "Оплатите онлайн",
                  "Получите еду у вагона",
                ].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#FFD53F] flex items-center justify-center shrink-0">
                      <span style={{ fontWeight: 700, fontSize: 14 }} className="text-[#303030]">{i + 1}</span>
                    </div>
                    <p style={{ fontWeight: 500, fontSize: 15 }} className="text-[#303030]">{step}</p>
                  </div>
                ))}
              </div>

              {/* App store buttons */}
              <div className="flex flex-wrap gap-3 mt-2">
                {/* App Store */}
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#303030] text-white rounded-xl px-4 py-3 hover:bg-[#1a1a1a] transition-colors"
                  data-ym-goal="click_appstore"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div>
                    <p style={{ fontSize: 10, opacity: 0.7 }}>Загрузить в</p>
                    <p style={{ fontWeight: 700, fontSize: 14 }}>App Store</p>
                  </div>
                </a>

                {/* Google Play */}
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#303030] text-white rounded-xl px-4 py-3 hover:bg-[#1a1a1a] transition-colors"
                  data-ym-goal="click_googleplay"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5v-17C3,2.91,3.34,2.5,3.73,2.27L13.27,12L3.73,21.73C3.34,21.5,3,21.09,3,20.5M16.47,14.3l-2.89-2.89l2.89-2.89l3.23,1.87c0.92,0.53,0.92,1.41,0,1.94L16.47,14.3M6.24,21.54L6.24,21.54l8.54-8.54l2.27,2.27L6.24,21.54M6.24,2.46L6.24,2.46l10.81,6.27L14.78,11L6.24,2.46z" />
                  </svg>
                  <div>
                    <p style={{ fontSize: 10, opacity: 0.7 }}>Доступно в</p>
                    <p style={{ fontWeight: 700, fontSize: 14 }}>Google Play</p>
                  </div>
                </a>

                {/* RuStore */}
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#303030] text-white rounded-xl px-4 py-3 hover:bg-[#1a1a1a] transition-colors"
                  data-ym-goal="click_rustore"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                  </svg>
                  <div>
                    <p style={{ fontSize: 10, opacity: 0.7 }}>Загрузить в</p>
                    <p style={{ fontWeight: 700, fontSize: 14 }}>RuStore</p>
                  </div>
                </a>
              </div>

              {/* QR code */}
              <div className="flex items-center gap-4 mt-2 bg-[#f8f8f8] rounded-2xl p-4 w-fit">
                <img src={imgQr} alt="QR-код для скачивания приложения" className="w-16 h-16 rounded-xl" />
                <div>
                  <p style={{ fontWeight: 600, fontSize: 14 }} className="text-[#303030]">Сканируйте QR-код</p>
                  <p style={{ fontWeight: 400, fontSize: 12 }} className="text-[#303030] opacity-60">для скачивания приложения</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────── */}
      <section className="py-16" style={{ background: "#f8f8f8" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <h2 style={{ fontWeight: 700, fontSize: "clamp(24px, 4vw, 36px)" }} className="text-[#303030] text-center mb-2">
            Отзывы наших{" "}
            <span className="text-[#FFD53F]">довольных и сытых клиентов</span>
          </h2>
          <p style={{ fontWeight: 400, fontSize: 15 }} className="text-center text-[#303030] opacity-60 mb-10">
            Реальные отзывы из App Store и Google Play
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                name: "Дмитрий",
                date: "23 янв 2026",
                text: "Работаю проводником, все заказы доставляют как надо. Чистенько рекомендую пассажирам, как минимум это лучше, чем «дошик», да и горячее можно также заказать — всё очень удобно и понятно.",
              },
              {
                name: "Оля",
                date: "20 авг 2025",
                text: "Прекрасно всё работает. Заказывали еду дважды и всё доставили вовремя. Дошики уже порядком надоели и ребёнок с большим удовольствием ел картошку с куриными рулетиками и пиццу.",
              },
              {
                name: "Игорь",
                date: "8 июл 2025",
                text: "На пути в Москву и обратно заказывали через это приложение в двух разных городах (Пермь и Балезино). Везде всё прошло на отлично. Заказанная еда была вкусная, тёплая, хорошо упакованная.",
              },
            ].map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p style={{ fontWeight: 600, fontSize: 15 }} className="text-[#303030]">{r.name}</p>
                    <p style={{ fontWeight: 400, fontSize: 11 }} className="text-[#303030] opacity-50">{r.date}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#FFD53F">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p style={{ fontWeight: 400, fontSize: 13, lineHeight: 1.6 }} className="text-[#303030] opacity-80">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────── */}
      <section
        className="py-16 overflow-hidden relative"
        style={{ background: "linear-gradient(135deg, #fff2c5 0%, #fffae8 50%, #fff 100%)" }}
      >
        {/* Decorative app screen image */}
        <div className="absolute right-0 bottom-0 w-[300px] opacity-30 hidden lg:block pointer-events-none">
          <img src={imgScreen2} alt="" className="w-full h-auto" />
        </div>

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
            <Logo />

            <div>
              <h2
                style={{ fontWeight: 800, fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 1.15 }}
                className="text-[#303030]"
              >
                Ваш маршрут.
              </h2>
              <h2
                style={{ fontWeight: 800, fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 1.15 }}
                className="text-[#303030]"
              >
                Ваш вкус.
              </h2>
              <h2
                style={{ fontWeight: 800, fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 1.15 }}
                className="text-[#FFD53F]"
              >
                Со скидкой 15%.
              </h2>
            </div>

            <p style={{ fontWeight: 500, fontSize: 18 }} className="text-[#303030] opacity-75">
              Еда к вагону поезда — удобно, быстро, вкусно.
            </p>

            {/* Promo code */}
            <div className="bg-white border-2 border-dashed border-[#FFD53F] rounded-2xl px-8 py-4 text-center">
              <p style={{ fontWeight: 500, fontSize: 14 }} className="text-[#303030] opacity-60">Ваш промокод</p>
              <p
                style={{ fontWeight: 800, fontSize: 32, letterSpacing: "0.12em" }}
                className="text-[#303030]"
              >
                {PROMO_CODE}
              </p>
              <p style={{ fontWeight: 400, fontSize: 13 }} className="text-[#303030] opacity-50">
                Скидка 15% на первый заказ
              </p>
            </div>

            <CtaButton className="text-xl px-10 py-5" />

            <p style={{ fontWeight: 400, fontSize: 13 }} className="text-[#303030] opacity-50">
              Введите промокод {PROMO_CODE} при оформлении заказа
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer
        className="py-12"
        style={{ background: "linear-gradient(160deg, #fff 6%, #fff2c5 100%)" }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="flex flex-col gap-4">
              <Logo />
              <img src={imgQr} alt="QR-код" className="w-20 h-20 rounded-xl" />
              <div className="flex gap-3">
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-[#303030] text-white rounded-lg px-3 py-2 hover:bg-[#1a1a1a] transition-colors"
                  style={{ fontSize: 12, fontWeight: 600 }}
                >
                  App Store
                </a>
                <a
                  href={CTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 bg-[#303030] text-white rounded-lg px-3 py-2 hover:bg-[#1a1a1a] transition-colors"
                  style={{ fontSize: 12, fontWeight: 600 }}
                >
                  Google Play
                </a>
              </div>
            </div>

            {/* Help */}
            <div>
              <p style={{ fontWeight: 700, fontSize: 18, color: "#bab4a0" }} className="mb-4">Помощь</p>
              {["Контакты", "О компании", "Групповые заказы", "Новости", "Инвесторам"].map((l) => (
                <p key={l} style={{ fontWeight: 400, fontSize: 15 }} className="text-[#303030] mb-3 cursor-pointer hover:text-[#FFD53F] transition-colors">{l}</p>
              ))}
            </div>

            {/* Legal */}
            <div>
              <p style={{ fontWeight: 700, fontSize: 18, color: "#bab4a0" }} className="mb-4">Полезная информация</p>
              {["Политика конфиденциальности", "Пользовательское соглашение"].map((l) => (
                <p key={l} style={{ fontWeight: 400, fontSize: 15 }} className="text-[#303030] mb-3 cursor-pointer hover:text-[#FFD53F] transition-colors">{l}</p>
              ))}
            </div>

            {/* Contact */}
            <div>
              <p style={{ fontWeight: 700, fontSize: 18, color: "#bab4a0" }} className="mb-4">Контакты</p>
              <a
                href="tel:88002228004"
                style={{ fontWeight: 500, fontSize: 17 }}
                className="text-[#303030] hover:text-[#FFD53F] transition-colors block mb-4"
              >
                8 800 222 800 4
              </a>
            </div>
          </div>

          <div className="border-t border-[#e5e0d0] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p style={{ fontWeight: 400, fontSize: 13 }} className="text-[#303030] opacity-60">
              © ЕдуЕм 2025 Все права защищены
            </p>
            <div className="flex items-center gap-2 opacity-60">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#303030">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <p style={{ fontWeight: 400, fontSize: 13 }} className="text-[#303030]">Россия</p>
            </div>
          </div>
        </div>
      </footer>

      {/* ── ЯНДЕКС.МЕТРИКА placeholder ─────────────────────────── */}
      {/*
        Для подключения Яндекс.Метрики вставьте код счётчика:
        <script type="text/javascript">
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
          ym(XXXXXX, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
          });
        </script>
        Замените XXXXXX на ваш номер счётчика.
        data-ym-goal="..." атрибуты уже расставлены на кнопках CTA.
      */}
    </div>
  );
}
