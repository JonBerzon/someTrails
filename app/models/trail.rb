class Trail < ApplicationRecord
    validates :name, :difficulty, :length, :elevation, :route, :latitude, :longitude, :description, :zoom , :directions, presence: true

    belongs_to :park 
    has_many_attached :photos
    has_many :trail_descriptors
    has_many :descriptors,
        through: :trail_descriptors,
        source: :descriptor
    has_many :reviews
    
end