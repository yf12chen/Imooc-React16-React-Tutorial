import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
//import App from './App';
import * as serviceWorker from './serviceWorker';
// 5-4-5 passing between Childs

class Child1 extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

    }

    handleClick() {
        this.props.changeChild2Color('red');
    }


    render() {
        return (
            <div>
                <h1>Child1: {this.props.bgcolor}</h1>
                <button onClick={this.handleClick}>Change Child2 Background Colour</button>
            </div>
        )
    }
}

class Child2 extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            // render props.bgcolor (Child2BgColor from Father)
            <div style={{ background: this.props.bgcolor }}>
                <h1>Child2: {this.props.bgcolor}</h1>
            </div>
        )
    }
}

class Father extends React.Component {
    //super() in constructor is only required if willing to use 'this.props' in the constructor
    constructor(props) {
        super(props);
        this.state = {
            Child2BgColor: 'Blue'
        }
        this.changeChild2Color = this.changeChild2Color.bind(this);
    }

    changeChild2Color(color) {
        this.setState({
            Child2BgColor: color
        })
    }

    render(props) {
        return (
            <div>
                {/* Passing a function reference to Child1 so Child 1 can change the variable in Father by calling "changeChild2Color" */}
                <Child1 changeChild2Color={this.changeChild2Color} />

                {/* Child2BgColor is now changed, pass it to Child2 through "bgcolor" */}
                <Child2 bgcolor={this.state.Child2BgColor} />
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
