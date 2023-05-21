import React from "react";

function TodoItem(props){

    return (
        <div onClick={()=>{
            props.onCheck(props.id)
        }}>
            <li>{props.item}</li>
        </div>
    )
}

export default TodoItem;