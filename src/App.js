import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'
class App extends Component {
  
  constructor(props) {
    super(props);

    this.state={
      
      characters : [
         
        ]
    }
   
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }
  

  render(){
    
  const removeCharacter=(index)=> {

    const newChars = this.state.characters.filter((character, i)=>{
      return i !== index;
    });

    this.setState({
      characters: newChars
      }, 
      () => {console.log({
        comment: "inside the scope of set-state", 
        index: index,
        characters: this.state.characters,
        newChars: newChars
      });})
    }
    

    return(
      <div className="container">
       <Table characterData={this.state.characters} removeCharacter={removeCharacter}/>
       <Form handleSubmit={this.handleSubmit} />
      </div>  
       
       )
    }
  }

export default App