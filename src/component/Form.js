import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <form className="Search" onSubmit={this.props.handleSubmit}>
                <label htmlFor="search">Enter your main ingredient</label>
                <input className="Search-input" type="text" id="search" placeholder="i.e. chicken" required onChange={this.props.handleChange} />
                <input className="Submit" type="submit" value="Search" />
            </form>
        )}
    }

    export default Form;