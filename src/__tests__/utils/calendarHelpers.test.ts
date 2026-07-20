import { describe, it, expect } from "vitest";
import { formatDateKey, getDaysInMonth, isToday } from "@entities/calendar/lib/helpers";
import type { CalendarDay } from "@entities/calendar/types/calendar";

describe("calendarHelpers", () => {
  describe("getDaysInMonth", () => {
    it("Возвращает колличество дней в месяце", () => {
      const year = 2026;
      const month = 7;
      expect(getDaysInMonth(year, month)).toBe(31);
    });
  });

  describe("formatDateKey", () => {
    it("Форматирует дату в ISO-формат с учетом велущего нуля", () => {
      const day: CalendarDay = { year: 2026, month: 6, day: 20, isCurrentMonth: true };
      expect(formatDateKey(day)).toBe("2026-07-20");
    });

    it("Добавляет ведущие нули для дней < 10", () => {
      const day: CalendarDay = { year: 2026, month: 0, day: 1, isCurrentMonth: true };
      expect(formatDateKey(day)).toBe("2026-01-01");
    });
  });

  describe("isToday", () => {
    it("Возвращает true для сегодняшнего дня", () => {
      const today = new Date();
      const day: CalendarDay = {
        year: today.getFullYear(),
        month: today.getMonth(),
        day: today.getDate(),
        isCurrentMonth: true,
      };

      expect(isToday(day)).toBe(true);
    });

    it("Возвращает false для НЕ сегодняшнего дня", () => {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const day: CalendarDay = {
        year: yesterday.getFullYear(),
        month: yesterday.getMonth(),
        day: yesterday.getDate(),
        isCurrentMonth: true,
      };

      expect(isToday(day)).toBe(false);
    });
  });
});
