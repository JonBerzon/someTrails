json.extract! @trail, :park_id, :id, :duration, :name, :difficulty, :length, :elevation, :route, :latitude, :longitude, :description, :zoom , :directions
json.descriptors @trail.descriptors.map{ |descriptor| descriptor.name}
json.reviews @trail.reviews.map{ |review| review.id}
if @trail.photos.attached?
    json.photosUrl @trail.photos.map { |photo| url_for(photo)}
end