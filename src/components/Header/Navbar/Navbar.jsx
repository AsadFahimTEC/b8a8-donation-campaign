import { NavLink } from "react-router-dom";
import Logo from "../Logo";


const Navbar = () => {
    return (
        <div>
              <nav className="sm:flex sm:justify-between sm:items-center py-7 px-5">
        <Logo></Logo>
        <ul className="flex gap-5 text-lg font-normal">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""
              }
            >
              Home
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline text-[#FF444A] " : ""
              }
            >
              Donation
            </NavLink>
            
          </li>
          <li>
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline text-[#FF444A]" : ""
              }
            >
              Statistics
            </NavLink>
            
          </li>
        </ul>
      </nav>
        </div>
    );
};

export default Navbar;