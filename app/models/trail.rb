class Trail < ApplicationRecord
    validates :name, :difficulty, :length, :elevation, :route, :latitude, :longitude, :description, :zoom , :directions, presence: true

    belongs_to :park 

    has_many_attached :photos
    
end