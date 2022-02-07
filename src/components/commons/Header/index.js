import React, { useState } from "react";
import  { useHistory } from 'react-router-dom';
import { BsSearch, BsChevronExpand } from "react-icons/bs";
import "./style.css";

function CommonHeader() {
	let history = useHistory();

	const [selectedCoin, setSelectedCoin] = useState("BSC")
	const [searchInput, setSearchInput] = useState("")

	const updateSelect = (coin) => {
		setSelectedCoin(coin);
	};
	const handleChange = (e) => {
		setSearchInput(e.target.value)
	};
	const searchCoin = (e) => {
		e.preventDefault();
		if (searchInput) {
			console.log(searchInput)
			history.push(`/chart/${selectedCoin}/${searchInput}`);
		}
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-custom commonHeader">
			<div className="container-fluid">
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<a className="navbar-brand" href="/">
					LOGO
				</a>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link" href="#">
								Dashboard
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Trade
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Charts
							</a>
						</li>
					</ul>
					<form className="d-flex" onSubmit={searchCoin}>
						<div className="dropdown">

							<button className="btn btn-primary dropdown-btn" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<img className='img-fluid' src="/assets/images/bsc_logo.png" style={{maxWidth: "15%", marginRight:"6px"}} />	{selectedCoin} <BsChevronExpand />
							</button>
							<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<a className="dropdown-item" onClick={() => updateSelect("BSC")}>BSC</a>
								<a className="dropdown-item" onClick={() => updateSelect("ETH")}>ETH</a>
							</div>
						</div>
						<div className="form">
							<input
								className="form-control form-input"
								type="search"
								placeholder="Enter Conttract Address"
								aria-label="Search"
								value={searchInput}
								onChange={handleChange}
							/>
							<BsSearch onClick={searchCoin} />
						</div>

						<button
							className="btn btn-primary"
							type="submit"
							onClick={searchCoin}
						>
							Connect Wallet
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
}

export default CommonHeader;
