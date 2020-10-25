import React from 'react'
import ReactDOM from 'react-dom';

 function Index() {
    return (
        <div>
            <h1>Welcome</h1>
        </div>
    )
}

const Selector = document.getElementById('app');
ReactDOM.render(<Index/>, Selector);