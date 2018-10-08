import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShopCart extends Component {
  static propTypes = {
    productName: PropTypes.string
  };

    render(){
      const { productName } = this.props;
        return(
            <li className="d-flex flex-column">
            <div>
              <label>{productName}</label>
            </div>
          </li>
        );
    }
}

export default ShopCart;
