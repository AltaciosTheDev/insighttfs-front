import type { Task } from "../lib/types";

const BASE_URL = import.meta.env.VITE_API_URL;
console.log(BASE_URL);

//GET tasks
export async function getTasks(token: string): Promise<Task[]> {
  const res = await fetch(`${BASE_URL}/tasks`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    const error = await res.json(); // read backend error
    throw new Error(error.message);
    //execution STOPS here — nothing below runs
  }
  //this ONLY runs if no error was thrown
  const data = await res.json();
  console.log(data);
  return data.tasks;
}

//POST task
export async function postTask(taskName: string, token: string): Promise<Task> {
  const res = await fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ taskName: taskName }),
  });
  if (!res.ok) {
    const error = await res.json(); //read backend error
    throw new Error(error.message);
    //stop execution here
  }
  const data = await res.json();
  console.log(data);
  await new Promise((resolve) => setTimeout(resolve, 500));
  return data.task;
}

//DELETE task
export async function deleteTask(id: number, token: string): Promise<Task> {
  const res = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` }
  });

  if (!res.ok) {
    const error = await res.json(); //must read error from backend
    throw new Error(error.message);
  }
  const data = await res.json();
  console.log(data);

  await new Promise((resolve) => setTimeout(resolve, 500));
  return data.task;
}

//TOGGLE task
export async function toggleTask(
  id: number,
  isCompleted: boolean,
  token: string
): Promise<Task> {
  const res = await fetch(`${BASE_URL}/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify({ isCompleted: isCompleted }),
  });

  if (!res.ok) {
    const error = await res.json(); //must read error from backend
    throw new Error(error.message);
  }
  const data = await res.json();
  console.log(data);

  await new Promise((resolve) => setTimeout(resolve, 500));
  return data.task;
}
