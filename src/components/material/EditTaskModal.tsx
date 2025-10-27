import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useTasksContext } from "../../lib/hooks";

export default function EditTaskModal() {
  const { open, handleClose, handleTaskToEdit, taskToEdit, handleEditTask } = useTasksContext();

  const handleCloseAndCleanTaskToEdit = () => {
    handleClose();
    handleTaskToEdit(taskToEdit.id, "");
  };

  // keep TextField controlled even if taskToEdit is undefined/null
  const [text, setText] = React.useState<string>(taskToEdit.name ?? "");

  //"Hey — every time taskToEdit changes (like when user clicks a different Edit button), update the input value (text) to match."
  React.useEffect(() => {
    setText(taskToEdit.name ?? "");
  }, [taskToEdit]);


  //Just because the modal disappears visually… does NOT mean the component unmounted.
  //MUI’s <Dialog> by default keeps the component mounted in memory — it’s only hiding it.
  //That means: no fresh re-render, no new initial state, nothing resets automatically.


  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setText(e.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: call your update action here with `text`
    // e.g. await updateTaskName(taskId, text)
    await handleEditTask(taskToEdit.id,text)
    handleCloseAndCleanTaskToEdit();
  };

  return (
    <>
      <Dialog open={open} onClose={handleCloseAndCleanTaskToEdit}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Make changes to your task <span className="bold">{`(Id:${taskToEdit.id})`} </span> and save when you're ready.
          </DialogContentText>
          <form onSubmit={handleSubmit} id="edit-task-form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="taskName"
              name="taskName"
              label="New task name"
              type="text"
              fullWidth
              variant="standard"
              value={text}
              onChange={handleOnChange}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAndCleanTaskToEdit}>Cancel</Button>
          <Button type="submit" form="edit-task-form" variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
