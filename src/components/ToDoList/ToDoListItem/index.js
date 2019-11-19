import React, {Component} from 'react';
import './style.css';


export default class TodoListItem extends Component{
  // constructor() {
  //   super();

  //   this.state = { //в состояние(state) сохранили класс "done"
  //      done: false,
  //      important: false
  //   }

  //   // console.log(this.state.done)

  //   // this.onLabelClick = () => {//function
  //   //   // console.log(`Clicked ${this.props.label} ${done}`);
  //   //   this.setState(({done}) => {
  //   //     return{
  //   //       done: !done //возвр НЕ текущий стейт дан
  //   //     }
  //   //   })
  //   // }

  //   // this.onMarcImportant = () =>{
  //   //   this.setState(({important}) => {
  //   //     return {
  //   //       important: !important //возвр НЕ текущий стейт импрортант
  //   //     }
  //   //   })
  //   // }
  // }


  //Можно и так добавлять ф-цию без конструктора
  // onLabelClick = () => {
  //   console.log(`Clicked ${this.props.label}`)
  // }


  render(){
    const { label, onToggleImportant, onToggleDone, onDelete, important, done} = this.props;
      


    // const { done, important } = this.state; //деструктурировали, достали done:false 
    // console.log(` ${done}`); // используем его в 

      let classNames = 'todo-list-item' //собираем все классы в переменную classNames
      if (done){
        classNames += ' done'
      }
      if (important){
        classNames += ' important';
      }
       

    return (
      <span  className={classNames}>
        <span className='todo-list-item-label'
          onClick={onToggleDone}
          >{label}</span>


        <button type="button"
                className="btn btn-outline-success btn-sm float-right"
                onClick={onToggleImportant}>
          <i className="fa fa-exclamation"></i>
        </button>
        

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right"
                onClick={onDelete}>
          <i className="fa fa-trash-o"></i>
        </button>
      </span>
    );
  }
}
