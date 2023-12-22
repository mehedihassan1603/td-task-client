import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider/AuthProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
    .then(() => {
      console.log("Successfully logged out");
      navigate('/');
    })
      .catch((error) => console.log(error));

  };

  
  return (
    <div>
      <div className="navbar bg-gradient-to-r from-cyan-800 via-cyan-600 to-cyan-800 text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content mt-3 z-10 p-2 shadow bg-blue-700 rounded-box w-52"
            >
              <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/dash">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/allTask">All Task</NavLink>
            </li>
            <li>
              <NavLink to="/faq">FAQ?</NavLink>
            </li>
            </ul>
          </div>
          
          <a href="/">
            <img
              src="https://i.ibb.co/XS0stSd/logo-removebg-preview.png"
              width={"40px"}
              alt=""
            />
          </a>
          <NavLink to="/" className="normal-case text-xl font-semibold">
            To-Do-Lst
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-title text-white text-lg menu-horizontal px-1 ">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/allTask">All Task</NavLink>
            </li>
            <li>
              <NavLink to="/faq">FAQ?</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="text-white flex flex-col lg:flex-row items-center">
          {user ? (
          <>
            <div className="flex flex-col justify-center items-center">
              <span>
                <img className="w-10 rounded-full" src={user.photoURL} alt="" />
              </span>
              <span>{user.displayName}</span>
            </div>
            <button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-2 px-4 rounded-full shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
              <a onClick={handleLogout}>Logout</a>
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="bg-gradient-to-r from-green-800 via-green-600 to-green-800 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-2 px-4 rounded-full shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
              Login
            </button>
          </Link>
        )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
