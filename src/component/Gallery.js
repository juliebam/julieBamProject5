import React, { Component } from 'react';
import "./Gallery.css"

const Gallery = (props) => {
    console.log(props)
    return ( 
        <div className="App-gallery" >
            {props.recipes.map((results, index) =>{
                return(
                <div className="Recipe-card" key={index}>
                    <img src={results.recipe.image} alt={results.recipe.label} />
                    <h2>{results.recipe.label}</h2>
                    <a href={results.recipe.url}>Recipe</a>
                </div>
                    )  
                })
            }   
        </div>
    )
}

export default Gallery;