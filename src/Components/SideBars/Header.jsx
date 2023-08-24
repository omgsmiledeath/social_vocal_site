import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
    return(
            <div>
                <nav>
                    <div><Link to="/about">About</Link></div>
                    <div><Link to="/blog">Blog</Link></div>
                    <div><Link to="/course">Course</Link></div>
                    <div><Link to="/lessons">Lessons</Link></div>
                    <div><Link to="/recording">Recording</Link></div>
                
                
                
                
               
                
                </nav>
            </div>
    );
}

export default Header;