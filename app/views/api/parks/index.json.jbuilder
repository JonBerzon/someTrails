@parks.each do |park|
    json.set! park.id do
        json.extract! park, :id, :name, :latitude, :longitude, :description, :acreage, :country, :state, :contact, :zoom
    end
end