class Api::TrailsController < ApplicationController

    def index 
        @trails = Trail.all 
        render :index 
    end

    def show 
        @trail = Trail.find(params[:id])
        render :show 
    end




end