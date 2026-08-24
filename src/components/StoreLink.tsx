import type { MouseEventHandler } from "react";

import appleLogo from "../assets/eduem/apple.svg";
import googlePlayLogo from "../assets/eduem/google-play.svg";
import rustoreLogo from "../assets/eduem/rustore.svg";

const storeMeta = {
  apple: { label: "App Store", eyebrow: "Загрузите в", icon: appleLogo },
  google: { label: "Google Play", eyebrow: "Доступно в", icon: googlePlayLogo },
  rustore: { label: "RuStore", eyebrow: "Скачайте в", icon: rustoreLogo },
} as const;

export type StoreName = keyof typeof storeMeta;

export function StoreLink({
  store,
  href,
  onClick,
}: {
  store: StoreName;
  href: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  const meta = storeMeta[store];

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      onClick={onClick}
      data-ym-goal="app_download_click"
      aria-label={`${meta.eyebrow} ${meta.label}`}
      className="group flex min-h-14 min-w-[168px] items-center gap-3 rounded-2xl bg-[#282828] px-4 py-2.5 text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-black hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd53f]"
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white/8">
        <img src={meta.icon} className="size-6 object-contain" alt="" />
      </span>
      <span className="text-left leading-none">
        <span className="block text-[10px] font-medium text-white/65">
          {meta.eyebrow}
        </span>
        <span className="mt-1 block text-[15px] font-bold tracking-tight">
          {meta.label}
        </span>
      </span>
    </a>
  );
}
