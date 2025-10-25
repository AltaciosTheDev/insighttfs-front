import React, { createContext, useEffect } from "react";
import { useState } from "react";
//import { initialTasks } from "../lib/constants";
import type { Task } from "../lib/types";
import {
  deleteTask,
  getTasks,
  postTask,
  toggleTask,
} from "../services/tasks.services";

type TasksContextType = {
  tasks: Task[];
  tasksToComplete: number;
  completedTasks: number;
  handleAddTask: (taskName: string) => void;
  handleToggleTask: (id: number, isCompleted: boolean) => void;
  handleDeleteTask: (id: number) => void;
  isLoading: boolean;
  errorMessage: string;
  loadingMessage: string;
};

export const TasksContext = createContext<TasksContextType | null>(null);

function TasksProvider({ children }: { children: React.ReactNode }) {
  //state
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingMessage, setLoadingMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  //derived
  const completedTasks: number = tasks.filter(
    (task) => task.isCompleted
  ).length;
  const tasksToComplete: number = tasks.length;

  //handlers
  const handleToggleTask = async (
    id: number,
    isCompleted: boolean
  ): Promise<void> => {
    try {
      setErrorMessage("");
      setIsLoading(true);
      setLoadingMessage("Updating your task...");
      const updatedTask = await toggleTask(id, isCompleted);
      setTasks((prevTasks) => {
        return prevTasks.map((task) => {
          return task.id == id
            ? { ...task, isCompleted: updatedTask.isCompleted }
            : task;
        });
      });
    } catch (err) {
      console.error(`${err}`);
      console.error(`${err}`);
      setErrorMessage(`${err}`);
    }
    setIsLoading(false);
  };

  const handleDeleteTask = async (id: number): Promise<void> => {
    try {
      setErrorMessage("");
      setIsLoading(true);
      setLoadingMessage("Deleting your task...");
      const taskDeleted = await deleteTask(id);
      //setTask only happens if deleTask returns sucessfully
      setTasks((prevTasks) => {
        return prevTasks.filter((task) => {
          return task.id !== taskDeleted.id;
        });
      });
    } catch (err) {
      console.error(`${err}`);
      console.error(`${err}`);
      setErrorMessage(`${err}`);
    }
    setIsLoading(false);
  };

  const handleAddTask = async (taskName: string): Promise<void> => {
    try {
      setErrorMessage("");
      setIsLoading(true);
      setLoadingMessage("Adding your task...");
      const newTask = await postTask(taskName);
      setTasks((prevTasks) => {
        return [newTask, ...prevTasks];
      });
    } catch (err) {
      console.error(`${err}`);
      console.error(`${err}`);
      setErrorMessage(`${err}`);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchTasks = async (): Promise<void> => {
      try {
        setErrorMessage("");
        setIsLoading(true);
        setLoadingMessage("Loading your tasks...");
        const tasks = await getTasks();
        setTasks(tasks);
      } catch (err) {
        console.error(`${err}`);
        console.log(`${err}`);
        setErrorMessage(`${err}`);
      }
      setIsLoading(false);
    };
    fetchTasks();
  }, []);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        isLoading,
        loadingMessage,
        errorMessage,
        tasksToComplete,
        completedTasks,
        handleAddTask,
        handleToggleTask,
        handleDeleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export default TasksProvider;
