import React from "react";
import Banner from "../Banner";

function BannerArea() {
    return (
        <div className="col-md-10 offset-md-1" style={{height: "90vh"}}>
            <div className="bannerImg">
                <Banner src="/assets/images/banner_image.png" style={{maxWidth: "70%"}} />
            </div>
            <div className="bannerContent">
                <h2 className="text-uppercase">The APP for all your defi needs</h2>
                <p className="text-wrap">View live charts to get the data that will help you make plan your trading strategies and make the next move. Track your portfolio, see how much you have invested, what is the current price and how much you have made.</p>
            </div>
        </div>
    );
}

export default BannerArea;
