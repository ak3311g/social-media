import "./login.css";
import {Link} from "react-router-dom";

const Login=()=>{
    return(
        <div className="login">
            <div className="card">
                <div className="left">
                    <h1>Hola! Coder</h1>
                    <p>Welcome! Get your hands on this site using you unique ID and Pass</p>
                    <p>Never Try to heck our site </p>
                    <p className="fact">"It takes too much work"</p>
                    <br></br>
                    <span>Don't Have Account</span>
                    <Link to="/register">
                    <button>Wanna Join ?</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder="Username or email"></input>
                        <hr></hr>
                        <input type="password" placeholder="password"></input>
                        <hr></hr>
                        <button>Lets Go</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;