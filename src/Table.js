import React, { Component } from 'react'
class Table extends Component   {
    
   render(){

    const TableBody=(props)=>{
        const rows=props.characterData.map((row,index)=>{
            return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
            )
        })
        
        
        return <tbody>{rows}</tbody>
    }
    const Table=(props)=>{
        const {characterData}=props
        console.log(props);
    }
   
    
    return (
        <table>
          <TableBody characterData={this.props.characterData} removeCharacter={this.props.removeCharacter}/>
        </table>
      )

   }
}



export default Table