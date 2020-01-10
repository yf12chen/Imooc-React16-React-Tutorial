import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
//import App from './App';
import * as serviceWorker from './serviceWorker';
// 5-5 React Component Life Cycle

class Component extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: 'Old State'
        }
        console.log('here is to initiate data', 'Component constructor');
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        console.log('Component componentWillMount');
    }

    componentDidMount() {
        console.log('Component componentDidMount');
    }





    //triggers when receives props from Father
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps');
    }

    //decides if Child component should be updated
    //Normally components refresh when data changes
    //However component doesnt refresh if returned false
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate');
        //Always returns a boolean, returns true by default
        return true;
    }

    //Component will be updated
    //This performs when 'shouldComponentUpdate()' returns true
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }

    //Component finished update
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    //component will be deleted
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    handleClick() {
        console.log('here is to update the data')
        this.setState({
            data: 'New State'
        })
    }

    render() {
        console.log('Component render');
        return (
            <div>
                <div>Props:{this.props.data }</div>
                <button onClick={this.handleClick}>Renew Component</button>
            </div>

        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: 'Old Props',
            hasChild: true
        }
        console.log('here is to initiate data', 'App constructor');
        this.onPropsChange=this.onPropsChange.bind(this);
        this.onDestroyChild=this.onDestroyChild.bind(this);
    }


    onPropsChange(){
        console.log('on props change:')
        this.setState({
            data: 'New Props'
        })
    }

    onDestroyChild(){
        console.log('Deleting Child Component:');
        this.setState({
            hasChild: false
        });
    }
    
    render() {
        console.log('App render');
        return (
        <div>
            {
                this.state.hasChild? <Component data={this.state.data}/>:null  
            }
            <button onClick={this.onPropsChange}>change props</button>
            <button onClick={this.onDestroyChild}>DELETE Child Component</button>
        </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
