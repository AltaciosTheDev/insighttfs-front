import { useContext } from "react";
import { TasksContext } from "../contexts/TasksProvider";

export const useTasksContext = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useTasks must be used within <TasksProvider>");
  }
  return context;
};

