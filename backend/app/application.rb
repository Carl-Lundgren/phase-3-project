class Application

  def call(env)
    resp = Rack::Response.new
    @req = Rack::Request.new(env)

    if  @req.path.match(/restaurants/)
      if @req.get? && params_id
        restaurant = Restaurant.find(params_id)
        formatted_restaurant = {
          text: restaurant.text,
          reviews: restaurant.reviews
        }
        return json_response(formatted_restaurant)

      elsif @req.get?
        restaurants = Restaurant.all
        return json_response(restaurants)
      else
      
      end
    elsif @req.path.match(/reviews/)
      if @req.post?

      elsif @req.delete?
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

  def params_id
    @req.path_info[/\d+/]
  end

  def json_response(data)
    [200, { 'Content-Type' => 'application/json' }, [ data.to_json ]]
  end

end
