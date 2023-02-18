import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/LandingComponent.css";
import isAuth from "../../lib/isAuth";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(isAuth());
  return (
    <div className="bar">
      <div className="flexOne"></div>
      <h3 className="flexTwo">Why Super Jobs</h3>
      <h3 className="flexThree">About Us</h3>
      <h3 className="flexFour">Testominals</h3>
      <div className="flexFive">
        {loggedIn ? (
          <Link className="link" to="/home">
            Go To Profile
          </Link>
        ) : (
          <Link className="link" to="/login">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
