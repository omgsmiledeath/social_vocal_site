import React from "react";

const Header = (props) => {
    return(
            <div>
                <div>
                <span><a href="\about">About</a></span>
                </div>
                <div>
                <span><a href="\blog">Blog</a></span>
                </div>
                <div>
                <span><a href="\course">Course</a></span>
                </div>
                <div>
                <span><a href="\lessons">Lessons</a></span>
                </div>
                <div>
                <span><a href="\recording">Recording</a></span>
                </div>
            </div>
    );
}

export default Header;