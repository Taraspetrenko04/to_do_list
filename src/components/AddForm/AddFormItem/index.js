import React, {Component} from 'react';
import './style.css';


export default class AddFormItem extends Component{
    state = {
        label: ""
    }


    onLabelChange = (event) =>{
        // console.log(event.target.value)
        this.setState({
            label: event.target.value
        })
    }


    onSubmit = (event)=>{
        event.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
            label: ''
        })
    }
   
    render(){
        // const {addItem} = this.props;
      

        return(
            <form 
            className="add-form-item d-flex"
            onSubmit={this.onSubmit}>
                <input 
                className="form-control" 
                type="text" 
                placeholder="what needs to do?"
                onChange={this.onLabelChange}
                value={this.state.label}>
                </input>
                <button 
                className="btn btn-outline-secondary" 
                type="submit">Add Item</button>
            </form>
        )
    }
}