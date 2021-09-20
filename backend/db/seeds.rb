Restaurant.create(name: "Generic Mexican Place", location:"Los Angeles")
Restaurant.create(name: "Generic Pizza Place", location:"New York")

Review.create(score: 4, text:"tasty", restaurant_id:1)
Review.create(score: 3, text:"meh", restaurant_id:1)

Review.create(score: 5, text:"Great!", restaurant_id:2)
Review.create(score: 4, text:"tasty", restaurant_id:2)