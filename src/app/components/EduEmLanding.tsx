import img1 from "../../imports/Главная/59e66bf59a807adfcca622214c7905f257593139.png";
import imgImage3 from "../../imports/Главная/26a5671c6b3af6e3a5debe9492f9a16cd155989b.png";
import imgImage2 from "../../imports/Главная/600dd68d73287a8bc8e20e1c7ceddef2b4292e82.png";
import imgImage10 from "../../imports/Главная/2c67b81cac11ecd17b88808accddd5dae40d186c.png";
import imgQr from "../../imports/Главная/9f95f8e8285eb609ecaa5cfd4598568b82589639.png";

const PROMO_CODE = "PROM15";
const CTA_URL = "https://delivery.eduem.ru/";

function Logo() {
  return <div className="text-3xl font-bold"><span className="text-[#303030]">Еду</span><span className="text-[#FFD53F]">Ем</span></div>;
}

function StoreButton({name, subtitle}: {name:string, subtitle:string}) {
  return <a href="#" className="flex items-center gap-3 bg-[#303030] text-white rounded-xl px-5 py-3 min-w-[180px]">
    <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center font-bold">{name[0]}</div>
    <div><div className="text-xs opacity-70">{subtitle}</div><div className="font-bold">{name}</div></div>
  </a>;
}

function Button({children, secondary=false}: {children: React.ReactNode, secondary?: boolean}) {
  return <a href={CTA_URL} className={`${secondary ? "bg-white border border-[#FFD53F]" : "bg-[#FFD53F]"} rounded-xl px-6 py-4 font-bold text-[#303030] inline-block`} data-ym-goal="click_cta">{children}</a>;
}

export function EduEmLanding() {
  const steps = [
    ["1", "Укажите поезд и станцию", imgImage3],
    ["2", "Выберите еду", imgImage2],
    ["3", "Получите заказ у вагона", imgImage10],
  ];

  return <div className="min-h-screen bg-white text-[#303030] overflow-x-hidden">
    <header className="px-6 py-4 flex justify-between items-center max-w-6xl mx-auto">
      <Logo/>
      <a href="tel:88002228004" className="text-[#FFD53F] font-bold">8 (800) 222-80-04</a>
    </header>

    <section className="bg-[#fffaf0] px-6 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="bg-[#FFD53F] rounded-xl p-3 inline-block font-bold mb-5">-15% на первый заказ<br/>Промокод: {PROMO_CODE}</div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">Закажите еду в поезд<br/><span className="text-[#FFD53F]">со скидкой 15%</span></h1>
          <p className="text-xl mt-5">Доставка из кафе и ресторанов прямо к вашему вагону.</p>
          <div className="flex flex-wrap gap-3 mt-8">
            <Button>Заказать через сайт</Button>
            <Button secondary>Скачать приложение</Button>
          </div>
          <button className="mt-4 border border-dashed border-[#FFD53F] rounded-xl px-5 py-3 font-bold" data-ym-goal="copy_promo">Скопировать промокод {PROMO_CODE}</button>
        </div>
        <div className="flex justify-center">
          <img src={img1} className="max-w-md rounded-[60px] shadow-xl" alt="ЕдуЕм" />
        </div>
      </div>
    </section>

    <section className="py-12 grid grid-cols-3 max-w-5xl mx-auto text-center">
      <div><b className="text-4xl text-[#FFD53F]">400+</b><p>кафе и ресторанов</p></div>
      <div><b className="text-4xl text-[#FFD53F]">125+</b><p>городов и станций</p></div>
      <div><b className="text-4xl text-[#FFD53F]">1 000 000+</b><p>клиентов</p></div>
    </section>

    <section id="how" className="px-6 py-12 bg-[#fffaf0]">
      <h2 className="text-4xl font-bold text-center mb-10">Как это работает?</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {steps.map(s=><div className="bg-white rounded-3xl p-6 text-center" key={s[0]}><img src={s[2]} className="w-20 h-20 mx-auto object-cover rounded-xl"/><div className="bg-[#FFD53F] rounded-full w-10 h-10 mx-auto my-4 flex items-center justify-center font-bold">{s[0]}</div><h3 className="font-bold text-xl">{s[1]}</h3></div>)}
      </div>
    </section>

    <section className="py-12 px-6 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Выбирайте еду по маршруту</h2>
        <p className="mt-4 text-lg">Кафе, рестораны и магазины рядом со станциями. Заказывайте заранее - мы доставим к вагону.</p>
      </div>
    </section>

    <section id="app" className="py-12 px-6 bg-[#fffaf0]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Скачайте приложение ЕдуЕм</h2>
        <p className="mt-4">Выберите удобный способ заказа:</p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <StoreButton name="App Store" subtitle="Скачать в" />
          <StoreButton name="Google Play" subtitle="Доступно в" />
          <StoreButton name="RuStore" subtitle="Скачать в" />
        </div>
        <img src={imgQr} className="w-32 h-32 mx-auto mt-8" alt="QR"/>
      </div>
    </section>

    <section className="bg-[#FFD53F] py-12 text-center">
      <h2 className="text-4xl font-bold">Скидка 15% на первый заказ</h2>
      <p className="mt-3 font-bold">Промокод {PROMO_CODE}</p>
      <div className="mt-6"><Button>Заказать со скидкой</Button></div>
    </section>
  </div>;
}
