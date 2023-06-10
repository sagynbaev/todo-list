import React, {Component} from 'react';
import AppHeader from './../app-header';
import AppSearch from './../app-search';
import AppList from './../app-list';
import AppFilterStatus from '../app-filter-status';
import AppAddItem from '../app-add-item';
import './app.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
    data: [
        {id: 0, text: 'Learn HTML', important: false, image: ''},
        {id: 1, text: 'Learn CSS', important: true, image: ''},
        {id: 2, text: 'Learn Sass', important: false, image: ''},
        {id: 3, text: 'Learn JavaScript', important: true, image: ''},
      ]
    }

     this.deletItem = (id) => {
      this.setState(({data}) => {
        const index = data.findIndex(function(item) {
          return item.id === id
        });
        
        const before = data.slice(0, index);
        const after = data.slice(index + 1);
        const newData = [...before, ...after];
        
        return {
          data: newData
        }
        
      })
    }

    this.addItem = (value, image) => {

      
      

      this.setState(({data}) => {
        const index = data.length + 1;
        const newItem = {id: index, text: value, important: false, image: image};
        const newData = [...data, newItem];
        console.log(newData);

        return {
          data: newData
        }
      })


    }
  }
 

render() {


  return(
    <div className="container">
      <div className="todo">
        <AppHeader />
        <div className="app-search-container d-flex justify-content-between align-items-center mb-3">
          <AppSearch />
          <AppFilterStatus />
        </div>
        <AppList dataList={this.state.data}
                 deleteItem={this.deletItem}/>
        <AppAddItem addItem={this.addItem}/>
      </div>
    </div>
  );
}
   
};

export default App;