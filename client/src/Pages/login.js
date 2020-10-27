import React, { Component, Fragment } from 'react'
import axios from 'axios';
import { red } from 'chalk';
import { Redirect } from 'react-router-dom';


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            response : [],
            redirect : false

        }
        this.LoginHandler = this.LoginHandler.bind(this);
        this.renderRedirect = this.renderRedirect.bind(this);
   
    }


    LoginHandler(event){
        
        var email = this.email.value;
        var password = this.password.value;
        var url = 'http://localhost:5000/login';
    

        var data = {"email": email, "password": password};

        console.log(data);
        axios.post(url, data).then(
            (responses)=>{
                 console.log(responses)
                 this.setState({
                     response: responses.data
                 })   
                }
                 
                 )
            
            .then((error)=>{
        console.log(error);
        })
      
     
        event.preventDefault();

    }


   
      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/' />
        }
      }


    render() {
    
    var tab = "";
    if(this.state.response !== []){
        tab =  this.state.response.msg
    }

 
      

        return (
            <div>
             <Fragment>  
             {this.renderRedirect()}

            <div className="" style={{width: "30%", margin: 'auto', marginTop: '15vh'}}>
            <form method="post" onSubmit={this.LoginHandler}>
            <p style={{color: 'red'}}>{tab}</p>
            <label for="">Enter Email</label>
            <input ref={(email)=> this.email = email}  type="email" className="form-control"/>
            <br/>
            <label >Enter Password</label>
            <input ref={(password)=> this.password = password} type="password" className="form-control"></input>
            <br/>
            <button type="submit" className="btn btn-primary btn-lg">Login</button>


            </form>
            </div>
        </Fragment>
                
            </div>
        )
    }
}

