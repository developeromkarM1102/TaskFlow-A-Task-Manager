import { useState } from "react";
import type { Task, TaskFormData, TaskPriority} from "../types/task";

interface TaskFormProps {
  onAddTask: (task: Task) => void;
}

const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [formData, setFormData] = useState<TaskFormData>({
    title: "",
    description: "",
    priority: "Low",
    status : "Pending"
  });

  const handleSubmit = () => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      title: formData.title,
      description: formData.description,
      priority: formData.priority,
      status: formData.status,
      createdAt: new Date(),
    };

    onAddTask(newTask);

    setFormData({
      title: "",
      description: "",
      priority: "Low",
      status : "Pending"
    });
  };

return (
  <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
    {/* Header */}
    <div className="border-b border-gray-100 px-6 py-5">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-gray-900">
            Create a task
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Add a new task and organize it by priority.
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-sm font-semibold text-white">
          +
        </div>
      </div>
    </div>

    {/* Form */}
    <div className="space-y-6 p-6">
      {/* Title */}
      <div>
        <label
          htmlFor="title"
          className="mb-2 block text-sm font-medium text-gray-800"
        >
          Task title
        </label>

        <input
          id="title"
          type="text"
          value={formData.title}
          onChange={(e) => {
            setFormData({
              ...formData,
              title: e.target.value,
            });
          }}
          placeholder="e.g. Learn TypeScript Generics"
          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-gray-900 focus:bg-white focus:ring-4 focus:ring-gray-100"
        />

        <p className="mt-2 text-xs text-gray-400">
          Give your task a short and clear title.
        </p>
      </div>

      {/* Description */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-800"
          >
            Description
          </label>

          <span className="text-xs text-gray-400">
            Optional
          </span>
        </div>

        <textarea
          id="description"
          rows={4}
          value={formData.description}
          onChange={(e) => {
            setFormData({
              ...formData,
              description: e.target.value,
            });
          }}
          placeholder="What needs to be done?"
          className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none transition focus:border-gray-900 focus:bg-white focus:ring-4 focus:ring-gray-100"
        />
      </div>

      {/* Priority */}
      <div>
        <label
          htmlFor="priority"
          className="mb-2 block text-sm font-medium text-gray-800"
        >
          Priority
        </label>

        <select
          id="priority"
          value={formData.priority}
          onChange={(e) => {
            setFormData({
              ...formData,
              priority: e.target.value as TaskPriority,
            });
          }}
          className="w-full cursor-pointer appearance-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-900 focus:bg-white focus:ring-4 focus:ring-gray-100"
        >
          <option value="Low">Low priority</option>
          <option value="Medium">Medium priority</option>
          <option value="High">High priority</option>
        </select>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100" />

      {/* Submit */}
      <button
        onClick={handleSubmit}
        type="button"
        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 hover:shadow-md active:scale-[0.99]"
      >
        <span className="text-lg leading-none transition-transform group-hover:rotate-90">
          +
        </span>

        Add Task
      </button>
    </div>
  </section>
);
};

export default TaskForm;