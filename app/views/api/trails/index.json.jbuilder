@trails.each do |trail|
    json.set! trail.id do 
        json.extract! trail, :park_id, :id, :name, :difficulty, :length, :elevation, :route, :latitude, :longitude, :description, :zoom , :directions
    end



end