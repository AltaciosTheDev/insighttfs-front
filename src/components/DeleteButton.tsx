type DeleteButtonProps = {
  onDelete: () => void
}

function DeleteButton({onDelete}:DeleteButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); //prevents <li onClick> from firing
    onDelete();
  };


  return (
    <button className="hover:cursor-pointer" onClick={handleClick}>✕</button>
  )
}

export default DeleteButton