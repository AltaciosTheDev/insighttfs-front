import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Stack from "@mui/material/Stack";
//import DoneIcon from '@mui/icons-material/Done';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

type ButtonWithIconProps = {
  onDelete: () => void,
  onToggle: () => void,
  onOpen: () => void
  isCompleted: boolean
}


export default function ButtonWithIcon({onToggle, onDelete,onOpen, isCompleted}: ButtonWithIconProps) {
  return (

    <Stack direction="row" spacing={2}>
      
      <Button onClick={onDelete}  color="error" variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button onClick={onOpen} color="info" variant="outlined" startIcon={<EditIcon />}>
        Edit
      </Button>
      <Button onClick={onToggle} color={`${isCompleted ? "inherit" : "success"}`} variant="outlined" startIcon={isCompleted ? <CheckCircleOutlineIcon/> : <CheckCircleIcon />}>
        {isCompleted ? "Incomplete": "Complete"}
      </Button>
    </Stack>
  );
}
