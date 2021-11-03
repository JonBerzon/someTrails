@users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :email, :fname, :lname, :bio, :created_at
        if user.photo.attached?
            json.photoUrl url_for(user.photo)
        end
    end
end