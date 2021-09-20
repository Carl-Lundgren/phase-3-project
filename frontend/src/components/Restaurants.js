import React, { Component } from "react";
import DeleteReview from "./DeleteReview";
import ReviewForm from './ReviewForm'

export default class Restaurants extends Component {
  state = {
    restaurants: [],
  };

  runFetch= () => {fetch("http://localhost:9292/restaurants")
  .then((response) => response.json())
  .then((info) => this.setState({ restaurants: info }));}

  componentDidMount() {
    this.runFetch()
  }

  componentDidUpdate(){
    this.runFetch()
  };
  
  renderRestaurants() {
      return this.state.restaurants.map(
          ({ location, name, id, reviews }, ind) => (
              <div key={id}>
          <h2>{name}</h2>
          <h3>{location}</h3>
          {reviews.map((data) => (
              <div style={{border: 'black solid 5px', margin:'5rem'}}>
              <h3>{data.score}⭐</h3>
              <h4>{data.text}</h4>
              <DeleteReview id={data.id} />
            </div>
          ))}
        </div>
      )
      );
    }

    addReview = (data) => {this.setState({
        restaurants: [...this.state.restaurants], data
    })}
    
    
  render() {
    return <div style={{textAlign: "center"}}>
        <ReviewForm addReview={this.addReview}/>
        {this.renderRestaurants()}</div>;
  }
}
