import { describe, expect, it, vi } from "vitest";

import { copyPromoCode, emitYmGoal } from "./promo";

describe("copyPromoCode", () => {
  it("writes PROM15 through the Clipboard API", async () => {
    let copied = "";
    const clipboard = {
      writeText: async (value: string) => {
        copied = value;
      },
    };

    await copyPromoCode("PROM15", clipboard);

    expect(copied).toBe("PROM15");
  });
});

describe("emitYmGoal", () => {
  it("sends the requested reachGoal event when Yandex Metrica is available", () => {
    const ym = vi.fn();

    const wasSent = emitYmGoal("promo_copy", { counterId: 123, ym });

    expect(wasSent).toBe(true);
    expect(ym).toHaveBeenCalledWith(123, "reachGoal", "promo_copy");
  });

  it("stays safe when the counter is not configured", () => {
    expect(emitYmGoal("order_click", { counterId: null })).toBe(false);
  });
});
