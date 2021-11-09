class Condition < ApplicationRecord
    validates :name, presence: true 

    has_many :review_conditions

    has_many :reviews,
        through: :review_conditions,
        source: :review




end