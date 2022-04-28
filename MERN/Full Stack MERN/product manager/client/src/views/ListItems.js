import React, { useEffect, useState } from 'react';
import axios from 'axios';
import List from '../components/List';
export default () => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{setItems(res.data)})
        .catch((err)=>console.log(err));
    },[])

    return (
        <div>
           <List list={items}/>
        </div>
    )
}
