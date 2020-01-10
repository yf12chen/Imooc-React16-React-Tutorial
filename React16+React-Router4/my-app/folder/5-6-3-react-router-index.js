import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
//import App from './App';
import * as serviceWorker from './serviceWorker';
// 5-6-2 react router
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


class A extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                Component A
                <br />

                <Switch>
                    <Route exact path={`${this.props.match.path}`}
                        render={(route) => {
                            return <div>Component without Parameter</div>
                        }} />
                    <Route exact path={`${this.props.match.path}/:id`}
                        render={(route) => {
                            return <div>Component with Parameter: {route.match.params.id} </div>
                        }} />

                </Switch>

            </div>
        )
    }
}

class B extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div>Component B</div>
    }
}

class Wrapper extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Link to="/a">A</Link>
                <br />
                <Link to="/a/123">A with parameters</Link>
                <br />
                <Link to="/b">B</Link>

                {this.props.children}
            </div>
        )
    }
}
ReactDOM.render(
    <Router>
        <Wrapper>
            <Route path="/a" component={A}></Route>
            
            <Route path="/b" component={B}></Route>
        </Wrapper>


    </Router>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
