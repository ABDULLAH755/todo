import React, {Component} from 'react';

const Todo = props => {
    return(
        <li>{props.todoelement} <button id="btn" onClick={props.delete}>x</button></li>
    );
}



export default Todo;