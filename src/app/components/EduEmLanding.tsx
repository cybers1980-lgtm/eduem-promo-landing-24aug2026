import img1 from "../../imports/Главная/59e66bf59a807adfcca622214c7905f257593139.png";
import imgQr from "../../imports/Главная/9f95f8e8285eb609ecaa5cfd4598568b82589639.png";

const PROMO_CODE = "PROM15";
const CTA_URL = "https://delivery.eduem.ru/";

function Logo() {
  return <div className="text-3xl font-bold"><span className="text-[#303030]">Еду</span><span className="text-[#FFD53F]">Ем</span></div>;
}

function Button({children}: {children: React.ReactNode}) {
  return <a href={CTA_URL} className="bg-[#FFD53F] rounded-xl px-6 py-4 font-bold text-[#303030] inline-block">{children}</a>;
}

function StoreButton({store, subtitle}: {store:string; subtitle:string}) {
  return <div className="flex items-center gap-3 bg-[#303030] text-white rounded-xl px-5 py-3 min-w-[190px]">
    <div className="w-9 h-9 rounded-lg bg-white" />
    <div><div className="text-xs opacity-70">{subtitle}</div><div className="font-bold">{store}</div></div>
  </div>;
}

export function EduEmLanding() {
  const steps = [
    ["1", "Укажите поезд и маршрут"],
    ["2", "Выберите еду из кафе и ресторанов"],
    ["3", "Получите заказ у вагона"],
  ];

  const copyPromo = async () => {
    await navigator.clipboard.writeText(PROMO_CODE);
  };

  return <div className="min-h-screen bg-white text-[#303030] overflow-x-hidden">
    <header className="px-6 py-5 flex justify-between items-center max-w-6xl mx-auto"><Logo/><a href="tel:88002228004" className="font-bold">8 (800) 222-80-04</a></header>

    <section className="bg-[#fffaf0] px-6 py-16"><div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      <div>
        <div className="bg-[#FFD53F] rounded-xl p-4 inline-block font-bold mb-5">Скидка 15% на первый заказ<br/>Промокод: {PROMO_CODE}</div>
        <h1 className="text-5xl font-bold">Еда в поезд с доставкой прямо к вагону</h1>
        <p className="text-xl mt-5">Оформите заказ на сайте или в приложении ЕдуЕм</p>
        <div className="mt-8"><Button>Заказать через сайт</Button></div>
        <button onClick={copyPromo} className="mt-4 border border-dashed border-[#FFD53F] rounded-xl px-5 py-3 font-bold">Скопировать промокод {PROMO_CODE}</button>
      </div>
      <div className="flex justify-center"><img src={img1} className="max-w-md rounded-[50px]" alt="ЕдуЕм"/></div>
    </div></section>

    <section className="px-6 py-14 bg-[#fffaf0]"><h2 className="text-4xl font-bold text-center mb-10">Как это работает?</h2><div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">{steps.map(s=><div className="bg-white rounded-3xl p-6 text-center" key={s[0]}><div className="bg-[#FFD53F] rounded-full w-10 h-10 mx-auto flex items-center justify-center font-bold">{s[0]}</div><h3 className="font-bold text-xl mt-6">{s[1]}</h3></div>)}</div></section>

    <section className="py-14 px-6 text-center"><h2 className="text-4xl font-bold">Где заказывать?</h2><p className="mt-5 text-lg">На сайте с компьютера, планшета или телефона. В приложении - удобно заказывать прямо в дороге.</p></section>

    <section className="py-14 px-6 bg-[#fffaf0] text-center"><h2 className="text-4xl font-bold">ЕдуЕм всегда под рукой</h2><p className="mt-4">Скачивайте приложение ЕдуЕм</p><div className="flex flex-wrap justify-center gap-4 mt-8"><StoreButton store="App Store" subtitle="Скачать в"/><StoreButton store="Google Play" subtitle="Доступно в"/><StoreButton store="RuStore" subtitle="Скачать в"/></div><img src={imgQr} className="w-36 h-36 mx-auto mt-8" alt="QR-код"/></section>

    <section className="bg-[#FFD53F] py-14 text-center"><h2 className="text-4xl font-bold">Заказать еду в поезд легко!</h2><p className="mt-4 font-bold">Промокод {PROMO_CODE} - скидка 15%</p><div className="mt-6"><Button>Заказать</Button></div></section>
  </div>;
}
