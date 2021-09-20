import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class Home extends Component {
    state = {
        restaurants: [],
    }

    componentDidMount(){
        fetch('http://localhost:9292/restaurants')
        .then(response => response.json())
        .then(info => this.setState({restaurants: info}))
    }

    renderRestaurants(){
        return this.state.restaurants.map(({location, name, id}) => (
            <div key={id}>
                <NavLink to="/restaurantInformation">{name}</NavLink>
                <h2>
                    {location.place}
                </h2>
            </div>
        ))
    }

    render() {
        return (
            <div>              
                {this.renderRestaurants()}
            </div>
        )
    }
};