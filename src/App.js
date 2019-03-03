import React, { Component } from 'react';
import './App.css';
import Header from './component/Header';
import Gallery from './component/Gallery';
import Form from './component/Form';
import Loader from './component/Loader';
import axios from 'axios';


const apiKey = "4d616a3fe66b009185305fec33387408";
const apiId = "0766a929";

class App extends Component {
constructor(){
  super();
  this.state ={
    recipes: [],
    isLoading: false
  }
}
  
//every time the user type his input, this input will be saved into this state below.
handleChange = (event) => {
  this.setState({
      userInput: event.target.value
  })
}

handleSubmit =(event) => {
  event.preventDefault();
  this.setState({isLoading: true})
  const userInputString = this.state.userInput;    
  axios({
      method:'get',
      url: "https://api.edamam.com/search",
      responseType:'jsonp',
      params:
        {
          q: userInputString,
          app_id: apiId,
          app_key: apiKey,
          format:'json',
          to: 20,
          diet: 'low-carb'
        }
}).then(response => {
    response = response.data.hits
    console.log(response)
    if (response.length === 0) {
      alert('Error')
    }
    this.setState({
     recipes: response,
     userInput: "",
     isLoading: false
    })
 }).catch(error => {
   console.error(error)
 })
}

  render() {
    return (
      <div>
        <Header recipes={this.state.recipes} isLoading={this.state.isLoading}/>
        <main>
          <section className="App-form clearfix">
            <Form handleSubmit = {this.handleSubmit} handleChange = {this.handleChange} userInput={this.state.userInput}/>
          </section> 
          <section className="App-results">
              {
                this.state.isLoading ? <Loader /> : <Gallery recipes={this.state.recipes} />
              }
          </section>
        </main>
      </div>
    );
  }
}

export default App;

