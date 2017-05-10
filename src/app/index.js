import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component{

	constructor()
	{
		super();
		this.state = {homeLink:"Home"}
	}

	onGreet()
		{
			alert("hello");
		}

	onClickLinkName(newName)
	{
		console.log("I am in new Name  set.");
		console.log(newName);
		this.setState({
			homeLink: newName,
		});
	}
	render()
	{
		
		var user = {name:"salman",hobby:"hello"};
		return (
				<div>
					<h1> <Header homeLink={this.state.homeLink}/></h1>
					<h1> <Home intialLinkName = {this.state.homeLink} changeLink={this.onClickLinkName.bind(this)} name={"shahjahan"} age={20} user={user} greet={this.onGreet}/></h1>
				</div>
			);
	}
}

render(<App/>,window.document.getElementById("app"));