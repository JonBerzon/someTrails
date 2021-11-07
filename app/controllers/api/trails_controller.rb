class Api::TrailsController < ApplicationController

    def index 
        @trails = Trail.with_attached_photos.all.includes(:descriptors, :park)
        render :index 
    end

    def show 
        @trail = Trail.find(params[:id])
        render :show 
    end




end