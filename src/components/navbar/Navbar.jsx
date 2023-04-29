import { navbar } from "../../data/navbar";
import NavLink from "../navlink/Navlink";
import "./style.css";

const Navbar = () => {
    // console.log(navbar.map((item) => item.title));
    return (
        <div className="navbar">
            <div className="logo">logo</div>

            <div className="navLink">
                {navbar.map((item, i) => (
                    <NavLink key={i}>{item.title}</NavLink>
                ))}
            </div>
            <div className="user">user</div>
        </div>
    );
};

export default Navbar;
