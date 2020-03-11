// Code ClickityClick Component Here
import React from 'react'

export default class ClickityClick extends React.Component {

   constructor(props) {
       super()

       this.state = {
           hasBeenClicked: false,
       };
   }

    handleClick = (event) => {
        this.setState({
            hasBeenClicked: !this.state.hasBeenClicked
        })
        
    }


    render() {

        return(
            <div>
                <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked</p>
                <button onClick={this.handleClick}>CLICK ME!</button>
            </div>
        )
    }
}