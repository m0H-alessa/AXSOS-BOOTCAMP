import React, { useState } from 'react'

const ToDoList = () => {
    const [toDo, setToDo] = useState("");
    const [list, setList] = useState([]);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setList([...list, {toDo, isDone:false}])
        setToDo("");
    }
    const handleCheck = (e, i)=>{
        const newList = [...list]
        newList[i].isDone = e.target.checked
        setList(newList);
    }
    const handleDelete = (e, i) => {
        const filteredList = list.filter(item => list.indexOf(item) !== i);
        setList(filteredList);
    }

    return (
        <div>
            <form className='form' onSubmit={handleSubmit}>
                <label>To do: </label> 
                <input type="text" onChange={ (e) => setToDo(e.target.value) } value={ toDo } />
                <input type="submit" value="Add" className='add'/>
            </form>
            <div>
                {list.map((item, i)=><p key={i} style = {item.isDone ? {textDecorationLine: 'line-through'}:null}>
                            {item.toDo} 
                            <span>
                                <input type="checkbox" checked={item.isDone} onChange={(e) => {handleCheck(e, i);}}/>
                                <button onClick={(e)=>handleDelete(e, i)}>Delete</button></span>
                            </p>)}
            </div>
        </div>
    )
}

export default ToDoList