import React, { Component } from 'react'



export default class ReviewForm extends Component {

    state = {
        restaurant_id: "",
        score: "",
        text: ""
    }


    addNewReview= (e) => {
        e.preventDefault();
        fetch('http://localhost:9292/reviews', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify({
              restaurant_id: this.state.restaurant_id,
              score: this.state.score,
              text: this.state.text,
            })
        })
          .then(response => response.json())
          .then(data => this.props.addReview(data))
          .catch(error => console.error(error))
          this.setState({
            restaurant_id: "",
            score: "",
            text: "",
          })
    }
    

    render() {
        return (
            <div>
                <form onSubmit={this.addNewReview}>
                    <div id="score">
                    <label>
                        Star Rating:
                        <input type="number" value={this.state.score} name="score" onChange={(e) =>  {this.setState({score: e.target.value})}}/>
                    </label>
                    </div>
                    <div id="text">
                    <label>
                        Write a Review:
                        <input type="text" value={this.state.text} name="text" onChange={(e) =>  {this.setState({text: e.target.value})}}/>
                    </label>
                    </div>
                    <div id="id">
                    <label>
                        Restaurant ID:
                        <input type="number" value={this.state.restaurant_id} name="id" onChange={(e) =>  {this.setState({restaurant_id: e.target.value})}}/>
                    </label>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}