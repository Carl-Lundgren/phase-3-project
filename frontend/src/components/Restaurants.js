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
    // fetch("http://localhost:9292/restaurants")
    //   .then((resp) => resp.json())
    //   .then((data) => {
    //     if (data.length === this.state.restaurants.length) {
    //       console.log(data.length);
    //     } else {
    //       this.setState({ restaurants: data });
    //     }
    //   });
  };
  
  deleteButton = (e) =>{
    fetch(`http://localhost:9292/reviews/${e.target.id}`,
    {method: 'DELETE'})
    .then(response => response.json())
    .then(data =>this.setState({
        restaurants: [...this.state.restaurants], data
    }))
}
  
  renderRestaurants() {
      return this.state.restaurants.map(
          ({ location, name, id, reviews }, ind) => (
              <div key={id}>
          <h2>{name}</h2>
          <h3>{location}</h3>
          {reviews.map((data) => (
              <div>
              <h3>{data.score}⭐</h3>
              <h4>{data.text}</h4>
              {/* <DeleteReview id={data.id} /> */}
              <button  id={data.id} onClick={this.deleteButton}>❌</button>
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
    return <div>
        <ReviewForm addReview={this.addReview}/>
        {this.renderRestaurants()}</div>;
  }
}
