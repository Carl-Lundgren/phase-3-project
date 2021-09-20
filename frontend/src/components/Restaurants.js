import React, { Component } from "react";
import DeleteReview from "./DeleteReview";
import ReviewForm from './ReviewForm'

export default class Restaurants extends Component {
  state = {
    restaurants: [],
  };

  componentDidMount() {
    fetch("http://localhost:9292/restaurants")
      .then((response) => response.json())
      .then((info) => this.setState({ restaurants: info }));
  }
  
  renderRestaurants() {
      return this.state.restaurants.map(
          ({ location, name, id, reviews }, ind) => (
              <div key={id}>
          <h2>{name}</h2>
          <h3>{location.place}</h3>
          {reviews.map((data) => (
              <div>
              <h3>{data.score}⭐</h3>
              <h4>{data.text}</h4>
              <DeleteReview id={data.id} />
            </div>
          ))}
        </div>
      )
      );
    }

    addReview = (data) => {
      this.setState({restaurants: this.state.restaurants.reviews.concat(data)})
    }
    
  render() {
    return <div>
        <ReviewForm addReview={this.addReview}/>
        {this.renderRestaurants()}</div>;
  }
}
