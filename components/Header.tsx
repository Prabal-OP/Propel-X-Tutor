import { Logo } from "./logo";

const Header = () => {
  return (
    <div className="container flex h-[60px] items-center justify-center px-4 lg:h-[80px] lg:px-0">
      <a href="/" className="flex items-center justify-center">
        <img
          src="/logopx.jpg"
          alt="Logo"
          className="mr-2 h-auto w-[20px] sm:w-[30px]"
        />
        <span className="ml-2 font-sans text-lg font-bold text-blue-500">
          Propel-X
        </span>
        <span className="ml-1 font-sans text-lg font-bold text-black">
          Tutor
        </span>
      </a>
    </div>
  );
};

export default Header;
