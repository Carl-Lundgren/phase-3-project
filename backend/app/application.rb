class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if  req.path.match(/restaurants/)
      if req.get?
        restaurants = Restaurant.all
        restaurants_with_reviews = restaurants.map do |r| 
          {id: r.id, name: r.name, location: r.location, reviews: r.reviews}
        end
        return json_response(restaurants_with_reviews)
      else
      
      end
    elsif req.path.match(/reviews/)
      if req.get?
        reviews = Review.all
        return json_response(reviews)
      elsif req.post?
        data = JSON.parse(req.body.read)
        review = Review.create(data)
        return json_response(review)
      elsif req.delete?
        id = req.path.split("/reviews/").last
        Review.find(id).delete
        return json_response({:message => "Task deleted!"})
      else

      end
    else
      resp.write "Path Not Found"
    end

    resp.finish
  end

  private

  def json_response(data)
    [200, { 'Content-Type' => 'application/json' }, [ data.to_json ]]
  end

end
