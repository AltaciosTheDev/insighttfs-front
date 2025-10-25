import DeleteButton from "./DeleteButton";
import { useTasksContext } from "../lib/hooks";

function TaskList() {
  const {
    tasks,
    isLoading,
    loadingMessage,
    errorMessage,
    tasksToComplete,
    handleToggleTask,
    handleDeleteTask,
  } = useTasksContext();


  if (isLoading) {
    return <p className="mx-auto my-auto">{loadingMessage}</p>;
  }

  if(errorMessage){
      return <p className="mx-auto my-auto text-red-500">{errorMessage}</p>;
  }


  return tasksToComplete != 0 ? (
    <ul className="overflow-auto">
      {tasks.map((task) => {
        return (
          <li
            onClick={() => handleToggleTask(task.id, !task.isCompleted)}
            key={task.id}
            className="flex justify-between items-center px-8 h-[50px] cursor-pointer border border-black/5"
          >
            <span
              className={`${
                task.isCompleted ? "line-through text-[#ccc]" : ""
              }`}
            >
              {task.name}
            </span>
            <DeleteButton onDelete={() => handleDeleteTask(task.id)} />
          </li>
        );
      })}
    </ul>
  ) : (
    <p className="mx-auto my-auto">Add tasks to complete...</p>
  );
}

export default TaskList;
