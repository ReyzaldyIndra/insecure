import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

class Form extends Component {
    //initial form value
    initialState = {
        name: '',
        job: '',
    }

    state = this.initialState

handleChange = event => {
    const {name, value} = event.target

    this.setState({
        [name]: value,
    })
    }
    submitForm = () => {
        //handle data submission to fill in the 'characters' at state
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const {name, job} = this.state;

        return(
            <form>
                <label htmlFor="name">Name</label>
                <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={this.handleChange}
                />
                <label htmlFor="job">Job</label>
                <input
                type="text"
                name="job"
                id="job"
                value={job}
                onChange={this.handleChange}
                />
                <Button as="input" type="button" value="Submit" onClick={this.submitForm}/>
            </form>
        )
    }
}

export default Form;