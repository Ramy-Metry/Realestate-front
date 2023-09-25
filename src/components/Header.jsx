import React from "react"
import {Link} from "react-router-dom"
import logo from "../assets/img/logo.png"

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <div className="d-flex align-items-center">
                            <img src={logo} alt="logo" style={{ width: "200px" }} />
                           
                            </div>
                        </Link>
                        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/whitehouse/">الصفحه الرئيسيه</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link  className="nav-link" to="/blog">Blog</Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link  className="nav-link" to="/whitehouse/about">من نحن</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="#">Category <i className="fas fa-chevron-down"></i></Link>
                                    <ul className="sub-ul">
                                        <li><Link to="#">item</Link></li>
                                        <li><Link to="#">item</Link></li>
                                        <li><Link to="#">item</Link></li>
                                    </ul>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/whitehouse/contact">اتصل بنا</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;