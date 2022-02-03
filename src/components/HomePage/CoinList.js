import React from "react";
import { BsFillQuestionCircleFill, BsFillDiscFill, BsChevronDoubleUp, BsChevronDoubleDown } from "react-icons/bs";

function CoinList() {
    return (
        <div className="row coinList">
            <div className="col-md-2">
                <span className="text-uppercase" style={{letterSpacing: ".5px", marginRight: "12px", fontSize: "13px"}}>Hot Pairs</span>
                <BsFillDiscFill style={{marginRight: "12px"}} />
                <BsFillQuestionCircleFill />
            </div>
            <div className="col-md-10">
            <div className="d-flex justify-content-end">
                <div className="coin fw-bold">
                    <span style={{color: "#C4B855"}}>#1</span>
                    <BsChevronDoubleUp style={{color: "green"}} />
                    <span className="coin-item">FLOKI</span>
                    <BsFillDiscFill />
                </div>
                <div className="coin">
                    <span>#2</span>
                    <BsChevronDoubleDown style={{color: "red"}} />
                    <span className="coin-item">STARL</span>
                    <BsFillDiscFill />
                </div>
                <div className="coin">
                    <span>#3</span>
                    <span className="coin-item">Tech</span>
                    <BsFillDiscFill />
                </div>
                <div className="coin">
                    <span>#4</span>
                    <span className="coin-item">UFO</span>
                    <BsFillDiscFill />
                </div>
                <div className="coin">
                    <span>#5</span>
                    <span className="coin-item">DEXT</span>
                    <BsFillDiscFill />
                </div>
                <div className="coin">
                    <span>#6</span>
                    <BsChevronDoubleUp style={{color: "green"}} />
                    <span className="coin-item">DXO</span>
                    <BsFillDiscFill />
                </div>
                <div className="coin">
                    <span>#7</span>
                    <BsChevronDoubleUp style={{color: "green"}} />
                    <span className="coin-item">TRU</span>
                    <BsFillDiscFill />
                </div>
                <div className="coin">
                    <span>#8</span>
                    <BsChevronDoubleDown style={{color: "red"}} />
                    <span className="coin-item">BORED</span>
                    <BsFillDiscFill />
                </div>
                <div className="coin">
                    <span>#9</span>
                    <BsChevronDoubleUp style={{color: "green"}} />
                    <span className="coin-item">F9</span>
                    <BsFillDiscFill />
                </div>
                <div className="coin">
                    <span>#10</span>
                    <BsChevronDoubleDown style={{color: "red"}} />
                    <span className="coin-item">NFD</span>
                    <BsFillDiscFill />
                </div>
                </div>
            </div>
        </div>
    );
}

export default CoinList;