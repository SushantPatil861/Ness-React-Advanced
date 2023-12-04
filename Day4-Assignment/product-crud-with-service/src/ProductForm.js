import React, {useState, useEffect} from 'react';

export default function ProductFormComponent(props) {
    
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('0');
    const [unitprice, setUnitprice] = useState('0');
    const [reset, setReset] = useState(0);

    useEffect(() => {
        console.log("props:"+JSON.stringify(props))
        setName(props?props.name?props.name:'':'');
        setCategory(props?props.category?props.category:'':'');
        setQuantity(props?props.quantity?props.quantity:'0':'0');
        setUnitprice(props?props.unitprice?props.unitprice:'0':'0');
    }, [props])

    let productUpdateHandler = () => {
        if(!isAnyEmpty()) {
            props.updateProduct({
                id: props.id,
                name: name,
                category: category,
                quantity: quantity,
                unitprice: unitprice
            })
        }
    }

    let productAddHandler = () => {
        if(!isAnyEmpty()) {

            props.addProduct({
                name: name,
                category: category,
                quantity: quantity,
                unitprice: unitprice
            })
        }
    }

    function editMode() {
        if(!(isAllEmpty()) && props.editMode === true) {
            return true;
        }
        return false;
    }

    function isAllEmpty() {
        return (name === '' || name === undefined) && (quantity === '' || quantity === undefined) && (unitprice === '' || unitprice === undefined) && (category === '' || category === undefined);
    }

    function isAnyEmpty() {
        return (name === '' || name === undefined) || (quantity === '' || quantity === undefined) || (unitprice === '' || unitprice === undefined) || (category === '' || category === undefined);
    }
    return (
        <>
            <fieldset>
                <legend>Product Form</legend>
                <div>
                <span>Name: <input type='text' id='productName' value={name} onChange={(event) => {setName(event.target.value)}}/></span>
                
                <span style={{marginLeft: '20px'}}>Category: <input type='text' id='productCategory' value={category} onChange={(event) => {setCategory(event.target.value)}}/></span>
                <br />
                <span>Quantity: <input type='number' id='productQuantity' value={quantity} onChange={(event) => {setQuantity(event.target.value)}}/></span>
                
                <span style={{marginLeft: '20px'}}>Unitprice: <input type='number' id='productUnitprice' value={unitprice} onChange={(event) => {setUnitprice(event.target.value)}}/></span>
                <br />
                <br />
                {editMode() === true?<button onClick={productUpdateHandler}>Update Product</button>:<button onClick={productAddHandler}>Add Product</button>}
                </div>
            </fieldset>
        </>
    )
}