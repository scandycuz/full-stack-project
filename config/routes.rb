Rails.application.routes.draw do
  root to: 'static_pages#root'

  resources :users, only: [:create, :patch]
  resource :session, only: [:get, :post, :delete]
end
