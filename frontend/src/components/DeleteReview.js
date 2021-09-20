import React, { Component } from 'react'

export default class DeleteReview extends Component {


    deleteButton = (e) =>{
        fetch(`http://localhost:9292/reviews/${e.target.id}`,
        {method: 'DELETE'})
        .then(response => response.json())
        .then(data => data)
    }

    render() {
        return (
            <div>
                <button id={this.props.id} onClick={this.deleteButton}>Delete</button>
            </div>
        )
    }
}