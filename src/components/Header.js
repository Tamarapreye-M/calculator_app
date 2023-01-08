import React from "react";

const Header = () => {
	return (
		<header>
			<h1>calc</h1>
			<div className="themes">
				<p>THEME</p>
				<div className="theme-lists">
					<div>
						<span>1</span>
						<span>2</span>
						<span>3</span>
					</div>
					<div className="control-box">
						<div className="control-ball"></div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
