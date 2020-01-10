import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 5-4-3 event handler 事件处理

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Zack',
            age: 18
        }
      this.handleClick=this.handleClick.bind(this);
      this.onValueChange=this.onValueChange.bind(this);
    }

    handleClick() {
        console.log('Clicked Add 1');
        
        this.setState({
           age: this.state.age + 1
        })
    }

    onValueChange(event){
        this.setState(
            {
                age: event.target.value
            }
        )
    }

    render() {
        return (
            <div>
                <h1>I am {this.state.name}</h1>
                <p>I am {this.state.age} years old! </p>
                <button onClick={this.handleClick}>Add 1</button>
                <input type="text" onChange={this.onValueChange}></input>
            </div>
        )
    }
}

ReactDOM.render(
    <Component />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
