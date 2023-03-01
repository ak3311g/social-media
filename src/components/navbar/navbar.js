import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCube, faEnvelope, faHouse, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const publicUrl = process.env.PUBLIC_URL;
const imageUrl = `${publicUrl}/dodge.png`;
const Navbar=()=>{
    return(
        <div className="navbar">
            <div className="left">
            <Link to="/" style={{textDecoration:'none'}}>
                <span>Scrools</span>  
            </Link>
            <FontAwesomeIcon icon={faHouse} />
            <FontAwesomeIcon icon={faMoon} />
            <FontAwesomeIcon icon={faCube} />
            <div className="search">
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                <input type="text" placeholder="Search"></input>
            </div>
            </div>
            <div className="right">
                <FontAwesomeIcon icon={faUser}/>
                <FontAwesomeIcon icon={faEnvelope}/>
                <FontAwesomeIcon icon={faBell}/>
                <div className="profile">
                    <img src={imageUrl} alt="" width="30px"></img>
                    <span>MySite</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;