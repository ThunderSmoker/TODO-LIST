import React from "react";
import * as API from "../API/TodoAPI";
import { DragHandle } from "../partials/DragHandle";
const Singletodo = ({item,provided}) => {
    const [check,setCheck]=React.useState(false);
    const checkTodo=(id)=>{
        setCheck(!check)
        const data={
          "completed":!check
        }
        API.checkTodo(id,data)
        
      }
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ display: "flex" }}>
        <DragHandle {...provided.dragHandleProps} />

        <span
          style={{
            textDecoration: check || item.completed ? "line-through" : "none",
          }}
        >
          <strong>{item.title}</strong>
          <div>

        <span style={{marginLeft:"0.1rem"}}> <a href="{item.link}">{item.link}</a> </span>
        </div>
        </span>
        
      </div>
      <span>
        <input
          type="checkbox"
          onChange={() => checkTodo(item._id)}
          checked={item.completed === true ? true : null}
        />
      </span>
    </div>
  );
};

export default Singletodo;
