import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 5-4-1

function Component (){
    return <h1>I am Zack</h1>
}

class ES6Component extends React.Component{
    render(){
        return <h1>I am Zack in ES6</h1>
    }
}


ReactDOM.render(
    <div>
        <Component /> 
        <ES6Component/>
    </div>,
    
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
