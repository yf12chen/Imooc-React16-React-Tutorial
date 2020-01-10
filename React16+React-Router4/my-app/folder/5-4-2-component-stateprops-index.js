import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 5-4-2


class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Zack'
        }
    }
    render() {
        setTimeout(() => {
            this.setState(
                {
                    name: 'Zack Test'
                }
            )
        }, 2000)

        return <h1>I am {this.state.name}</h1>
    }
}


ReactDOM.render(
    <div>
        <Component name = 'Rosen' />
    </div>,

    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
