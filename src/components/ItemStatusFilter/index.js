import React, {Component} from 'react';


export default class ItemStatusFilter extends Component{


  render(){
    return(
      <div className="btn-group">
        <button className="btn btn-info" type="button">All</button>
        <button className="btn btn-outline-secondary" type="button">Active</button>
        <button className="btn btn-outline-secondary" type="button">Done</button>
      </div>
    )
  }
}

// const filterButtons = [
//   { name: 'all', label: 'All' },
//   { name: 'active', label: 'Active' },
//   { name: 'done', label: 'Done' }
// ];

// const ItemStatusFilter = ({filter, onFilterChange = () => {}}) => {

//   const buttons = filterButtons.map(({name, label}) => {
//     const isActive = name === filter;
//     const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');

//     return (
//       <button key={name}
//               type="button"
//               onClick={() => onFilterChange(name)}
//               className={classNames}>{label}</button>
//     );
//   });

//   return (
//     <div className="btn-group">
//       { buttons }
//     </div>
//   );
// };

// export default ItemStatusFilter;