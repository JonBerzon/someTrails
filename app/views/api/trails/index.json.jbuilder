@trails.each do |trail|
    json.set! trail.id do 
        json.extract! trail, :park_id, :id, :duration, :name, :difficulty, :length, :elevation, :route, :latitude, :longitude, :description, :zoom , :directions
        if trail.photos.attached?
            json.photosUrl trail.photos.map { |photo| url_for(photo)}
            # json.photoUrl url_for(trail.photos)
        end
    end



end