import React, { Component } from 'react'

export default class Review extends Component {

    fetch

    deleteButton(){fetch(`https://localhost:9292/reviews/${this.props.id}`,{method: 'DELETE'})
        .then(response => response.json())
        .then(data => data)
    }

    render() {
        return (
            <div>
                <h1>{this.props.review}</h1>
                <button onClick={() => this.deleteButton}> Delete</button>
            </div>
        )
    }
}