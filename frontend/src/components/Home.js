import React, { Component } from 'react'
import Restaurant from './Restaurant'

export default class Home extends Component {
    state = {
        restaurants: [],
        
    }

    componentDidMount(){
        fetch('https://localhost:9292/restaurants')
        .then(response => response.json())
        .then(data => this.setState({
            restaurants: data.message
        }))
    }

    render() {
        return (
            <div>
                {this.state.restaurants.map((item) => <Restaurant pic={item}/>)}
            </div>
        )
    }
};