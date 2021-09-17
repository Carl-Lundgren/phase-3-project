import React, { Component } from 'react'
import Review from './Review'

export default class RestaurantDetails extends Component {

    render() {
        return (
            <div>

                {this.props.restaurant.reviews.map((item) => <Review review={item}/>)}
            </div>
        )
    }
}