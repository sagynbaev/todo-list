import React, {Component} from "react";
import './app-add-item.css';

class AppAddItem extends Component {
    constructor() {
    super();
    
    this.state ={
        value: '',
        image: '',
    }

    this.getInputValue = (event) => {
        // console.log(event.target.value);
        this.setState({
            value: event.target.value
        });
    }

    this.getImage = (event) => {
        console.log(event.target.value);
        this.setState({
            image: event.target.value
        });
    }


    this.onSubmit = (event) => {
        event.preventDefault();

        if(!this.state.value == '') {
            console.log();
            this.props.addItem(this.state.value, this.state.image);
            this.setState({
                value: '',
                image: ' ',
            });
        }
        
        else {
            this.setState({
                value: 'please write something',
            });
        }
        
    }

    }
    
    render() {
        return (
        <form className="input-group row g-3 mt-1"
              onSubmit={this.onSubmit}>
            <div className="input-group">
            <input type="text"
                className="form-control" 
                placeholder="write new item" 
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                onChange={this.getInputValue}
                value={this.state.value}/>
            <input className="form-control"
                   type="text" 
                   onChange={this.getImage}
                   value={this.state.image}/>
            <button className="btn btn-outline-secondary" 
                    type="button" 
                    id="button-addon2"
                    onClick={this.onSubmit}>
                Add
            </button>
            </div>
        </form>
    );
    }

    
}

export default AppAddItem;