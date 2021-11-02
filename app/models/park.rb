class Park < ApplicationRecord
    validates :name, :latitude, :longitude, :description, :acreage, :country, :state, presence: true

end