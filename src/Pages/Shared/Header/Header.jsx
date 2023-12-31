// Navbar.js
import  { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
      .then(() => {
       Swal.fire({
         position: "top-end",
         icon: "success",
         title: "Log Out Successfully",
         showConfirmButton: false,
         timer: 1500,
       });
      })
      .catch((err) => {
          console.log(err)
      });
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = (
    <>
      <Link
        to="/"
        className="block font-semibold text-white hover:text-green-200 transition duration-300 my-2"
      >
        Home
      </Link>
      <Link
        to="/colleges"
        className="block font-semibold text-white hover:text-green-200 transition duration-300 my-2"
      >
        Colleges
      </Link>
      <Link
        to="/admission"
        className="block font-semibold text-white hover:text-green-200 transition duration-300 my-2"
      >
        Admission
      </Link>
      <Link
        to="/my-college"
        className="block font-semibold text-white hover:text-green-200 transition duration-300 my-2"
      >
        My College
      </Link>
      {user ? (
        <>
          <Link className="block font-semibold text-white hover:text-green-200 transition duration-300 my-2"></Link>
          <button
            onClick={handleLogOut}
            className=" hover:border-b-4 hover:border-green-500 rounded-md font-semibold hover:text-white bg-red-500 text-white hover:bg-red-600   px-8 py-1"
          >
            Log out
          </button>
        </>
      ) : (
        <>
          <Link
            to="/login"
            className="block font-semibold text-white hover:text-green-200 transition duration-300 my-2"
          >
            Login
          </Link>
        </>
      )}
    </>
  );

  return (
    <nav className="  bg-green-700 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white font-bold md:text-2xl text-xl">
          Find Your College
        </Link>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className=" font-bold text-xl" onClick={toggleMenu}>
            {isMenuOpen ? (
              <>
                <FiX className="h-6 w-6" />
              </>
            ) : (
              <>
                <FiMenu className="h-6 w-6" />
              </>
            )}
          </button>
        </div>

        {/* Desktop/Tablet Menu */}
        <div className="hidden md:flex space-x-4">
        
          {navItems}
          {/* Add more navigation items as needed */}
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 z-10   bg-green-700 ps-4 pb-8 rounded-md w-8/12">
            {navItems}
            {/* Add more navigation items as needed */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

