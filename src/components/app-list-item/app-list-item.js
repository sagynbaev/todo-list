import React, {Component} from 'react';

import './app-list-item.css';

class AppListItem extends Component {
    constructor() {
        super();

        this.state = {
            done: false,
            important: false,
        };

        this.onMarkDone = () => {
            this.setState(( {done} ) => {
                return {
                    done: !done,
                }
            });

        };

        this.onMarkImportant = () => {
            this.setState( ( {important} ) => {
                return {
                    important: !important
                }
            });
        }
    }


    render() {

        const {text, deleteItem, image} = this.props;
        const {done, important} = this.state;

        let styleListItem = 'app-list-item d-flex justify-content-between';

        // if(done) {
        //     styleListItem += ' done';
        // }

        styleListItem += done ? ' done' : '';

        // if(important) {
        //     styleListItem += ' important';
        // }
        styleListItem += important ? ' important' : '';

        return (
        <span className={ styleListItem }>
            <span
            className="app-list-text"
            onClick={ this.onMarkDone }>{text} </span>
            <img src={image} />
            <div className="">
                <button type="button" 
                        className="btn btn-outline-success"
                        onClick={ this.onMarkImportant }>
                    <i className="bi bi-exclamation"></i>
                </button>
                <button type="button" 
                className="btn btn-outline-danger"
                onClick={deleteItem}>
                    <i className="bi bi-trash"></i>
                </button>
            </div>
            
        </span>
        
        );
    }
}



export default AppListItem;