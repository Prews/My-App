import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductList extends Component {
    static propTypes = {
        productName: PropTypes.string,
        productImage: PropTypes.string,
        price: PropTypes.string
      };

render(){
    const { productName, productImage, price } = this.props;

    return(
            <li className="d-flex flex-column">
              <div>
                <label>{productName}</label>
              </div>
              <div>
                <img src={productImage} alt={productName} width='70px' height='130px'></img>
              </div>
              <div>
                <label>${price}</label>
              </div>
            </li>
    );
  }
}

export default ProductList;
