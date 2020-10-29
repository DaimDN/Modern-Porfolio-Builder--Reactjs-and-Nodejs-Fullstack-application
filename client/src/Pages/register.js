import Axios from 'axios';
import React from 'react'
import axios from 'axios';

export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            data : []
        }
    }

    componentDidMount(){
        var url = "https://cat-fact.herokuapp.com/facts";
        axios.get(url).then((response)=>{
            this.setState({
                data : response.data.all
            })
        }).then((error)=>{
            console.log(error);
        })
    }


    render(){
        return (
            <div className="row">
            <br/>

            {this.state.data.map((item)=>{
                return <div className="col-3"> <div className="jumbotron bg-dark">{item.text}</div> </div>
            })}
           

                
            </div>
        )
    }
 

}


