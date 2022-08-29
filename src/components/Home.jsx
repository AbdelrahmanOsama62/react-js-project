import image from "../images/personal-photo.jpg";
import React from "react";
import './home.css';

function Home(){
    return(
        <div className="container">
        <div className="  cc  divimg row">
            <div className="d-flex col-6  align-items-center"><h2 className="text-center">Welcome to my Home page</h2></div>
            <div className="col-6 "><img src={image} className="image" alt="" /></div>
        </div>
        </div>
    );
}

export default Home