import React, { Component } from 'react';
import './App.css';
import ProductList from './Components/ProductList';
import ShopCart from './Components/ShopCart';

const productDetails = require('./data/data.json');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      publishData: null,
      loadData: true,
      shoppingCart: []
    }
  }
  handleData = () => {
    const publishedData = []
    productDetails.map((products)=>{
      if(products.isPublished === 'true'){
        publishedData.push(products)
      }
    });
  console.log(publishedData);
    this.setState({publishData: publishedData, loadData: false});
  }
  addToCart = (data) => {
    const shoppingCart =this.state.shoppingCart;
   const publishData = this.state.publishData;
    const cartData =productDetails.find((pro)=> pro.id === data );
    shoppingCart.push(cartData);
    this.setState({shoppingCart: shoppingCart, publishData:publishData.filter((el)=> { return el.id != cartData.id; }) });
  }
  removeItem = (data) => {
    const publishData = this.state.publishData;
    const shoppingCart = this.state.shoppingCart;
    const cartData =shoppingCart.find((pro)=> pro.id === data.id );
    publishData.push(data);
    // shoppingCart.pop(cartData);
    const index = shoppingCart.findIndex(x => x.id=== cartData.id);
    // console.log('asdfasdfasd',index);
    shoppingCart.splice(index,1);
    this.setState({publishData: publishData, shoppingCart: shoppingCart});
  }
  render() {
   
    if(productDetails && this.state.loadData){     
      this.handleData()
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Products Cart</h1>
        </header>
        <div className="row">
          <div className="col-8 Product-header">
            <h4>Product list</h4>
            <ul className="d-flex column">
              {this.state.publishData ? this.state.publishData.map((productDetails, index)=>(
                <div key={index} className="Product-list">
                  <ProductList
                    productName={productDetails.productName}
                    productImage={productDetails.productImage}
                    price={productDetails.price}
                  />
                  <button className="Button-style" onClick={() => {this.addToCart(productDetails.id)}}>addToCart</button>
                  </div>
              ))
              : ''}
            </ul> 
          </div>
          <div className="col-4 Cart-header">
            <h4>Shopping Cart</h4>
            <ul className="d-flex column">
              {this.state.shoppingCart ? this.state.shoppingCart.map((productDetails, index)=>(
                <div key={index} className="Cart-list">
                 <ShopCart
                 productName = {productDetails.productName}
                 />
                <button className="Button-style Cart-button" onClick={() => {this.removeItem(productDetails)}}>Remove</button>
                 </div>
              ))
              : ''}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
