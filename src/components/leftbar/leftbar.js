import { faCalendar, faCamera, faCircleInfo, faEnvelope, faFileVideo, faGamepad, faImage, faInfo, faPeopleGroup, faPiggyBank, faScrewdriverWrench, faShop, faStopwatch, faUserFriends, faUserGroup, faVideo, faVideoSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FeaturedVideoTwoTone } from "@mui/icons-material";
import "./leftbar.css";
const publicUrl = process.env.PUBLIC_URL;
const imageUrl = `${publicUrl}/dodge.png`;

const Leftbar=()=>{
    return(
        <div className="leftbar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                    <img src={imageUrl} alt="" width="30px"></img>
                    <span>MySite</span>
                    </div>
                    <div className="items">
                        <FontAwesomeIcon icon={faUserFriends}/>
                        <span>Friends</span>
                    </div>
                    <div className="items">
                        <FontAwesomeIcon icon={faPeopleGroup}/>
                        <span>Groups</span>
                    </div>
                    <div className="items">
                        <FontAwesomeIcon icon={faShop}/>
                        <span>Marketplace</span>
                    </div>
                    <div className="items">
                        <FontAwesomeIcon icon={faVideo}/>
                        <span>Watch</span>
                    </div>
                    <div className="items">
                        <FontAwesomeIcon icon={faStopwatch}/>
                        <span>Memories</span>
                    </div>
                </div>
                <hr/>
                <div className="menu">
                    <span className="shortcuttitle">Your Shortcuts</span>
                    <div className="items">
                        <FontAwesomeIcon icon={faCalendar}/>
                        <span>Events</span>
                    </div>
                    <div className="items">
                        <FontAwesomeIcon icon={faGamepad}/>
                        <span>Gaming</span>
                    </div>
                    <div className="items">
                        <FontAwesomeIcon icon={faImage}/>
                        <span>Gallery</span>
                    </div>
                    <div className="items">
                        <FontAwesomeIcon icon={faVideo}/>
                        <span>Videos</span>
                    </div>
                    <div className="items">
                        <FontAwesomeIcon icon={faEnvelope}/>
                        <span>Messages</span>
                    </div>
                </div>
                <hr/>
                <div className="menu othersmenu">
                    <span className="shortcuttitle">Your Shortcuts</span>
                    <div className="items">
                        <FontAwesomeIcon icon={faPiggyBank}/>
                        <span>Fundraiser</span>
                    </div>
                    <div className="items">
                        <FontAwesomeIcon icon={faScrewdriverWrench}/>
                        <span>Tutorials</span>
                    </div>
                    <div className="items">
                        <FontAwesomeIcon icon={faFileVideo}/>
                        <span>Courses</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leftbar;