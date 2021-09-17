import React, { Component } from 'react'
import Review from './Review'

export default class Restaurant extends Component {

    render() {
        return (
            <div>
                <link to="/restaurantInformation">{this.props.name}</link>
                <h2>{this.props.location}</h2>
            </div>
        )
    }
}