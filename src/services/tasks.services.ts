import type { Task } from "../lib/types";


//GET tasks
export async function getTasks():Promise<Task[]> {
  const res = await fetch(`http://localhost:3000/api/tasks`);
  if (!res.ok) {
    const error = await res.json(); // read backend error
    throw new Error(error.message);
        //execution STOPS here — nothing below runs

  }
  //this ONLY runs if no error was thrown
  const data = await res.json();
  console.log(data);
  return data.tasks
}


//POST task
export async function postTask(taskName:string):Promise<Task> {
  const res = await fetch(`http://localhost:3000/api/tasks`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ taskName: taskName }),
})
  if(!res.ok){
    const error = await res.json()//read backend error
    throw new Error(error.message)
      //stop execution here
  }
  const data = await res.json()
  console.log(data)
  await new Promise((resolve) => setTimeout(resolve, 500));
  return data.task
}

//DELETE task
export async function deleteTask(id:number):Promise<Task> {
  const res = await fetch(`http://localhost:3000/api/tasks/${id}`,{
    method:"DELETE"
  })

  if(!res.ok){
    const error = await res.json()//must read error from backend
    throw new Error(error.message)
  }
  const data = await res.json()
  console.log(data)
  
  await new Promise((resolve) => setTimeout(resolve, 500));
  return data.task
}