type DeleteButtonProps = {
  onDelete: () => void
}

function DeleteButton({onDelete}:DeleteButtonProps) {
  return (
    <button className="hover:cursor-pointer" onClick={onDelete}>✕</button>
  )
}

export default DeleteButton