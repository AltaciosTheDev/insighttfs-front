import AddTaskForm from "./AddTaskForm";
import Button from "./Button";

export function Sidebar() {
  return (
    <section className=" flex flex-col col-2/3 row-2/3 bg-[#FFFcf9] border-l border-black/5 px-[25px] pt-[18px] pb-[28px]">
      <AddTaskForm/>
      <div className="mt-auto space-y-2">
        <Button type={"secondary"}>
          GET tasks
        </Button>
        <Button type={"secondary"}>
          Sign up 
        </Button>
      </div>
    </section>
  );
}
