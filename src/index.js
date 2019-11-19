import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/AppHeader';
import ItemStatusFilter from './components/ItemStatusFilter';
import ToDoList from './components/ToDoList';
import SearchPannel from './components/SearchPannel';
import AddFormItem from './components/AddForm';
import './style.css';




export default class App extends Component {
    maxId = 100;
    
    state = {
        toDoData : [
            this.createItem('Go Home'),
            this.createItem('Have a coffe'),
            this.createItem('Create React App'),
                // {label:'Go Home', important: false, id: 1},
                // {label:'Have a coffe', important: false, id: 2},
                // {label:'Create React App', important: true, id: 3}
            ],
        term :'',
        filter: 'all' //all, ative, done
        };

    createItem (label) {
        return {
            label: label,
            important: false,
            done: false,
            id: this.maxId++,

        }
    }

    

    deletItem = (id) => {
        this.setState(( {toDoData} ) => {
            //get index of deleted elem
          const idx = toDoData.findIndex((element) => element.id===id );
          //delet current elem 
          let startArr = toDoData.slice(0, idx); //get all elms before idx
          let endArr = toDoData.slice(idx + 1); //get  all elms after idx
          const newArr = [...startArr, ...endArr]; //join them 
        //change the State return new state with new array
        return {toDoData : newArr}
        }) 
    }

    // createFunction Add {} and change the state
    addItem = (text) => {
        //generate new ID 
        const newItem = this.createItem(text);
        //create {} && add change state;
        this.setState( ({toDoData}) =>{
            const newArr = [...toDoData, newItem];
            // console.log(toDoData);
            return {toDoData: newArr}
        } ) 
    }


    toggleProperty(arr, id, propName){
        const idx = arr.findIndex((element) => element.id === id );
        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] } //создаем новый обьект и присваюем ему свойство done на противоположное старому

        // 2 create new Arr and replace toDoData state
        return [
            ...arr.slice(0, idx),
            newItem, 
            ...arr.slice(idx + 1)
        ];
    }


    onToggleImportant = (id) => {
        this.setState( ({toDoData}) =>{
            return {
                toDoData: this.toggleProperty(toDoData, id, 'important')
            }
        })
        
    }


    onToggleDone = (id) => {
       this.setState( ({toDoData}) =>{

        return {
            toDoData: this.toggleProperty(toDoData, id, 'done')
        }
       })
    }
    
     
    onSearchChange = (term) =>{
        this.setState({term:term})
    }

          
    search(items, term){
        if (term.length === 0){
            return items;
        }


         return items.filter(elem =>{
            return elem.label.toLowerCase()
                            .indexOf(term.toLowerCase()) > -1;
        })
    }


    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items;

            case 'done':
                return items.filter(elem => elem.done);
            
            case 'active':
                return items.filter(elem => !elem.done);

            default:
                return items;
        }
    }


    onFilterChange= (filter) =>{
        this.setState({filter: filter})
    }

    render(){
        const {toDoData, term, filter} = this.state;
        const visibleData = this.filter(this.search(toDoData, term), filter);
        const countDone = toDoData //get num of elements which are done
                                .filter( (elem) => elem.done === true)
                                .length;

        const toDoCount = toDoData.length - countDone;      
        return(
            <div className="todo-app">
            <AppHeader toDo={toDoCount} done={countDone}/>

{/*  */}
            <div className="search-panel d-flex">
                <SearchPannel onSearchChange={this.onSearchChange}/>
                <ItemStatusFilter onFilterChange={this.onFilterChange} filter={filter}/>
            </div>
{/*  */}

            <ToDoList 
            toDo={ visibleData }
            onDelete={ this.deletItem }
            onToggleImportant = {this.onToggleImportant} //sent as props
            onToggleDone = {this.onToggleDone} 
            />

            <AddFormItem addItem = { this.addItem }/>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));


