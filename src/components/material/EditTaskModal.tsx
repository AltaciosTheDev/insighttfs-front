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
  const { open, handleClose, handleTaskToEdit, taskToEdit } = useTasksContext();

  const handleCloseAndCleanTaskToEdit = () => {
    handleClose();
    handleTaskToEdit("");
  };

  // keep TextField controlled even if taskToEdit is undefined/null
  const [text, setText] = React.useState<string>(taskToEdit ?? "");

  //"Hey — every time taskToEdit changes (like when user clicks a different Edit button), update the input value (text) to match."
  React.useEffect(() => {
    setText(taskToEdit ?? "");
  }, [taskToEdit]);

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setText(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: call your update action here with `text`
    // e.g. await updateTaskName(taskId, text)
    handleCloseAndCleanTaskToEdit();
  };

  return (
    <>
      <Dialog open={open} onClose={handleCloseAndCleanTaskToEdit}>
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Make changes to your task and save when you're ready.
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
