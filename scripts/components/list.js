import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import Lists from "./../reducers";
import { displayList } from "./../actions";

class List extends Component {
	constructor(props) {
    	super(props);
    	this.state= {showHide : false};
    }
    _showHideList(){
    	if (this.state.showHide){
    		this.setState({showHide : false});
    	} else {
    		this.setState({showHide : true});
    	}
    	this.props.displayList();
    }
	render(){
		let showHideText  = "";

		let ListItems = this.props.List.map((element,index) =>{
			return (
				<li key={index}> {element}</li>
			);
		});

		if(this.state.showHide){
			showHideText = "Hide List";
		} else {
			showHideText = "Show List";
		}
		return (
			<div>
				<button onClick={this._showHideList.bind(this)}>{showHideText}</button>
			    {this.state.showHide && 
			    	<div>
				    	<h3>Item List</h3>
					    <ul>
					    	{ListItems}
					    </ul>
				    </div>
				}
			 </div>
		);
	}
}

function mapStateToProps(state){
	return  {
		List : state.Lists
	}
}

function mapDispatchToProps(dispatch){
	const actions = {displayList};
	return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List)