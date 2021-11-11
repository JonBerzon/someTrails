class Api::ReviewsController < ApplicationController

    
    def create
        @review = Review.new(review_params)

        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 401
        end
    end

    def update
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 401
        end
    end

    def destroy
        @review = Review.find(params[:id])
        if @review
            @review.destroy
            render json: @review.trail_id   
        else
            render json: ["Review cannot be destroyed."]
        end
    end

    private
    def review_params
        params.require(:review).permit(:user_id, :trail_id, :activity, :date, :description, :rating)
    end



end