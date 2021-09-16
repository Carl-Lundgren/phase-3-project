import React, { Component } from 'react'
import Review from './Review'

export default class Restaurant extends Component {

    render() {
        return (
            <div>
                
                {this.props.restaurant.review.map((item) => <Review review={item}/>)}
            </div>
        )
    }
}