@parks.each do |park|
    json.set! park.id do
        json.extract! park, :id, :directions, :name, :latitude, :longitude, :description, :acreage, :country, :state, :contact, :zoom
    end
end