import React from 'react'
import Logo from "../assets/img/logo/logo.png";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../store/authSlice'

const Header = () => {
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch();
    const history = useHistory();
    const logout = async () => {
        try {
            const res = await axios.post("/logout")
            dispatch(setUser(null));
            history.push("/")
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <header>
            <div className="header-area header-transparrent">
                <div className="headder-top header-sticky">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-2">
                                <div className="logo">
                                    <a href="index.html"><img src={Logo} alt="" /></a>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-9">
                                <div className="menu-wrapper">
                                    <div className="main-menu">
                                        <nav className="d-none d-lg-block">
                                            <ul id="navigation">
                                                <li><a href="index.html">Home</a></li>
                                                <li><a href="job_listing.html">Find a Jobs </a></li>
                                                <li><a href="about.html">About</a></li>
                                                <li><a href="#">Page</a>
                                                    <ul className="submenu">
                                                        <li><a href="blog.html">Blog</a></li>
                                                        <li><a href="single-blog.html">Blog Details</a></li>
                                                        <li><a href="elements.html">Elements</a></li>
                                                        <li><a href="job_details.html">job Details</a></li>
                                                    </ul>
                                                </li>
                                                {/* <li><Link to="/" className="btn head-btn1">I'm a recruter</Link></li> */}
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="header-btn d-none f-right d-lg-block">
                                        {user ? <button className="btn head-btn1" onClick={logout}>logout</button> : <><Link to="/register" className="btn head-btn1">Register</Link>
                                            <Link to="/login" className="btn head-btn2">Login</Link> </>}
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;