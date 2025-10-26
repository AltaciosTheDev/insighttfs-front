import { useTasksContext } from "../lib/hooks";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

type ButtonProps = {
  children: React.ReactNode;
};

function Button({ children}: ButtonProps) {
  const { isLoading } = useTasksContext();
  const { logout } = useKindeAuth();

const handleLogout = ():void => {
  if(children === "Log out"){
    logout() 
  }
}

  return (
    <button
      onClick={handleLogout}
      disabled={isLoading ? true : false}
      className={`${
        isLoading ? "opacity-[50%]" : ""
      } cursor-pointer h-[50px] bg-[#473a2b] w-full text-white rounded-[8px] cursor pointer hover:bg-[#322618]`}
    >
      {children}
    </button>
  );
}

export default Button;
