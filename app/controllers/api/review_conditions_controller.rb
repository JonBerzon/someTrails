class Api::ReviewConditionsController < ApplicationController

    def create 
        conditions = params[:conditions][:c]
        review = params[:conditions][:r]
        if !conditions 
            @review = Review.find(review)
            render 'api/reviews/show'
        else

            conditions.each do |c|
                rc = ReviewCondition.new({review_id: review, condition_id: c})
                rc.save
            end
            @review = Review.find(review)
            render 'api/reviews/show'
        end
    end

    def update
        conditions = params[:conditions][:c]
        review = params[:conditions][:r]
        @review = Review.find(review)

        all_conditions = @review.review_conditions 
        all_conditions.each do |cond|
            cond.destroy
        end
        if conditions
            conditions.each do |c|
                rc = ReviewCondition.new({review_id: review, condition_id: c})
                rc.save
            end
        end

        render 'api/reviews/show'
    
    end



end
