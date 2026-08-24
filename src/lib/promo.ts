export type ClipboardWriter = {
  writeText: (value: string) => Promise<void>;
};

export type YmFunction = (
  counterId: number,
  method: "reachGoal",
  goal: string,
) => void;

export async function copyPromoCode(
  promoCode: string,
  clipboard: ClipboardWriter = navigator.clipboard,
) {
  await clipboard.writeText(promoCode);
}

export function emitYmGoal(
  goal: string,
  {
    counterId,
    ym,
  }: {
    counterId: number | null;
    ym?: YmFunction;
  },
) {
  if (!counterId || !ym) {
    return false;
  }

  ym(counterId, "reachGoal", goal);
  return true;
}
