import type { Task } from "../types/task";

interface TaskListProps {
  tasks: Task[];
}

const TaskList = ({ tasks }: TaskListProps) => {
return (
  <section className="space-y-4">
    {tasks.map((task) => (
      <article
        key={task.id}
        className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:border-gray-300 hover:shadow-md"
      >
        {/* Top row */}
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h2 className="truncate text-base font-semibold text-gray-900">
              {task.title}
            </h2>

            <p className="mt-1 line-clamp-2 text-sm leading-6 text-gray-500">
              {task.description || "No description added."}
            </p>
          </div>

          {/* Status */}
          <span
            className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
              task.status === "completed"
                ? "bg-green-50 text-green-700"
                : task.status === "in-progress"
                ? "bg-blue-50 text-blue-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {task.status === "in-progress"
              ? "In Progress"
              : task.status.charAt(0).toUpperCase() + task.status.slice(1)}
          </span>
        </div>

        {/* Task info */}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          {/* Priority */}
          <span
            className={`rounded-lg px-3 py-1.5 text-xs font-medium ${
              task.priority === "High"
                ? "bg-red-50 text-red-700"
                : task.priority === "Medium"
                ? "bg-yellow-50 text-yellow-700"
                : "bg-green-50 text-green-700"
            }`}
          >
            {task.priority} Priority
          </span>

          {/* Created date */}
          <span className="text-xs text-gray-400">
            Created {task.createdAt.toLocaleDateString()}
          </span>
        </div>

        {/* Divider */}
        <div className="my-5 border-t border-gray-100" />

        {/* Actions */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-400">
            ID: {task.id.slice(0, 8)}...
          </span>

          <div className="flex gap-2">
            <button
              type="button"
              className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
            >
              Edit
            </button>

            <button
              type="button"
              className="rounded-lg bg-gray-900 px-3 py-2 text-xs font-medium text-white transition hover:bg-gray-800"
            >
              Complete
            </button>
          </div>
        </div>
      </article>
    ))}
  </section>
);
};

export default TaskList;