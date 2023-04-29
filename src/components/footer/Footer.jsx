import { footer } from "../../data/footer";
import Button from "../button/Button";
import "./style.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-child-container">
                {footer.map((item) => {
                    return (
                        <div className={item.className}>
                            <p>{item.title}</p>
                            <p>{item.body}</p>
                            <p>{item.link_1}</p>
                            <p>{item.link_2}</p>
                            <p>{item.link_3}</p>
                            <p>{item.link_4}</p>

                            <div>
                                {item.facebook}
                                {item.twitter}
                                {item.instagram}
                                <div>
                                    {item.envelope}
                                    <div>
                                        <p>{item.topic}</p>
                                        <p>{item.email}</p>
                                    </div>
                                </div>
                                <Button className={item.className_button}>
                                    {" "}
                                    {item.icon_arrow_right}
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Footer;
