import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { useDispatch, useSelector } from "react-redux";
import {selectAuthUser, selectUserTokenUser } from "../store/auth/selectors";
import { performLogoutUser, performUserLogin } from "../store/auth/slice";

const Navbar: React.FC = () => {
    const dispatch = useDispatch();
    const userToken = useSelector(selectUserTokenUser);
    // console.log(userToken)
    const navigate = useNavigate();
  const isUsserLoggedIn = !!userToken;
  const handleLogout = () => {
    console.log("click")
    dispatch(performLogoutUser());
    navigate("/login")

  }

  return (
    <nav className="navbar">
    <div className="navbar-container">
      <Link to="/" className="navbar-logo">
        Home
      </Link>
      <ul className="nav-menu">
        {isUsserLoggedIn ? (
          <>
            <li className="nav-item">
              <Link to="/movies" className="nav-links">
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/directors" className="nav-links">
                Directors
              </Link>
            </li>
            <li className="nav-item">
            <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/login" className="nav-links">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-links">
                Signup
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  </nav>
);
};


export default Navbar;
