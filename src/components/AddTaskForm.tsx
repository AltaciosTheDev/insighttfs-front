import { useState } from "react";
import Button from "./Button";
import { useTasksContext } from "../lib/hooks";
//import type { Task } from "../lib/types";

function AddTaskForm() {
  const [text, setText] = useState<string>("");
  const [formError, setFormError] = useState<string>("")
  const { handleAddTask, isLoading } = useTasksContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newText = e.target.value;
    console.log(newText);
    setText(newText);
    setFormError("")
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(!text){
      setFormError("You can't create an empty task.")
      return //-> rest of code is never reached
    }

    handleAddTask(text);
    console.log("task added");
    setText("");
    setFormError("")
    console.log("input cleared");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Task</h2>
      
      <input
      placeholder="Write task..."
        onChange={handleChange}
        value={text}
        type="text"
        className="placeholder:text-gray-400 h-[50px] border border-black/20 rounded-[8px] my-2 p-2 "
      />
      <p className="text-red-500 mb-2 text-[14px]">{formError}</p>

      <Button>{isLoading ? "Action in progress…" : "Add task"}</Button>
    </form>
  );
}

export default AddTaskForm;
