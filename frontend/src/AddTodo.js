import React, { useState } from "react";
import "./addtodo.css";
import * as API from "./API/TodoAPI";
import { useNavigate } from "react-router-dom";
const AddTodo = () => {
    const navigate=useNavigate()
    const [title,setTitle]=useState('');
    const [link,setLink]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data={
            title,
            link
        }
        try{

            API.addTodo(data).then((res)=>{
                alert("Added Succesfully!!")
                navigate('/')
            })
        }catch(err){
            console.log(err);
        }

    }
  return (
    // <InputStyle>
    <div>

      <form>
        <h2 style={{ marginLeft: "6rem" }}>Add Item in Todo</h2>
        <input name="title" placeholder="Title" required onChange={(e)=>setTitle(e.target.value)} className="inputfield"/>
        <input name="link" type="email" placeholder="link" onChange={(e)=>setLink(e.target.value)} className="inputfield"/>
        <button type="submit" className="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>

  );
};

export default AddTodo;
