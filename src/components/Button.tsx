import { useTasksContext } from "../lib/hooks";

type ButtonProps = {
  children: React.ReactNode,
  type?: string
}

function Button ({children, type}: ButtonProps) {
  const { isDeleting } = useTasksContext();
  
  return (
    <button
      disabled={isDeleting ? true : false}
      className={`${isDeleting ? "opacity-[50%]" : ""} cursor-pointer h-[50px] bg-[#473a2b] w-full text-white rounded-[8px] cursor pointer hover:bg-[#322618]  ${type === "secondary" ? "opacity-[85%]" : "" }`}
    >
      {children}
    </button>
  );
}

export default Button