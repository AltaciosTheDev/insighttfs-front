import React, { createContext, useEffect } from "react";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useState } from "react";
//import { initialTasks } from "../lib/constants";
import type { Task } from "../lib/types";
import {
  deleteTask,
  getTasks,
  postTask,
  toggleTask,
} from "../services/tasks.services";
import { getOrThrowAccessToken } from "../lib/utils";

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
  
  //KINDE TOKEN HOOK
  const { getAccessToken } = useKindeAuth();
  

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
      //custom function for handling token
      const token = await getOrThrowAccessToken(getAccessToken)
      console.log(token)
      setErrorMessage("");
      setIsLoading(true);
      setLoadingMessage("Updating your task...");
      const updatedTask = await toggleTask(id, isCompleted, token);
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
      //custom function for handling token
      const token = await getOrThrowAccessToken(getAccessToken)
      console.log(token)
      setErrorMessage("");
      setIsLoading(true);
      setLoadingMessage("Deleting your task...");
      const taskDeleted = await deleteTask(id, token);
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
      //custom function for handling token
      const token = await getOrThrowAccessToken(getAccessToken)
      console.log(token)
      setErrorMessage("");
      setIsLoading(true);
      setLoadingMessage("Adding your task...");
      const newTask = await postTask(taskName,token);
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
        //custom function for handling token
        const token = await getOrThrowAccessToken(getAccessToken)
        console.log(token)
        setErrorMessage("");
        setIsLoading(true);
        setLoadingMessage("Loading your tasks...");
        const tasks = await getTasks(token);
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
