@parks.each do |park|
    json.set! park.id do
        json.extract! park, :id, :name, :latitutde, :longitude, :description, :acreage, :country, :state
    end
end