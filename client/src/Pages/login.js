import React, { Component, Fragment } from 'react'



export default class Login extends Component {
    render() {
        return (
            <div>
            <LoginForm/>
                
            </div>
        )
    }
}


function LoginForm(){
    return(
        <Fragment>
            <form method="post" >

            <input type="text" className="form-control"/>


            </form>
        </Fragment>
    )
}
