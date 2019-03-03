import React, { Component } from 'react';

class Search extends Component {
    handleChange = (event) => {
        console.log(event.target.value)
      }

    handleSubmit = (event, ) => {

    }
      
    render(props){
        return(
            
            <section className="App-form">
            <h1>{this.props.name}</h1>
                <form onSubmit={this.props.onClick}>
                    <label htmlFor="search">Enter your main ingredient</label>
                    <input type="text" id="search" placeholder="i.e. chicken" required onChange={this.handleChange}/>
                    <input type="submit" value="submit" />
                </form>
            </section> 
        )
    }
}

export default Search;



