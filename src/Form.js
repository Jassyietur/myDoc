import { render } from '@testing-library/react';
import React, {Component} from 'react'

class Form extends Component{
    
    constructor(props) {
        super(props);
    
        console.log({props});

        this.state={
          
            inititalState :{
                name: "",
                job: "",
            }
             
            
        }
      this.handleChangeName = this.handleChangeName.bind(this);
      this.handleChangeJob=this.handleChangeJob.bind(this);
       
    }

    handleChangeName=(event)=>{
        const{name, value}=event.target
       
    this.setState({
        name:value
       
        
    },()=>{console.log({
    inititalState: this.inititalState,
    name:value
   
    });})
    }
    handleChangeJob=(event)=>{
        const{job, value}=event.target
       
    this.setState({
        job:value
       
        
    },()=>{console.log({
    inititalState: this.inititalState,
    job:value
   
    });})
    }

submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

    state=this.inititalState
    render() 
    {
        const{name,job}=this.state;

        return (
            <form>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={this.handleChangeName} />
              <label htmlFor="job">Job</label>
              <input
                type="text"
                name="job"
                id="job"
                value={job}
                onChange={this.handleChangeJob} />
               <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
            
          );
    }
}

export default Form
