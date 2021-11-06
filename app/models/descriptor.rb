class Descriptor < ApplicationRecord
    validates :name, presence: true 

    has_many :trail_descriptors

    has_many :trails,
        through: :trail_descriptors,
        source: :trail



end