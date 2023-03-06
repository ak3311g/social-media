import "./rightbar.css";

const publicUrl = process.env.PUBLIC_URL;
const imageUrl = `${publicUrl}/dodge.png`;
const Rightbar=()=>{
    return(
        <div className="rightbar">
            <div className="container">
                <div className="item">
                    <h1>Suggestions For You</h1>
                    <div className="user">
                        <div className="userinfo">
                        <img src={imageUrl} alt="" width="30px"/>
                        <span>Ankit</span>
                        </div>
                        <div className="buttons">
                            <button>Accept</button>
                            <button>Decline</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                        <img src={imageUrl} alt="" width="30px"/>
                        <span>Ankit</span>
                        </div>
                        <div className="buttons">
                            <button>Accept</button>
                            <button>Decline</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <h1>Latest Acivities</h1>
                    <div className="user">
                        <div className="userinfo">
                        <img src={imageUrl} alt="" width="30px"/>
                        <span>Ankit</span>
                        </div>
                        <div className="buttons">
                        <span>1 min ago</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                        <img src={imageUrl} alt="" width="30px"/>
                        <span>Ankit</span>
                        </div>
                        <div className="buttons">
                        <span>1 min ago</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                        <img src={imageUrl} alt="" width="30px"/>
                        <span>Ankit</span>
                        </div>
                        <div className="buttons">
                        <span>1 min ago</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                        <img src={imageUrl} alt="" width="30px"/>
                        <span>Ankit</span>
                        </div>
                        <div className="buttons">
                            <span>1 min ago</span>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <h1>Online Friends</h1>
                    <div className="user">
                        <div className="userinfo">
                        <img src={imageUrl} alt="" width="30px"/>
                        <div className="online"/>
                        <span>Ankit</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                        <img src={imageUrl} alt="" width="30px"/>
                        <div className="online"/>
                        <span>Ankit</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                        <img src={imageUrl} alt="" width="30px"/>
                        <div className="online"/>
                        <span>Ankit</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userinfo">
                        <img src={imageUrl} alt="" width="30px"/>
                        <div className="online"/>
                        <span>Ankit</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rightbar;