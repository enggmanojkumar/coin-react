import React, { Fragment, useState } from "react";
import { AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import './index.css';

function Sidebar(props) {
    const [sideBarOpen, setSideBarOpen] = useState(false)
    const toggleSidebar = () => {
        setSideBarOpen(!sideBarOpen)
    }
    return (
        <div className="container-fluid">
            <div className="parent">
                <div className={sideBarOpen ? "sidebar" : "sidebar collapsed"}>
                    <h4 onClick={toggleSidebar}>{sideBarOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}</h4>
                    <h4 style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                        <AiOutlineHome />
                        <span style={{ paddingLeft: "20px" }}>Home</span>
                    </h4>
                </div>
                <div className="main">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;