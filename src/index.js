import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/AppHeader';
import ItemStatusFilter from './components/ItemStatusFilter';
import ToDoList from './components/ToDoList';
import SearchPannel from './components/SearchPannel';
import './style.css';




const App = () => {
    const toDoData = [
        {label:'Go Home', important: false, id: 1},
        {label:'Have a coffe', important: false, id: 2},
        {label:'Create React App', important: true, id: 3}
    ]

    
    return(
        <div className="todo-app">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPannel />
                <ItemStatusFilter />
            </div>
            <ToDoList 
            toDo={toDoData}
            onDelete={(id)=>console.log('id: ' + id)} />
        </div>
    );
};


ReactDOM.render(<App />, document.getElementById('root'));


