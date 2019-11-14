import React from 'react';
import ToDoListItem  from './ToDoListItem/index.js'
import './style.css'

const ToDoList = ( { toDo, onDelete } ) => {


    const list = toDo.map(item =>{ 
        const {id, ...itemProps} = item;
        
    return ( 
    <li key={id} className="list-group-item">
        {/* <ToDoListItem label={item.label} important={item.important}/> */}
        <ToDoListItem {...itemProps}
        onDelete={() =>onDelete(id)}/>
    </li>
    )})


    return(
        <ul className="list-group todo-list">
            {list}
            {/* <li><ToDoListItem text="Go Home"/></li>
            <li><ToDoListItem text="CreateReactApp" important/></li> */}
        </ul>
    )
}

export default ToDoList;