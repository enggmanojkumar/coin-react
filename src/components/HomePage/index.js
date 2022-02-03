import Sidebar from "../Sidebar";
import CommonHeader from "../commons/Header";
import CommonFooter from "../commons/Footer";
import "./style.scss";
import BannerArea from "./Banner";
import BodyArea from "./BodyArea";
import CoinList from "./CoinList";

function HomePage() {
    return (
      <div className="">
        <Sidebar>
            <CommonHeader />
        </Sidebar>

        <CoinList />

        <BannerArea />

        <BodyArea />

        <CommonFooter />
      </div >
    );
}

export default HomePage;
