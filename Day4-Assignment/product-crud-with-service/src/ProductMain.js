import React from 'react';
import { useState, useEffect } from 'react';
import ProductFormComponent from './ProductForm';
import ProductListComponent from './ProductList';
import { ProductService } from './ProductService';

export default function ProductMainComponent() {
    
    const [products, setProducts] = useState([{}]);
    const [currentProduct, setCurrentProduct] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [reload, setReload] = useState(0);

    useEffect(() => 
    {
        ProductService.getAllProducts().then( (resData) => {          
            console.log(resData.data);   
            setProducts(resData.data);
        });
        console.log("Content Loaded");

    }, [reload]);

    let addProduct_Parent = (product) => {
        ProductService.addProduct(product).then((resData) => {          
            console.log(resData.data);   
            setReload(reload + 1);
        });
    }
    let updateProduct_Parent = (product) => {
        ProductService.updateProduct(product.id, product).then((resData) => {          
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
        ProductService.removeProduct(id).then((resData) => {
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