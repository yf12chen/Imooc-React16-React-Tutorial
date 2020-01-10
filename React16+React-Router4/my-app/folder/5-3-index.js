import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
// 5-3 基础，样式
let style={
    color: 'r'+'ed'

}

let jsx = <div className="jsx" style={style}>jsx....</div>;

//逻辑处理
let jsx = (
    
    <div>
        {/* 变量使用*/}
        <p>I am {name}</p>

        {/* 条件判断*/} 
        {
            flag? <p>I am {name}</p>: <p>I am not {name}</p>
        }

        {/*数组循环*/}
        {
            names.map(
                (name, index)=><p key={index}>Hello, I am {name}</p>
            )
        }
    </div>
);

ReactDOM.render(jsx, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
