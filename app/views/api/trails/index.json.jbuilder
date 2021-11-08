@trails.each do |trail|
    json.set! trail.id do 
        json.extract! trail, :park_id, :id, :duration, :name, :difficulty, :length, :elevation, :route, :latitude, :longitude, :description, :zoom , :directions
        if trail.photos.attached?
            json.photosUrl trail.photos.map { |photo| url_for(photo)}
        end
        json.park trail.park 
        json.descriptors trail.descriptors.map {|descriptor| descriptor.name}
        json.reviews trail.reviews.map do |review|
            json.fname review.user.fname 
            json.lname review.user.lname
            json.date review.date 
            json.description review.description
            json.rating review.rating
        end

    end



end