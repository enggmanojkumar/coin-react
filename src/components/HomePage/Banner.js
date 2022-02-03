import React from "react";
import Banner from "../Banner";

function BannerArea() {
    return (
        <div className="col-md-10 offset-md-1" style={{height: "50vh"}}>
            <div className="bannerImg">
                <Banner src="/assets/images/banner_image.png" style={{maxWidth: "70%"}} />
            </div>
            <div className="bannerContent">
                <h2 className="text-uppercase">The APP for all your defi needs</h2>
                <p className="text-wrap">View live chart for uniswap, pancakeswap and many more exchanges, set price alerts and track your portfolio. Track all the Descentralized exchange tokens from from pancakeswap, Uniswap in your wallet. see how much you haveinvested, what is the current price and how much is your profits. Even set alerts to buy ans sell.</p>
            </div>
        </div>
    );
}

export default BannerArea;
