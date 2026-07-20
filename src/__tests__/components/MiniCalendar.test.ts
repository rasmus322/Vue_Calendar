import { describe, it, expect } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import { createPinia, setActivePinia } from "pinia";
import { MiniCalendar } from "@/widgets/side-bar";
import { useTaskStore } from "@entities/task/store/taskStore";
import styles from "@widgets/side-bar/ui/MiniCalendar/style.module.scss";

describe("MiniCalendar", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("Рендерит 7 дней недели", () => {
    const wrapper = mount(MiniCalendar);
    const weekDays = wrapper.findAll(`.${styles.miniCalendar__weekDay}`);

    expect(weekDays).toHaveLength(7);
  });

  it("Рендерит 42 ячейки календаря", () => {
    const wrapper = mount(MiniCalendar);
    const cells = wrapper.findAll(`.${styles.miniCalendar__dayCell}`);

    expect(cells).toHaveLength(42);
  });

  it("Показывает индикаторы задач, когда они ЕСТЬ", async () => {
    const store = useTaskStore();
    store.addTask({
      id: "test_id",
      name: "test task",
      date: "2026-07-20",
      timeRange: { start: "09:00", end: "10:00" },
      taskType: "regular",
    });

    const wrapper = mount(MiniCalendar);
    await flushPromises();

    const indicators = wrapper.findAll(`.${styles.miniCalendar__taskIndicator}`);
    expect(indicators.length).toBeGreaterThan(0);
  });
});
