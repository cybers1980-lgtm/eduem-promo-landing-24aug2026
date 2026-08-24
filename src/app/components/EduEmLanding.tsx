import img1 from "../../imports/Главная/59e66bf59a807adfcca622214c7905f257593139.png";
import imgQr from "../../imports/Главная/9f95f8e8285eb609ecaa5cfd4598568b82589639.png";

const PROMO_CODE = "PROM15";
const CTA_URL = "https://delivery.eduem.ru/";

function Logo() {
  return <div className="text-3xl font-bold"><span className="text-[#303030]">Еду</span><span className="text-[#FFD53F]">Ем</span></div>;
}

function Button({children, secondary=false}: {children: React.ReactNode; secondary?: boolean}) {
  return <a href={CTA_URL} className={`${secondary ? "bg-white border border-[#FFD53F]" : "bg-[#FFD53F]"} rounded-xl px-6 py-4 font-bold text-[#303030] inline-block`}>{children}</a>;
}

function StoreButton({store, subtitle, href}: {store:string; subtitle:string; href:string}) {
  return <a href={href} className="flex items-center gap-3 bg-[#303030] text-white rounded-xl px-5 py-3 min-w-[190px]">
    <img className="w-9 h-9" alt={store} src={store === "App Store" ? "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" : store === "Google Play" ? "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" : "https://www.rustore.ru/static/img/logo.svg"}/>
    <div><div className="text-xs opacity-70">{subtitle}</div><div className="font-bold">{store}</div></div>
  </a>;
}

function StepImage({type}: {type:string}) {
  const icons = {
    train: "🚆",
    food: "🍽️",
    delivery: "📦"
  } as Record<string,string>;
  return <div className="w-24 h-24 mx-auto rounded-xl bg-[#fffaf0] flex items-center justify-center text-5xl">{icons[type]}</div>;
}

export function EduEmLanding() {
  const steps = [
    ["1", "Укажите поезд и маршрут", "train"],
    ["2", "Выберите еду из кафе и ресторанов", "food"],
    ["3", "Получите заказ у вагона", "delivery"],
  ];

  const copyPromo = async () => {
    await navigator.clipboard.writeText(PROMO_CODE);
    alert(`Промокод ${PROMO_CODE} скопирован`);
  };

  return <div className="min-h-screen bg-white text-[#303030] overflow-x-hidden">
    <header className="px-6 py-5 flex justify-between items-center max-w-6xl mx-auto"><Logo/><a href="tel:88002228004" className="font-bold">8 (800) 222-80-04</a></header>

    <section className="bg-[#fffaf0] px-6 py-16"><div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <div><div className="bg-[#FFD53F] rounded-xl p-4 inline-block font-bold mb-5">Скидка 15% на первый заказ<br/>Промокод: {PROMO_CODE}</div>
      <h1 className="text-5xl font-bold">Еда в поезд с доставкой прямо к вагону</h1><p className="text-xl mt-5">Оформите заказ на сайте или в приложении ЕдуЕм</p>
      <div className="flex gap-3 mt-8"><Button>Заказать через сайт</Button><Button secondary>Скачать приложение</Button></div>
      <button onClick={copyPromo} className="mt-4 border border-dashed border-[#FFD53F] rounded-xl px-5 py-3 font-bold">Скопировать промокод {PROMO_CODE}</button></div>
      <div className="flex justify-center"><img src={img1} className="max-w-md rounded-[50px]" alt="ЕдуЕм"/></div>
    </div></section>

    <section className="px-6 py-14 bg-[#fffaf0]"><h2 className="text-4xl font-bold text-center mb-10">Как это работает?</h2><div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">{steps.map(s=><div className="bg-white rounded-3xl p-6 text-center" key={s[0]}><StepImage type={s[2]}/><div className="bg-[#FFD53F] rounded-full w-10 h-10 mx-auto my-4 flex items-center justify-center font-bold">{s[0]}</div><h3 className="font-bold text-xl">{s[1]}</h3></div>)}</div></section>

    <section className="py-14 px-6 text-center"><h2 className="text-4xl font-bold">Где заказывать?</h2><p className="mt-5 text-lg">На сайте с компьютера, планшета или телефона - без установки приложения. В приложении - удобно заказывать прямо в дороге.</p></section>

    <section className="py-14 px-6 bg-[#fffaf0] text-center"><h2 className="text-4xl font-bold">ЕдуЕм всегда под рукой</h2><p className="mt-4">Скачивайте приложение ЕдуЕм</p><div className="flex flex-wrap justify-center gap-4 mt-8"><StoreButton store="App Store" subtitle="Скачать в" href="#"/><StoreButton store="Google Play" subtitle="Доступно в" href="#"/><StoreButton store="RuStore" subtitle="Скачать в" href="#"/></div><img src={imgQr} className="w-36 h-36 mx-auto mt-8" alt="QR-код"/></section>

    <section className="bg-[#FFD53F] py-14 text-center"><h2 className="text-4xl font-bold">Заказать еду в поезд легко!</h2><p className="mt-4 font-bold">Промокод {PROMO_CODE} - скидка 15%</p><div className="mt-6"><Button>Заказать</Button></div></section>
  </div>;
}
