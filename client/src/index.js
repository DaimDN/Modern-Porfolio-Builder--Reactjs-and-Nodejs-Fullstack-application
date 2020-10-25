import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import Routing from './components/Routing'

function Home() {
    return (
        <Fragment>
            <Routing/>
        </Fragment>
    )
}

const selector = document.getElementById('root');

ReactDOM.render(<Home/>, selector);