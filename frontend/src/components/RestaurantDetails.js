import React, { Component } from 'react'
import Review from './Review'

export default class RestaurantDetails extends Component {

    state = {
        restaurant_id: "",
        score: "",
        text: ""
    }

    addNewReview(e){
        e.preventDefault();
        fetch(`https://localhost:9292/reviews` ,{method: 'POST',
            headers: 
            {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                score: this.state.score,
                text: this.state.text,
                restaurant_id: this.state.restaurant_id
            })
        })
        .then(response => response.json())
        .then(data => data)
    }

    changeHandler(e){
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addNewReview}>
                    <label>
                        Star Rating:
                        <input type="number" value={this.state.score} name="score" onChange={this.changeHandler}/>
                    </label>
                    <label>
                        Write a Review:
                        <input type="text" value={this.state.text} name="text" onChange={this.changeHandler}/>
                    </label>
                </form>
                {this.props.restaurant.reviews.map((item) => <Review review={item}/>)}
            </div>
        )
    }
}