class Api::ReviewConditionsController < ApplicationController

    def create 
        conditions = params[:conditions][:c]
        review = params[:conditions][:r]
        conditions.each do |c|
            rc = ReviewCondition.new({review_id: review, condition_id: c})
            rc.save
        end
        @review = Review.find(review)
        render 'api/reviews/show'
    end

    def edit
    end



end
