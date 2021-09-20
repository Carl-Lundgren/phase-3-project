import React, { Component } from 'react'
import Restaurants from './Restaurants'


const HomePage = () => {
    return(
        <div>
            <h1 style={{textAlign: "center"}}>Not Yelp</h1>
            
            <Restaurants/>
        </div>
        )
}

export default HomePage