class ReviewCondition < ApplicationRecord
    validates :review_id, :condition_id, presence: true

    belongs_to :review 
    belongs_to :condition 


end
