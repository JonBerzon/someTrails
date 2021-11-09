class Review < ApplicationRecord
    validates :user_id, :trail_id, :date, :rating, presence: true

    belongs_to :user 
    belongs_to :trail

    has_many :review_conditions

    has_many :conditions,
        through: :review_conditions,
        source: :condition




end