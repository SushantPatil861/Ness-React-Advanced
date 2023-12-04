import React from 'react';
import { useState, useEffect } from 'react';
import ProductFormComponent from './ProductForm';
import ProductListComponent from './ProductList';
import axios from 'axios';

export default function ProductMainComponent() {
    
    const baseUrl = `http://localhost:3500/products/`;
    const [products, setProducts] = useState([{}]);
    const [currentProduct, setCurrentProduct] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [reload, setReload] = useState(0);

    useEffect(() => 
    {
        axios.get(baseUrl).then( (resData) => {          
            console.log(resData.data);   
            setProducts(resData.data);
        });
        console.log("Content Loaded");

    }, [reload]);

    let addProduct_Parent = (product) => {
        axios.post(baseUrl, product).then((resData) => {          
            console.log(resData.data);   
            setReload(reload + 1);
        });
    }
    let updateProduct_Parent = (product) => {
        axios.put(baseUrl + product.id,product).then((resData) => {          
            console.log(resData.data); 
            setEditMode(false);  
            setCurrentProduct({});
            setReload(reload + 1);
        });
    }
    let editProduct_Parent = (id) => {
        setEditMode(true);
        setCurrentProduct(products.find((product)=>product.id === id));
    }

    let removeProduct_Parent = (id) => {
        axios.delete(baseUrl + id).then((resData) => {
            console.log(resData.data); 
            setReload(reload + 1);
        })
    }

    return (
        <>
            <ProductFormComponent {...currentProduct} editMode = {editMode} updateProduct = {updateProduct_Parent} addProduct = {addProduct_Parent}/>
            <ProductListComponent products={products} editProduct = {editProduct_Parent} removeProduct = {removeProduct_Parent}/>
        </>
    )
}