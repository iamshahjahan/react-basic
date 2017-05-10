import React from "react";
import { render } from "react-dom";


export const Header = (props) =>
{
	return(
		<nav className="navbar navbar-default" role="navigation">
		<h1>{props.homeLink}</h1>
		</nav>
		);
}