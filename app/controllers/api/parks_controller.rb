class Api::ParksController < ApplicationController

    def index 
        @parks = Park.all.includes(:trails)
        render :index 
    end

    def show 
        @park = Park.find(params[:id])
        render :show
    end




end