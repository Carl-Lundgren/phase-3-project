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
        fetch("https://localhost:9292/reviews" ,{method: 'POST',
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
        .then(data => console.log(data))
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
                    <input type="submit" value="Submit" />
                </form>
                {/* {this.props.restaurant.reviews.map((item) => <Review review={item}/>)} */}
            </div>
        )
    }
}