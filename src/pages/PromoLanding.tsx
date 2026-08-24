import {
  ArrowRight,
  CalendarDays,
  MapPinCheck,
  Menu,
  MonitorSmartphone,
  Smartphone,
  TrainFront,
  UtensilsCrossed,
  X,
} from "lucide-react";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";

import appScreen from "../assets/eduem/app-screen.webp";
import heroDelivery from "../assets/eduem/hero-delivery.webp";
import kroshkaKartoshka from "../assets/eduem/kroshka-kartoshka.png";
import orderForm from "../assets/eduem/order-form.webp";
import papaJohns from "../assets/eduem/papa-johns.png";
import phoneScreen from "../assets/eduem/phone-screen.webp";
import shokoladnitsa from "../assets/eduem/shokoladnitsa.png";
import { BrandLogo } from "../components/BrandLogo";
import { PromoCodeButton } from "../components/PromoCodeButton";
import { StoreLink } from "../components/StoreLink";
import { emitYmGoal, type YmFunction } from "../lib/promo";

declare global {
  interface Window {
    ym?: YmFunction;
  }
}

const PROMO_CODE = "PROM15";
const ORDER_URL = "https://delivery.eduem.ru/";
const APP_LINKS = {
  apple:
    "https://apps.apple.com/ru/app/едуем-еда-к-вагону-поезда/id1502822065",
  google: "https://play.google.com/store/apps/details?id=com.eduem&hl=ru",
  rustore: "https://www.rustore.ru/catalog/app/com.eduem",
} as const;
const YM_COUNTER_ID = Number(import.meta.env.VITE_YM_COUNTER_ID) || null;

const navItems = [
  ["Как это работает", "#how-it-works"],
  ["Где заказать", "#where-to-order"],
  ["Скачать приложение", "#download-app"],
  ["Контакты", "#contacts"],
] as const;

function trackGoal(goal: string) {
  emitYmGoal(goal, { counterId: YM_COUNTER_ID, ym: window.ym });
  window.dispatchEvent(new CustomEvent("eduem:ym-goal", { detail: { goal } }));
}

function OrderLink({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={ORDER_URL}
      target="_blank"
      rel="noreferrer"
      onClick={() => trackGoal("order_click")}
      data-ym-goal="order_click"
      className={`inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[#ffd53f] px-6 font-extrabold text-[#292929] shadow-[0_10px_26px_rgba(255,213,63,0.26)] transition hover:-translate-y-0.5 hover:bg-[#ffcb12] hover:shadow-[0_14px_34px_rgba(255,213,63,0.34)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd53f] ${className}`}
    >
      {children}
      <ArrowRight className="size-5" />
    </a>
  );
}

function StoreLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-3 ${compact ? "justify-center" : ""}`}>
      {(Object.keys(APP_LINKS) as Array<keyof typeof APP_LINKS>).map((store) => (
        <StoreLink
          key={store}
          store={store}
          href={APP_LINKS[store]}
          onClick={() => trackGoal("app_download_click")}
        />
      ))}
    </div>
  );
}

export function PromoLanding() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#fffaf0] text-[#2c2c2c]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#fffaf0]/92 backdrop-blur-xl">
        <div className="mx-auto flex min-h-20 max-w-[1240px] items-center justify-between gap-5 px-5 sm:px-8">
          <a href="#top" aria-label="ЕдуЕм - на главную">
            <BrandLogo className="h-auto w-[102px]" />
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Основное меню">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-semibold text-[#2c2c2c]/72 transition hover:text-[#2c2c2c]"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <OrderLink className="hidden min-h-12 px-5 text-sm sm:inline-flex">
              Заказать со скидкой
            </OrderLink>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="flex size-12 items-center justify-center rounded-2xl border border-black/10 bg-white lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            id="mobile-menu"
            className="border-t border-black/5 bg-white px-5 py-5 lg:hidden"
            aria-label="Мобильное меню"
          >
            <div className="mx-auto flex max-w-[1240px] flex-col gap-1">
              {navItems.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 font-semibold hover:bg-[#fff8dd]"
                >
                  {label}
                </a>
              ))}
              <OrderLink className="mt-3 sm:hidden">Заказать со скидкой</OrderLink>
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="relative overflow-hidden px-5 pb-18 pt-10 sm:px-8 sm:pb-24 sm:pt-16 lg:pt-20">
          <div className="pointer-events-none absolute -right-28 top-12 size-[390px] rounded-full bg-[#ffd53f]/22 blur-3xl" />
          <div className="relative mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f0c424] bg-[#fff3ba] px-4 py-2 text-sm font-bold">
                <span className="size-2 rounded-full bg-[#e4a900]" />
                Скидка 15% по промокоду {PROMO_CODE}
              </div>

              <h1 className="max-w-[720px] text-[38px] font-extrabold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-[72px]">
                Еда в поезд
                <br />с доставкой
                <br />
                <span className="relative inline-block pt-1 text-[#d9a900]">
                  прямо к вагону
                  <span className="absolute -bottom-2 left-0 h-1.5 w-full rounded-full bg-[#ffd53f]" />
                </span>
              </h1>

              <p className="mt-8 max-w-[610px] text-lg leading-relaxed text-[#2c2c2c]/68 sm:text-xl">
                Оформите заказ на сайте или в приложении ЕдуЕм и получите еду
                прямо к вагону.
              </p>

              <div className="mt-7 flex w-full max-w-[560px] flex-col items-stretch justify-between gap-4 rounded-3xl border border-[#e7c650] bg-[#fff4c9] p-4 shadow-sm sm:flex-row sm:items-center sm:p-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#2c2c2c]/50">
                    Скидка 15%
                  </p>
                  <p className="mt-1 text-3xl font-extrabold tracking-[0.08em]">{PROMO_CODE}</p>
                </div>
                <PromoCodeButton promoCode={PROMO_CODE} onGoal={trackGoal} />
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <OrderLink>Заказать со скидкой</OrderLink>
                <a
                  href="#download-app"
                  onClick={() => trackGoal("app_download_click")}
                  data-ym-goal="app_download_click"
                  className="inline-flex min-h-14 items-center justify-center rounded-2xl border-2 border-black/10 bg-white px-6 font-bold transition hover:-translate-y-0.5 hover:border-[#ffd53f]"
                >
                  Скачать приложение
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
              <div className="absolute inset-x-8 bottom-2 h-24 rounded-[50%] bg-black/16 blur-3xl" />
              <div className="relative mx-auto aspect-[4/5] max-h-[690px] overflow-hidden rounded-[44px] border-[8px] border-white bg-[#ffd53f] shadow-[0_30px_80px_rgba(66,47,0,0.24)] sm:rounded-[58px]">
                <img
                  src={heroDelivery}
                  width="667"
                  height="1000"
                  fetchPriority="high"
                  className="size-full object-cover object-center"
                  alt="Курьер ЕдуЕм передает заказ пассажиру у вагона поезда"
                />
              </div>
              <div className="absolute -left-3 bottom-10 rounded-2xl border border-white/80 bg-white/92 px-4 py-3 shadow-xl backdrop-blur sm:-left-8 sm:bottom-14 sm:px-5">
                <p className="text-xs font-semibold text-black/45">Ваш заказ</p>
                <p className="mt-1 flex items-center gap-2 text-sm font-extrabold sm:text-base">
                  <MapPinCheck className="size-5 text-[#d5a500]" /> Уже у вагона
                </p>
              </div>
            </div>
          </div>
        </section>

        <section aria-label="ЕдуЕм в цифрах" className="px-5 pb-20 sm:px-8 sm:pb-24">
          <div className="mx-auto grid max-w-[1240px] gap-4 sm:grid-cols-3">
            {[
              ["400+", "магазинов, кафе и ресторанов"],
              ["125+", "городов и железнодорожных станций"],
              ["1 000 000+", "довольных клиентов"],
            ].map(([value, label]) => (
              <div key={value} className="rounded-[28px] border border-black/5 bg-white p-7 shadow-[0_12px_35px_rgba(50,39,0,0.06)] sm:p-8">
                <p className="text-4xl font-extrabold tracking-[-0.04em] text-[#d3a300] lg:text-5xl">{value}</p>
                <p className="mt-3 max-w-[260px] text-base font-semibold leading-snug text-[#2c2c2c]/65">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-24 bg-[#f8f1df] px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[1240px]">
            <div className="max-w-[720px]">
              <p className="section-eyebrow">Три простых шага</p>
              <h2 className="section-title">Как это работает</h2>
              <p className="section-subtitle">Вы выбираете, что хочется в дороге. Мы координируем ресторан и доставку к нужной станции.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {[
                [TrainFront, "01", "Укажите поезд и маршрут", "Выберите направление и дату поездки."],
                [UtensilsCrossed, "02", "Выберите еду", "Соберите заказ из меню кафе и ресторанов."],
                [MapPinCheck, "03", "Получите у вагона", "Курьер приедет к вашему вагону на станции."],
              ].map(([Icon, number, title, text]) => {
                const StepIcon = Icon as typeof TrainFront;
                return (
                  <article key={number as string} className="relative overflow-hidden rounded-[30px] bg-white p-7 shadow-[0_16px_45px_rgba(50,39,0,0.06)] sm:p-8">
                    <span className="absolute right-5 top-2 text-7xl font-extrabold text-[#ffd53f]/28">{number as string}</span>
                    <span className="flex size-14 items-center justify-center rounded-2xl bg-[#ffd53f]">
                      <StepIcon className="size-7" />
                    </span>
                    <h3 className="mt-8 text-2xl font-extrabold tracking-tight">{title as string}</h3>
                    <p className="mt-3 leading-relaxed text-[#2c2c2c]/62">{text as string}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="where-to-order" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-[1240px]">
            <div className="text-center">
              <p className="section-eyebrow">Выбирайте удобный способ</p>
              <h2 className="section-title">Где заказать</h2>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-2">
              <article className="relative min-h-[520px] overflow-hidden rounded-[34px] bg-white p-7 shadow-[0_18px_50px_rgba(50,39,0,0.07)] sm:p-10">
                <span className="flex size-13 items-center justify-center rounded-2xl bg-[#fff1b8]"><MonitorSmartphone /></span>
                <h3 className="mt-6 text-3xl font-extrabold tracking-tight">На сайте</h3>
                <p className="mt-3 max-w-[460px] text-lg leading-relaxed text-[#2c2c2c]/62">Заказывайте с компьютера, планшета или телефона без установки приложения.</p>
                <OrderLink className="mt-7">Заказать на сайте</OrderLink>
                <img src={orderForm} loading="lazy" width="900" height="736" className="absolute -bottom-6 -right-16 w-[82%] max-w-[560px] rounded-[28px] border-8 border-[#f8f1df] shadow-2xl sm:-right-8" alt="Форма выбора маршрута на сайте ЕдуЕм" />
              </article>

              <article className="relative min-h-[520px] overflow-hidden rounded-[34px] bg-[#2b2b2b] p-7 text-white shadow-[0_18px_50px_rgba(50,39,0,0.14)] sm:p-10">
                <span className="flex size-13 items-center justify-center rounded-2xl bg-[#ffd53f] text-[#292929]"><Smartphone /></span>
                <h3 className="mt-6 text-3xl font-extrabold tracking-tight">В приложении</h3>
                <p className="mt-3 max-w-[440px] text-lg leading-relaxed text-white/62">Удобно заказать еду прямо в дороге и быстро вернуться к своему заказу.</p>
                <div className="relative z-10 mt-7 max-w-[180px]"><StoreLinks /></div>
                <img src={appScreen} loading="lazy" width="263" height="640" className="absolute -bottom-16 right-1 hidden w-[190px] rotate-[4deg] drop-shadow-2xl sm:block sm:right-10 sm:w-[220px]" alt="Экран приложения ЕдуЕм" />
              </article>
            </div>
          </div>
        </section>

        <section id="download-app" className="scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-28">
          <div className="relative mx-auto grid max-w-[1240px] items-center overflow-hidden rounded-[38px] bg-[#e9efff] px-6 py-12 sm:px-12 lg:grid-cols-[0.82fr_1.18fr] lg:px-16 lg:py-10">
            <div className="relative flex min-h-[420px] items-end justify-center lg:min-h-[500px]">
              <div className="absolute size-[330px] rounded-full bg-[#ffd53f]/80 sm:size-[410px]" />
              <img src={phoneScreen} loading="lazy" width="900" height="900" className="relative z-10 w-[330px] drop-shadow-[0_28px_40px_rgba(31,48,89,0.3)] sm:w-[440px]" alt="Приложение ЕдуЕм на смартфоне" />
            </div>
            <div className="relative z-10 py-4 text-center lg:text-left">
              <p className="section-eyebrow">Приложение ЕдуЕм</p>
              <h2 className="section-title">ЕдуЕм всегда под рукой</h2>
              <p className="section-subtitle mx-auto lg:mx-0">Наведите камеру на QR-код или откройте магазин приложений на своем устройстве.</p>
              <div className="mt-8 flex flex-col items-center gap-6 xl:flex-row xl:items-start">
                <div className="rounded-[26px] bg-white p-4 shadow-sm" aria-label="QR-код для перехода к ЕдуЕм">
                  <QRCodeSVG value="https://eduem.ru/" size={168} marginSize={1} bgColor="#ffffff" fgColor="#2c2c2c" />
                </div>
                <div className="max-w-[520px]"><StoreLinks compact /></div>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="partners-title" className="bg-white px-5 py-20 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-[1240px] text-center">
            <p className="section-eyebrow">Знакомые места по маршруту</p>
            <h2 id="partners-title" className="section-title">Партнеры ЕдуЕм</h2>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                [papaJohns, "Папа Джонс"],
                [kroshkaKartoshka, "Крошка Картошка"],
                [shokoladnitsa, "Шоколадница"],
              ].map(([src, alt]) => (
                <div key={alt} className="flex min-h-36 items-center justify-center rounded-[28px] border border-black/6 bg-[#fffaf0] p-7">
                  <img src={src} loading="lazy" className="max-h-20 max-w-[220px] object-contain" alt={alt} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 sm:px-8 sm:py-28">
          <div className="relative mx-auto overflow-hidden rounded-[40px] bg-[#292929] px-6 py-14 text-center text-white sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -left-20 -top-28 size-80 rounded-full bg-[#ffd53f]/14 blur-3xl" />
            <CalendarDays className="relative mx-auto size-10 text-[#ffd53f]" />
            <h2 className="relative mx-auto mt-6 max-w-[820px] text-4xl font-extrabold leading-tight tracking-[-0.04em] sm:text-6xl">Закажите еду в поезд со скидкой 15%</h2>
            <div className="relative mx-auto mt-7 inline-flex items-center rounded-2xl border border-[#ffd53f]/25 bg-[#ffd53f]/10 px-6 py-4">
              <span className="mr-3 text-sm font-semibold text-white/55">Промокод</span>
              <span className="text-3xl font-extrabold tracking-[0.08em] text-[#ffd53f]">{PROMO_CODE}</span>
            </div>
            <div className="relative mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <OrderLink className="min-w-[190px]">Заказать</OrderLink>
              <PromoCodeButton promoCode={PROMO_CODE} onGoal={trackGoal} variant="dark" />
            </div>
          </div>
        </section>
      </main>

      <footer id="contacts" className="scroll-mt-24 border-t border-black/7 bg-white px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <BrandLogo className="w-[106px]" />
            <p className="mt-3 text-sm text-black/48">Доставка еды прямо к вагону поезда</p>
          </div>
          <div className="flex flex-col gap-2 text-sm font-semibold sm:text-right">
            <a href="tel:88002228004" className="hover:text-[#b78c00]">8 (800) 222-80-04</a>
            <a href="mailto:info@eduem.ru" className="hover:text-[#b78c00]">info@eduem.ru</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
