import React, { Component } from 'react';
import ViewProduct from './ViewProduct';

class ProductsContainer extends Component {
	render(){
		return(
			<div className='productList'>
			  {this.props.productData.map((data)=>{
			  	return(
			  		<ViewProduct data={ data } key={ data.id } />
			  	)
			  })}
			</div>
		)
	}
}

export default ProductsContainer