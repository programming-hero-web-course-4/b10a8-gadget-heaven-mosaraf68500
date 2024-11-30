import { Link, NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";



const Navbar = () => {


    const Links=<>

<li><NavLink to="/">Home</NavLink></li>
<li><NavLink to="/">Statistics</NavLink></li>
<li><NavLink to="/">Dashboard</NavLink></li>


    </>
    return (
        <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FaBars></FaBars>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex lg:justify-between">
          <ul className="menu menu-horizontal gap-5  font-bold">
         {Links}
          </ul>
        </div>
        <div className="navbar-end flex  gap-4 text-2xl">
          
          <Link><MdOutlineShoppingCart></MdOutlineShoppingCart></Link>
          <Link><FaHeart></FaHeart></Link>
        </div>
      </div>
    </div>
    );
};

export default Navbar;