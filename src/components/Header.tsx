import Counter from "./Counter";
import Logo from "./Logo";

function Header() {
  return (
    <header className="col-span-2 row-1/2 bg-[#fbf5ed] border-b border-black/5 flex justify-between items-center p-4">
      <Logo />
      <Counter />
    </header>
  );
}

export default Header;
