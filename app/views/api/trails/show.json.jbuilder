json.extract! @trail, :park_id, :id, :name, :difficulty, :duration, :length, :elevation, :route, :latitude, :longitude, :description, :zoom , :directions
if trail.photos.attached?
    json.photosUrl @trail.photos.map { |photo| url_for(photo)}
end
json.park @trail.park 
json.review @trail.reviews