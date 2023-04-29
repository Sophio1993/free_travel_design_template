import { body } from "../../data/body";
import Button from "../button/Button";
import "./style.css";
const Body = () => {
    return (
        <div className="body-container">
            {body.map((item) => {
                return (
                    <div className={item.className_C}>
                        <div>
                            <p>{item.title}</p>
                            <Button
                                className={item.className_TB}
                                text={item.view_all}
                            >
                                {item.icon_view_all}
                            </Button>
                        </div>
                        <div className={item.className}>
                            {item.block.map((elem) => {
                                return (
                                    <div
                                        key={elem.title}
                                        className={item.className_I}
                                    >
                                        <img
                                            src={elem.img}
                                            alt={elem.location}
                                        ></img>
                                        <div>
                                            <p>{elem.location}</p>
                                            <p>{elem.activity}</p>
                                            <div className={item.className_F}>
                                                <div
                                                    className={item.className_L}
                                                >
                                                    <p>{elem.place}</p>
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    {item.light_star}
                                                    {item.light_star}
                                                    {item.light_star}
                                                    {item.light_star}
                                                    {item.light_star}
                                                </div>
                                            </div>
                                            <div className={item.className_BW}>
                                                <p>{item.title_about_us}</p>
                                                <p>{elem.description}</p>
                                                <Button
                                                    className={
                                                        item.className_Btn
                                                    }
                                                    text={item.read_more}
                                                >
                                                    {item.icon_read_more}
                                                </Button>
                                            </div>
                                            <div className={item.className_IF}>
                                                <div>
                                                    {item.calendar_icon}
                                                    {elem.date}
                                                </div>
                                                <div>
                                                    {item.user_icon}
                                                    {elem.author}
                                                </div>
                                                <div>
                                                    {item.review_icon}
                                                    {elem.review}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
            {/* <div className="popular-destinations-container">
                <p>Popular Destinations</p>
                <div className="popular-destinations">
                    {destinations.map((item) => {
                        return (
                            <div
                                key={item.title}
                                className="popular-destinations-item"
                            >
                                <img src={item.img} alt={item.title}></img>
                                <p>{item.title}</p>
                                <p>{item.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div> */}
            {/* <div>Hotels and Restaurants</div>
            <div>Travel Tips and Advice</div>
            <div>Activities</div>
            <div>About Us</div> */}
        </div>
    );
};

export default Body;
