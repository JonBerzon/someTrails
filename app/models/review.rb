class Review < ApplicationRecord
    validates :user_id, :trail_id, :date, :rating, presence: true

    belongs_to :user 
    belongs_to :trail




end