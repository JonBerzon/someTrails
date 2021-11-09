# @parks.each do |park|
#     json.set! park.id do
#         json.extract! park, :id, :directions, :name, :latitude, :longitude, :description, :acreage, :country, :state, :contact, :zoom
#     end
# end



@parks.each do |park|
    json.parks do
        json.set! park.id do
            json.extract! park, :id, :directions, :name, :latitude, :longitude, :description, :acreage, :country, :state, :contact, :zoom
            json.trails park.trails.map{ |trail| trail.id}
        end  
    end
    

    park.trails.with_attached_photos.includes(:descriptors, :park, :reviews).each do |trail|
        json.trails do 
            json.set! trail.id do
                json.extract! trail, :park_id, :id, :duration, :name, :difficulty, :length, :elevation, :route, :latitude, :longitude, :description, :zoom , :directions
                json.descriptors trail.descriptors.map{ |descriptor| descriptor.name}
                json.reviews trail.reviews.map{ |review| review.id}
                if trail.photos.attached?
                    json.photosUrl trail.photos.map { |photo| url_for(photo)}
                end
            end
        end
        trail.reviews.includes(:conditions, :review_conditions).each do |review|
            json.reviews do 
                json.set! review.id do
                    json.extract! review, :id, :date, :description, :activity, :rating, :user_id, :trail_id
                    json.conditions review.conditions.map { |condition| condition.name}
                end
            end
        end
    end
end

@users = User.all.includes(:reviews) 
@users.each do |user|
    json.users do
        json.set! user.id do
            json.extract! user, :id, :email, :fname, :lname, :bio, :created_at
            json.review user.reviews.map {|review| review.id}
        end
    end
end

