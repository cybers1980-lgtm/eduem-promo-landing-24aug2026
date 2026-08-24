import { Check, Copy } from "lucide-react";
import { useState } from "react";

import { copyPromoCode } from "../lib/promo";

export function PromoCodeButton({
  promoCode,
  onGoal,
  variant = "light",
}: {
  promoCode: string;
  onGoal: (goal: string) => void;
  variant?: "light" | "dark";
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await copyPromoCode(promoCode);
      onGoal("promo_copy");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      data-ym-goal="promo_copy"
      aria-live="polite"
      className={`inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border-2 px-5 font-bold transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffd53f] ${
        variant === "dark"
          ? "border-white/30 bg-white/10 text-white hover:border-white/60 hover:bg-white/15"
          : "border-[#2c2c2c]/12 bg-white text-[#2c2c2c] shadow-sm hover:border-[#ffd53f] hover:shadow-md"
      }`}
    >
      {copied ? <Check className="size-5" /> : <Copy className="size-5" />}
      {copied ? "Промокод скопирован" : "Скопировать промокод"}
    </button>
  );
}
