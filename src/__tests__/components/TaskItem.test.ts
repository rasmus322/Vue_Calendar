import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { TaskItem } from "@/widgets/side-bar";
import type { Task } from "@entities/task/types/task";
import styles from "@widgets/side-bar/ui/TaskList/TaskItem/style.module.scss";

describe("TaskItem", () => {
  const mockTask: Task = {
    id: "test_id",
    name: "test task",
    description: "test description",
    date: "2026-07-20",
    timeRange: { start: "09:00", end: "10:00" },
    taskType: "regular",
  };

  it("Рендерит название задачи", () => {
    const wrapper = mount(TaskItem, {
      props: {
        task: mockTask,
        showDate: false,
      },
    });

    expect(wrapper.text()).contain("test task");
  });

  it("Рендерит временной диапазон", () => {
    const wrapper = mount(TaskItem, {
      props: {
        task: mockTask,
        showDate: false,
      },
    });

    expect(wrapper.text()).toContain("09:00-10:00");
  });

  it("Рендерит описание, если оно ЕСТЬ", () => {
    const wrapper = mount(TaskItem, {
      props: {
        task: mockTask,
        showDate: false,
      },
    });

    expect(wrapper.text()).toContain("test description");
  });

  it("Не рендерит описание, если его НЕТ", () => {
    const taskWithoutDescription: Task = { ...mockTask, description: undefined };
    const wrapper = mount(TaskItem, {
      props: {
        task: taskWithoutDescription,
        showDate: false,
      },
    });

    expect(wrapper.find(".task__description").exists()).toBe(false);
  });

  it("Применяет цвет индикатора из константы", () => {
    const wrapper = mount(TaskItem, {
      props: {
        task: mockTask,
        showDate: false,
      },
      global: {},
    });
    const indicator = wrapper.find(`.${styles.task__indicator}`);

    expect(indicator.exists()).toBe(true);
    expect(indicator.attributes("style")).toContain("background-color: rgb(59, 130, 246");
  });

  it("Показывает дату когда showDate === TRUE", () => {
    const wrapper = mount(TaskItem, {
      props: {
        task: mockTask,
        showDate: true,
      },
    });

    expect(wrapper.text()).toContain("20/07/2026");
  });

  it("НЕ показывает дату когда showDate === FALSE", () => {
    const wrapper = mount(TaskItem, {
      props: {
        task: mockTask,
        showDate: false,
      },
    });

    expect(wrapper.text()).not.toContain("20/07/2026");
  });
});
