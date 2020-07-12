import React, { Component } from 'react'
import {Container, Row} from 'react-bootstrap'
import Monitor from './Monitor/Monitor'

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
          <Monitor/>
      )
    }
  }

  export default App