import { describe, it, expect } from "vitest";
import { formatDisplayDate } from "@entities/task/lib/helpers";

describe("taskHelper", () => {
  describe("formatDisplayDate", () => {
    it("Форматирует строку из ISO формата в DD/MM/YYYY", () => {
      expect(formatDisplayDate("2026-07-20")).toBe("20/07/2026");
    });

    it("Обрабатывает дни < 10 с ведущим нулем", () => {
      expect(formatDisplayDate("2026-01-01")).toBe("01/01/2026");
    });
  });
});
