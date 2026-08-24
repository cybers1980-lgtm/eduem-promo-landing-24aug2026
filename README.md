# Промо-лендинг ЕдуЕм

Одностраничный адаптивный лендинг для рекламного трафика на `promo1.eduem.ru`.

Основной оффер - доставка еды прямо к вагону со скидкой 15% по промокоду `PROM15`.

## Стек

- React 18
- TypeScript
- Vite
- Tailwind CSS 4
- Vitest

## Локальный запуск

    npm install
    npm run dev

Vite покажет локальный адрес разработки в терминале.

## Проверка перед публикацией

    npm test
    npm run build

Production-сборка создается в папке `dist/`.

## Яндекс.Метрика

Перед сборкой задайте ID счетчика:

    VITE_YM_COUNTER_ID=12345678 npm run build

Интерактивные элементы размечены атрибутом `data-ym-goal` и отправляют цели:

- `promo_copy`
- `order_click`
- `app_download_click`

## Развертывание на Vercel

1. Подключите репозиторий к Vercel.
2. Framework Preset - `Vite`.
3. Build Command - `npm run build`.
4. Output Directory - `dist`.
5. Добавьте переменную `VITE_YM_COUNTER_ID`.
6. Подключите домен `promo1.eduem.ru`.

Файл `vercel.json` содержит fallback на `index.html`.

## Ассеты

Сайт использует только материалы ЕдуЕм из `src/assets/eduem/`. Тяжелые PNG дополнительно сохранены в WebP для ускорения мобильной загрузки.
