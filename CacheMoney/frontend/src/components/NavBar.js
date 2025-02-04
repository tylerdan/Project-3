import React from "react";

function NavBar(props) {
	// Make sure to add additional cases to MainPageView to handle any routing changes/new links
	return (
		<div className="navigation-bar">
			<span
				className="navigation-link"
				onClick={props.handleClick}
				id="account-overview"
			>
				Accounts
			</span>

			<a href="#">
				<span
					className="navigation-link"
					onClick={props.handleClick}
					id="create-account"
				>
					Create Account
				</span>
			</a>
			<a href="#">
				<span
					className="navigation-link"
					onClick={props.handleClick}
					id="investment-portfolio"
				>
					Investment Portfolio
				</span>
			</a>
			<a href="#">
				<span
					className="navigation-link"
					onClick={props.handleClick}
					id="send-request">
					Transfer Money
				</span>
			</a>
			<a href="#">
				<span
					className="navigation-link"
					onClick={props.handleClick}
					id="request-tab">
					Request Money
				</span>
			</a>
			<div className="settings">
				<a href="#">
					<span
						className="navigation-link"
						onClick={props.handleClick}
						id="settings"
					>
						Settings
					</span>
				</a>
			</div>
		</div>
	);
}
export default NavBar;