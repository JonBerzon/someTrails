json.extract! @review, :id, :date, :description, :activity, :rating, :user_id, :trail_id
json.conditions @review.conditions.map { |condition| condition.name}

