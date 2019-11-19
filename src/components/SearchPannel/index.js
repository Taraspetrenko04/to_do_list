import React, {Component} from 'react';
import './style.css'

export default class SearchPanel extends Component {

    state = {
      term: ''
    };
  

    onSearchChange = (event) => {
      const term = event.target.value; //get curr input value 
      this.setState({term: term}) //change state on curr valur
      this.props.onSearchChange(term); //send term to func in App
    } 
  
    // onTermChange = (e) => {
    //   const {onSearchChange = () => {}} = this.props;
    //   this.setState({
    //     term: e.target.value
    //   });
      
    // onSearchChange(e.target.value);
    // };
  
    render() {
      return (
        <input type="text"
               className="form-control search-input"
               placeholder="type to search"
               value={this.state.term}//make component managed;
              onChange={this.onSearchChange} 
              />
      );
    };
  }