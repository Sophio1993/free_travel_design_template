import { search } from "../../data/search";
import Button from "../button/Button";
import Input from "../input/Input";
import Navbar from "../navbar/Navbar";
import "./style.css";
const Header = () => {
    return (
        <div className="header">
            <Navbar></Navbar>
            <div className="title">Discover the most engaging places</div>
            <div className="search">
                <Button className="button" text="Discover on 3D Globe">
                    <i className="fa-solid fa-globe"></i>
                </Button>
            </div>
            <div className="filter">
                {search.map((item) => {
                    return item.lable === "icon_button" ? (
                        <Button className="btn_search">{item.icon}</Button>
                    ) : (
                        <div>
                            <Input
                                label={item.lable}
                                placeholder={item.placeholder}
                            >
                                {item.icon}
                            </Input>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Header;
