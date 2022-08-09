import Button from "./Button";
import Logo from "../Images/buddyLogo.png";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 z-10 w-full bg-gray-50 px-12 py-3 flex justify-between align-middle shadow-md">
      {/* brandh */}
      <div>
        <img className="w-32" src={Logo} alt="" />
      </div>
      {/* nav links */}
      <div className="navLinks h-full my-auto ">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Contact Us</a>
      </div>
      {/* Button */}
      <div className=" h-full my-auto">
        <Button text={"Let's Go"} px={"1.2rem"} py={".5rem"} />
      </div>
    </nav>
  );
};

export default Nav;
