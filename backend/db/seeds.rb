
Location.create({place: "Los Angeles"})
Location.create({place: "New York"})

Restaurant.create(name: "Generic Mexican Place", location_id:1)
Restaurant.create(name: "Generic Pizza Place", location_id:2)

Review.create(score: 4, text:"tasty", restaurant_id:1)
Review.create(score: 3, text:"meh", restaurant_id:1)

Review.create(score: 5, text:"Great!", restaurant_id:2)
Review.create(score: 4, text:"tasty", restaurant_id:2)