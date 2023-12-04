import React, { Component } from "react";

class ProductDetailsComponent extends Component 
{  
    constructor(props) {
        super(props);
        this.state = { 
                    productName: '',
                    productPrice: 0,
                    productQty: 0,
                    totalAmount: 0
                }; 
        this.updateName = this.updateName.bind(this);
        this.updatePrice = this.updatePrice.bind(this);
        this.updateQty = this.updateQty.bind(this);
        this.caluclateTotal = this.caluclateTotal.bind(this);
    }

    updateName = (event) => {
        console.log(event.target.value)
        this.setState({...this.state, productName: event.target.value})
    }
    updatePrice = (event) => {
        console.log(event.target.value)
        this.setState({...this.state, productPrice: event.target.value, 
                totalAmount: this.caluclateTotal(event.target.value, this.state.productQty)})
    }
    updateQty = (event) => {
        console.log(event.target.value)
        this.setState({...this.state, productQty: event.target.value, 
                totalAmount: this.caluclateTotal(this.state.productPrice, event.target.value)})
    }
    caluclateTotal = (price, qty) => {
        if(price == undefined || price == '') {
            price = 0;
        }
        if(qty == undefined || qty == '') {
            qty = 0;
        }
        if(qty > 10) {
            price = price * 0.9;
        }
        return price*qty;
    }
    render() {
        return(
            <>
            <h2>Please enter below details: </h2>
            <div>
                Product Name: <input type = "text" value={this.state.productName} onChange={this.updateName}/><br />
                Unit Price: <input type = "number" value={this.state.productPrice} onChange={this.updatePrice}/><br />
                Quantity: <input type = "number" value={this.state.productQty} onChange={this.updateQty}/><br />
                <br />
            </div>
            <hr />
            <h2>Calculated details: </h2>
            <div >
                <label>Product Name: {this.state.productName}</label><br />
                <label>Total Amount: {this.state.totalAmount}</label>
            </div>
            </>
        )
    }
}
export default ProductDetailsComponent;