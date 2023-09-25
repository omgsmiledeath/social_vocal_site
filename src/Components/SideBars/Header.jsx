import React from "react";
import css from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <div className={css.header}>
            <nav>
                <div><Link to="/about">About</Link></div>
                <div><Link to="/blog">Blog</Link></div>
                <div><Link to="/course">Course</Link></div>
                <div><Link to="/lessons">Lessons</Link></div>
                <div><Link to="/recording">Recording</Link></div>
                <div><Link to="/admin">ADMIN</Link></div>
            </nav>
        </div>
    );
}

export default Header;