class Park < ApplicationRecord
    validates :name, :latitude, :longitude, :description, :acreage, :country, :state, :contact, :zoom, presence: true

    has_many :trails 

end