import React, { Component } from "react";
import ReactDOM from "react-dom";
import List from "./list";

class Main extends Component {
	constructor(props) {
    	super(props);
    }
	render(){
		return (
				<div>
					<h1>Simple redux application</h1>
					<List/>
				</div>
		);
	}
}

export default Main