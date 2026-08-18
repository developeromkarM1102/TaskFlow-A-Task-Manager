import { useState } from "react";
import type { Task } from "./types/task";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-3xl space-y-6">
        <TaskForm onAddTask={handleAddTask} />

        <TaskList tasks={tasks} />
      </div>
    </main>
  );
};

export default App;