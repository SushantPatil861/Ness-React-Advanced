import axios from 'axios';

const baseUrl = `http://localhost:3500/products/`;

export const ProductService = {
    getAllProducts,     
    getProductById,     
    getProductsByCategory,   
    addProduct,
    updateProduct,
    removeProduct    
};

function getAllProducts() {
    return axios.get(baseUrl);
}

function getProductById(id) {
    return axios.get(baseUrl +  id);
} 

function getProductsByCategory(category) {
    return axios.get(baseUrl + '?category='+category);
} 

function addProduct(data) {
    return axios.post(baseUrl, data);
}

function updateProduct(id, data) {    
    return axios.put(baseUrl + id,data);
}

function removeProduct(id) {
    return axios.delete(baseUrl + id);
} 