import React from "react";
import { BsTwitter, BsFillCursorFill } from "react-icons/bs";
import "./style.scss";

function CommonFooter() {
    return (
        <footer className="page-footer font-small">
            <div className="container" style={{maxWidth: "100%", margin:"0"}}>
                <div className="row py-4 d-flex align-items-center">
                    <div className="col-md-12 text-center text-md-left mb-4 mb-md-0 footerLinks">
                        <a>Contact Us</a>
                        <a>Advertise with us</a>
                        <a>Disclaimer</a>
                        <a>Privacy {"&"} Policy</a>
                        <a>Terms {"&"} Conditions</a>
                        <a className="float-end" style={{marginRight: "20px",fontSize: "18px"}}><BsFillCursorFill /></a>
                        <a className="float-end" style={{marginRight: "20px",fontSize: "18px"}}><BsTwitter /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default CommonFooter;
