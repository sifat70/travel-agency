import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"


const Header = () => {
    return (
        <div className="w-[80vw] mx-auto">
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl"><img className="h-full" src={logo} /></a>
                </div>
                <div>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li className="mr-4"><NavLink to="/news">News</NavLink></li>
                        <li className="mr-4"><NavLink to="/destination">Destination</NavLink></li>
                        <li className="mr-4"><NavLink to="/blog">Blog</NavLink></li>
                        <li className="mr-4"><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <button className="btn">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Header;