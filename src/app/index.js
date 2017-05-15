import React from "react";
import { render } from "react-dom";
import { About } from "./components/About";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Address } from "./components/Address";
import { Login } from "./components/Login";
import { Header } from "./components/Header";


class App extends React.Component{
	render()
	{
		
		return (
				<div>
					<Header/>					
				</div>
			);
	}
}

render(<App/>,window.document.getElementById("app"));