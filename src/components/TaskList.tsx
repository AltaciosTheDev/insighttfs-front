//import DeleteButton from "./DeleteButton";
import { useTasksContext } from "../lib/hooks";
import ButtonWithIcon from "./material/ButtonWithIcon";
import EditTaskModal from "../components/material/EditTaskModal";
import Spinner from "./material/Spinner";

function TaskList() {
  const {
    handleOpen,
    handleTaskToEdit,
    tasks,
    isLoading,
    loadingMessage,
    errorMessage,
    tasksToComplete,
    handleToggleTask,
    handleDeleteTask,
  } = useTasksContext();

  if (isLoading) {
    return (
      <div className="mx-auto my-auto">
        <Spinner />
        <p className="mt-2">{loadingMessage}</p>
      </div>
    );
  }

  if (errorMessage) {
    return <p className="mx-auto my-auto text-red-500">{errorMessage}</p>;
  }

  const handleOpenAndSetTaskToEdit = (id: number, text: string) => {
    handleOpen();
    handleTaskToEdit(id, text);
  };

  return tasksToComplete != 0 ? (
    <ul className="overflow-auto my-3">
      <EditTaskModal />
      {tasks.map((task) => {
        return (
          <li
            key={task.id}
            className="flex justify-between items-center px-8 h-[50px] border border-black/5"
          >
            <span
              className={`${
                task.isCompleted ? "line-through text-[#ccc]" : ""
              }`}
            >
              {task.name}
            </span>
            <ButtonWithIcon
              onOpen={() => handleOpenAndSetTaskToEdit(task.id, task.name)}
              onToggle={() => handleToggleTask(task.id, !task.isCompleted)}
              onDelete={() => handleDeleteTask(task.id)}
              isCompleted={task.isCompleted}
            />
            {/* <DeleteButton onDelete={() => handleDeleteTask(task.id)} /> */}
          </li>
        );
      })}
    </ul>
  ) : (
    <p className="mx-auto my-auto">Add tasks to complete...</p>
  );
}

export default TaskList;
