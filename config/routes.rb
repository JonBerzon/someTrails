Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show, :update, :index]
    resource :session, only: [:create, :destroy]
    resources :parks, only: [:show, :index]
    resources :trails, only: [:show, :index]
    resources :reviews, only: [:update, :destroy, :create]
    resources :review_conditions, only: [:create, :destroy]
  end
end
