class Api::ProfilesController < ApplicationController

  def show
    @profile = User.find(params[:id])
    @campaigns = @profile.campaigns
    @contributions = @profile.contributions

    if @profile
      render :show
    else
      render json: @profile.errors.full_messages
    end
  end

  def update
    @profile = User.find(params[:profile][:id])

    if @profile.update_attributes(profile_params)
      render :show
    else
      render json: @profile.errors.full_messages
    end
  end

  private
  def profile_params
    params.require(:profile)
    .permit(:email, :first_name, :last_name, :country, :city, :postal_code, :description, :about, :photo_url, :small_photo_url)
  end
end
