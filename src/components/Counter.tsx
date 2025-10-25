import { useTasksContext } from "../lib/hooks";

function Counter() {
  const { completedTasks, tasksToComplete } = useTasksContext();

  return (
    <p>
      <span className="font-bold">{completedTasks}</span> / {tasksToComplete}{" "}
      tasks completed
    </p>
  );
}

export default Counter;
