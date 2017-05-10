import React from "react";
import { render } from "react-dom";



export class Home extends React.Component
{
	constructor(props)
	{
		console.log(props);
		super();
		this.state={
			age : props.age,
			status : 0,
			homeLink:"Initial"
		};
	}

	onClickHomeLink()
	{	
		console.log("I am in onClickHomeLink");
		console.log(this.state.homeLink);
		this.props.changeLink(this.state.homeLink)
	}

	onHandleChange(event)
	{
		this.props.changeLink(event.target.value)
		// this.setState({
		// 	homeLink: event.target.value
		// });
	}

	makeMeOlder()
	{
		this.setState({
			age: this.state.age + 3
		});
	}
	render()
	{	
		return(
		<div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-offset-2 col-md-8">
						Your name is: {this.props.user.name}. Your age is {this.state.age}
						<br/>
						<div onClick={this.makeMeOlder.bind(this)} className="btn btn-success">Make me older</div>
						<br/>
						<div onClick={this.props.greet} className="btn btn-success">click </div>
						<br/>
						<div onClick={this.onClickHomeLink.bind(this)} className="btn btn-success">ChangeLink </div>
					
						<br/>

						<input type="text" name="" id="input" class="form-control" onChange={(event)=>this.onHandleChange(event)}/>
						
						<div onClick={this.onClickHomeLink.bind(this)} className="btn btn-success">Change to link </div>
					</div>
				</div>
			</div>
		</div>
			);


	}
}

Home.propTypes = {
	greet: React.PropTypes.func
}