Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :update]
    resource :session, only: [:create, :destroy, :show]

    resources :profiles, only: [:update, :show] do
      resources :campaigns, only: [:index]
      resources :contributions, only: [:index]
    end

    resources :rewards, only: [:show, :create, :update, :index, :destroy]

    resources :campaigns, only: [:index, :create, :show, :update, :destroy] do
      resources :contributions, only: [:index]
    end

    resources :contributions, only: [:create, :index]
  end
end
