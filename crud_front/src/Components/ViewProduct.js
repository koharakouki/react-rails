import React, { Component } from 'react';

class ViewProduct extends Component {
	render(){
		return(
			<div>
			  <span>{ this.props.data.product }</span>
			</div>
		)
	}
}

export default ViewProduct