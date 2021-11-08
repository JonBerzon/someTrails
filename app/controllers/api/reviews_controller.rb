class Api::ReviewsController < ApplicationController

    
    def create
        @review = Review.new(review_params)
        @review.user_id = current_user.id

        if @review.save
            @trail = Trail.find(@review.trail_id)
            render 'api/trails/show'
        else
            render json: @review.errors.full_messages, status: 401
        end
    end

    def update
        @review = Review.find(params[:id])
        if @review.update(user_params)
            @trail = Trail.find(@review.trail_id)
            render 'api/trails/show'
        else
            render json: @review.errors.full_messages, status: 401
        end
    end

    def destroy
        @review = Review.find(params[:id])
        if @review
            @trail = Trail.find(@review.trail_id)
            @review.destroy
            render 'api/trails/show' 
        else
            render json: ["Review cannot be destroyed."]
        end
    end

    private
    def review_params
        params.require(:review).permit(:user_id, :trail_id, :date, :description, :rating)
    end



end