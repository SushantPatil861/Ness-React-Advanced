import React from 'react';

export default function ProductListComponent(props) {

    let editProduct = (id) => {
        props.editProduct(id)
    }
    let removeProduct = (id) => {
        props.removeProduct(id)

    }

    let productList = props.products.map(product => {
        return (<tr key = {product.id}>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.unitprice}</td>
            <td>{product.quantity}</td>
            <td><button onClick={()=>editProduct(product.id)}>Edit</button></td>
            <td><button onClick={()=>removeProduct(product.id)}>Delete</button></td>
        </tr>)
    });

    return (
        <>
        <div style={{marginTop: '20px'}}>
        <table border={1}>
            <tbody>
                <tr>  
                    <th style={{width: '15rem'}}>Name</th>
                    <th style={{width: '10rem'}}>Category</th>
                    <th style={{width: '10rem'}}>Unitprice</th>
                    <th style={{width: '10rem'}}>Quantity</th>
                    <th style={{width: '10rem'}} colSpan={2}>Action</th>
                </tr>
                {productList}
            </tbody>
        </table>
        </div>
        </>
    )
}