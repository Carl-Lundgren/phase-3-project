import React, { Component } from 'react'

export default class Restaurant extends Component {
    /*state = {
        like: this.props.like || false,
        favorite: this.props.favorite || false
    }


    button = (type) =>{
        if (this.state[type] === false){
            this.setState({[type]: true}, () => 
                fetch(`http://localhost:5000/pictures` ,{method: 'POST',
                    headers: 
                    {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: JSON.stringify({
                        pic: this.props.pic,
                        like: this.state.like,
                        favorite: this.state.favorite
                    })
                })
            )
        } else {
            this.setState({[type]: false}, () =>
                fetch(`http://localhost:5000/pictures/${this.props.id}` ,{method: 'PUT',
                    headers: 
                    {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: JSON.stringify({
                        pic: this.props.pic,
                        like: this.state.like,
                        favorite: this.state.favorite
                    })
                })
                    .then(response => response.json())
                    .then(data => data)
            )
        }
    }*/

    render() {
        /*const style = {
            textAlign: "center",
            justifyContent: "center",
            
            padding: "1rem",
            display: "grid",
            gridTemplateColumns: "500px",
            margin: "1rem 2rem",
          }*/
        return (
            <div>
                <img src={this.props.pic} alt="Cute Dog" width="500" />
            </div>
        )
    }
}