import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
//import App from './App';
import * as serviceWorker from './serviceWorker';
// 5-4-4 passing between Father and Child

class Child1 extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        this.props.onBgColorChange('red');
    }


    render() {
        return (
            <div>
                <h1>Background colour of father component: {this.props.bgcolor}</h1>
                <button onClick={this.handleClick}>Change Father Background Colour</button>
            </div>
        )
    }
}

class Child2 extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        this.props.onBgColorChange('red');
    }


    render() {
        return (
            <div>
                <h1>Background colour of father component: {this.props.bgcolor}</h1>
                <button onClick={this.handleClick}>Change Father Background Colour</button>
            </div>
        )
    }
}

class Father extends React.Component {
    //super() in constructor is only required if willing to use 'this.props' in the constructor
    constructor(props) {
        super(props);
        this.state = {
            bgcolor: 'Blue'
        }
        this.onBgColorChange=this.onBgColorChange.bind(this);
    }

    onBgColorChange(color) {
        this.setState({
            bgcolor: color
        })
    }

    render(props) {
        return (
            <div style={{ background: this.state.bgcolor }}>
                <Child1 bgcolor={this.state.bgcolor} onBgColorChange={this.onBgColorChange} />
            </div>
        )
    }
}

ReactDOM.render(
    <Father />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
