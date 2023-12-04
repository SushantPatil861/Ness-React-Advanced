import React, { useState } from 'react';
import axios from 'axios';

function EmployeeDetailsComponent() {

    const [empArray, setEmpArray] = useState([]);

    function getData() {
        let url = "https://dummy.restapiexample.com/api/v1/employees";
        axios.get(url).then(resData => {
            //  console.log(resData.data.data);
            setEmpArray(resData.data.data);
        });
    }
    

    var empDetails  =  empArray.map( (item, index) =>  
        <div key={item.id} style={{border: '1px solid grey', borderRadius: '5px', backgroundColor: 'whitesmoke', margin: '10px', width: '15%', padding:'10px'}}>
            {item.employee_name} <br />
            CTC: {item.employee_salary} <br />
            Age: {item.employee_age}
        </div> ); 

    return(
        <>
        <input type="button" value="Get Data" onClick={getData} />
        <hr />
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {empDetails}
        </div>
        </>
    )
}

export default EmployeeDetailsComponent;