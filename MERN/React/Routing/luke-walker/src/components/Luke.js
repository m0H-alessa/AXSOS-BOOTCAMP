import React,{useState} from 'react'
import { useHistory } from "react-router-dom";

const resources = [
    'planets',
    'people',
];
const Luke = props => {
    const [selectedResource, setSelectedResource] = useState(resources[0]);
    const [id, setId] = useState("");
    const history = useHistory();

    const handleSubmit = (e)=>{
        e.preventDefault();
        history.push(`/${selectedResource}/${id}`)
    }
    return (

            <div >
                <form onSubmit={handleSubmit}>
                
                    <label >search for: </label>
                    <select  value={selectedResource} onChange={e => setSelectedResource(e.target.value)}>
                        {resources.map( (r, i) => 
                            <option key={i} value={r}>{r}</option>
                        )}
                    </select>
                    <label>ID: </label>
                    <input type="number" onChange={ (e) => setId(e.target.value) } value={ id } />
                    <button>Search</button>
                </form>
            </div>
    )
}
export default Luke