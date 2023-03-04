import { useState } from "react";
import {v4} from 'uuid'

let gh= false
const AddTimerForm = ({name,title,setTim,tim,select,setSelect,setName,setTitle}) => {
const AddTodo = () => {
  if( title ==="" || name===""){
    alert('Veuillez remplir les champs')
  }else {
    setTim([
        ...tim, {
            id:v4(),
            title:title,
            name:name,                        
            edit:true
        }
    ])

    setTitle('')
    setName('')  
    setSelect(false)
}
}

const Chand = () => { 
    setSelect(false)
}

    return(
            <div className="card col-3 text-start mx-auto mt-2">          
                <div className="card-body ">
                    <label>Titre:</label>
                    <input className="form-control" value={title} onChange={(e)=> setTitle(e.target.value)}/>
                    <label>la:</label>
                    <input className="form-control" value={name} onChange={(e)=> setName(e.target.value)}/>
                    <button type="submit" className="btn btn-primary my-2 col-6" onClick={AddTodo}>
                        <span>Create</span>
                        </button>               
                    <button  className="btn btn-danger my-2 col-6 " onClick={Chand}>Cancel</button>               
                </div>           
            </div>
        );
}

export default AddTimerForm;