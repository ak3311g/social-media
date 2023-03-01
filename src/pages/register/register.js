import "./register.css";
import { Link } from "react-router-dom";

const Register=()=>{
    return(
        <div className="register">
            <div className="card">
                <div className="left">
                    <h1>Hola! Coder</h1>
                    <p>Welcome! Get your hands on this site using you unique ID and Pass</p>
                    <br></br>
                    <span>Do You Have an Account</span>
                    <Link to="/login">
                    <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                    <input type="text" placeholder="Name"></input>
                        <hr></hr>
                        <input type="text" placeholder="Username"></input>
                        <hr></hr>
                        <input type="email" placeholder="Email"></input>
                        <hr></hr>
                        <input type="password" placeholder="password"></input>
                        <hr></hr>
                        <button>Dive in</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;