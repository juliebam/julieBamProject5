import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import axios from 'axios';

const apiKey = "4d616a3fe66b009185305fec33387408";
const apiId = "0766a929";

// const Results =(props)=>{
//   return(
//     <div>
//       <h2>{props.label}</h2>
//       <img src={props.image} alt={props.alt}>
//       <a href={props.url}>{props.url}</a>
//     </div>
//   )
//  }

class App extends Component {
constructor(){
  super();
  this.state ={
    recipes: [],
    userInput: '',
    userName: 'Julie'
  }
}
  
  componentDidMount(){
//     axios({
//       method:'get',
//       url: "https://api.edamam.com/search",
//       responseType:'jsonp',
//         params:
//           {
//             q: this.state.userInput,
//             app_id: apiId,
//             app_key: apiKey,
//             format:'json',
//             to: 20,
//             diet: 'low-carb'
//           }
//    }).then(response =>{
//    response = response.data.hits
//   //  console.log(response)
//   //  this.setState({
//   //    art:response
//   //  })
//  })
} 

//every time the user type his input, this input will be saved into this state below.
handleChange = (event) => {
  this.setState({
    userInput: event.target.value
  })
}

handleSubmit =(event) => {
  event.preventDefault();
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
    this.setState({
     recipes: response,
     userInput: ""
 })
})
}

  render() {
    return (
      <div>
        <Header />
        <main>
          {/* <Search name={this.state.userName} onClick={this.handleSubmit} change={this.handleChange}/>  */}
          <section className="App-form">
            <h1>{this.props.name}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search">Enter your main ingredient</label>
                    <input type="text" id="search" placeholder="i.e. chicken" required onChange={this.handleChange} value={this.state.userInput}/>
                    <input type="submit" value="submit" />
                </form>
            </section> 

            <section className="App-results">
                <div className="App-gallery">
                  {this.state.recipes.map((results, index) =>{
                    return(
                      <div key={index}>
                        <h2>{results.recipe.label}</h2>
                        <img src={results.recipe.image} alt={results.recipe.label} />
                        <a href={results.recipe.url}>{results.recipe.url}</a>
                      </div>
                    )  
         })
         }

                </div>
            
            
            </section>
        
        </main>
        
      </div>
    );
  }
}

export default App;

// need to link the search field to the axios... so the userInput  goes as a query in the axios call
//need to get the results from the axios call displayed on the page
// what will be displayed: image and label, take me to the recipe button/a tag will redirect user to the url with the actual recipe

//onSubmit - get the user's Input and 