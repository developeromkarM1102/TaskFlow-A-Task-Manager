
export type TaskPriority = "Low" | "Medium" | "High";

export type TaskStatus = "Completed" | "Pending" | "Inprogress";

export type TaskFormData = {
    title : string,
    description : string,
    priority : TaskPriority,
    status : TaskStatus
}

export interface Task {
    id : string,
    title : string,
    description : string,
    priority : TaskPriority,
    status : TaskStatus,
    createdAt : Date
}