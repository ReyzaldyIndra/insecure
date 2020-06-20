import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'
import Api from './Api'

class App extends React.Component {
  state = {
    characters: [],
  }
  removeCharacter = index => {
    const { characters } = this.state
  
    this.setState({
      //delete an array item which index is selected
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = character => {
    //fill in characters at state. using spread operator from ES6
    this.setState({characters: [...this.state.characters, character]})
  }
  
    render() {
      const {characters} = this.state
      return (
          <div className="container">
            <Table characterData={characters} removeCharacter={this.removeCharacter}/>
            <Form handleSubmit={this.handleSubmit}/>
            <Api/>
          </div>
      )
    }
  }

  export default App