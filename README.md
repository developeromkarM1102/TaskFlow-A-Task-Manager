# 📝 TypeScript Task Manager

A simple **Task Manager built with React + TypeScript** to understand the fundamentals of TypeScript and how TypeScript is used in a React application.

This project focuses more on **learning TypeScript concepts through implementation** than building a feature-heavy task management application.

---

## 📸 Preview

<img width="1424" height="769" alt="taskflow" src="https://github.com/user-attachments/assets/92221dcb-65b2-4614-950a-05cdd3e8586d" />


---

## 🛠️ Tech Stack

* **React**
* **TypeScript**
* **Vite**
* **Tailwind CSS**
* **JavaScript/ES6+**
* **Git & GitHub**

---

## ✨ Features

* Create a new task
* Add task title
* Add task description
* Set task priority
* Automatically generate a unique task ID
* Automatically assign task status
* Display created tasks
* Type-safe task data
* Type-safe component communication

---

## 📚 TypeScript Concepts Covered

This project was built specifically to practice the following TypeScript concepts.

### 1. Type Aliases

Created reusable types using `type`.

```ts
type TaskPriority = "Low" | "Medium" | "High";

type TaskStatus = "Completed" | "Pending" | "In Progress";
```

---

### 2. Union Types

Restricted values to a specific set of allowed strings.

```ts
type TaskPriority = "Low" | "Medium" | "High";
```

This prevents invalid values such as:

```ts
priority: "Very High"; // ❌
```

---

### 3. Interfaces

Used interfaces to define the structure of a complete task.

```ts
interface Task {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  createdAt: Date;
}
```

---

### 4. Object Typing

Defined exactly what properties an object should contain.

```ts
type TaskFormData = {
  title: string;
  description: string;
  priority: TaskPriority;
};
```

---

### 5. Typed Arrays

Used TypeScript to define an array containing only `Task` objects.

```ts
const [tasks, setTasks] = useState<Task[]>([]);
```

---

### 6. Generics with `useState`

Used React's generic `useState` to make state type-safe.

```ts
useState<Task[]>([]);
```

and:

```ts
useState<TaskFormData>({
  title: "",
  description: "",
  priority: "Low",
});
```

---

### 7. Typed React Props

Used TypeScript to define the type of a function passed between components.

```ts
interface TaskFormProps {
  onAddTask: (task: Task) => void;
}
```

This ensures that `onAddTask` receives a valid `Task`.

---

### 8. Function Types

Defined the parameter and return behavior of functions.

```ts
onAddTask: (task: Task) => void;
```

---

### 9. Type Assertions

Used a type assertion when reading the value from a `<select>` element.

```ts
priority: e.target.value as TaskPriority
```

---

### 10. Type-Only Imports

Used `import type` for TypeScript-only types.

```ts
import type { Task } from "../types/task";
```

This is useful when working with TypeScript's module syntax and `verbatimModuleSyntax`.

---

### 11. Type-Safe Data Transformation

The project separates **user-entered form data** from a **complete task**.

```text
TaskFormData
     ↓
User fills the form
     ↓
handleSubmit()
     ↓
Create Task
     ↓
Task[]
```

The user provides:

```ts
{
  title,
  description,
  priority
}
```

The application adds:

```ts
{
  id,
  status,
  createdAt
}
```

to create a complete `Task`.

---

## 🧩 Project Structure

```text
src/
├── components/
│   ├── TaskForm.tsx
│   └── TaskList.tsx
│
├── types/
│   └── task.ts
│
├── App.tsx
└── main.tsx
```

---

## 🔄 Application Flow

```text
User enters task information
            ↓
        TaskForm
            ↓
       formData
            ↓
       handleSubmit()
            ↓
       Create Task
            ↓
     onAddTask(newTask)
            ↓
           App
            ↓
        tasks: Task[]
            ↓
        TaskList
            ↓
       tasks.map()
            ↓
       Display Tasks
```

---

## 🎯 Purpose of the Project

The main goal of this project is to understand how **TypeScript works together with React**.

Instead of learning TypeScript only through isolated examples, the concepts are applied while building a small functional application.

### Learning Focus

* Understanding TypeScript types
* Creating interfaces
* Using union types
* Typing React state
* Typing React props
* Working with typed functions
* Handling form data
* Creating type-safe objects
* Rendering typed arrays

---

## 🔮 Future Improvements

This project is intentionally kept basic.

Possible future improvements include:

* Edit tasks
* Delete tasks
* Mark tasks as completed
* Filter tasks
* Search tasks
* Local storage
* Backend API
* Authentication
* More advanced TypeScript concepts

These features can be added later as new learning milestones.

---
