import React, { Component } from 'react';
import "./Header.css"
// import heroImage from "./assets/heroImage.jpg"; // Tell Webpack this JS file uses this image




class Header extends Component {
    constructor(props){
    super(props)
    }
    render(){
        return(
            <header className={"App-header " + (this.props.recipes.length > 0 && !this.props.isLoading ? 'hide' : 'show')}>
                <div>
                    <h1>low carb & delicious</h1>
                </div>
            </header>      
        )
    }
}

export default Header;