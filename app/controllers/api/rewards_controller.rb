class Api::RewardsController < ApplicationController
  def create
    @reward = Reward.new(reward_params)
    if @reward.save
      render :show
    else
      render json: @reward.errors.full_messages, status: 404
    end
  end

  def index
    if params[:campaign_id]
      @rewards = Rewards.where("campaign_id = '#{params[:campaign_id]}'")
    else
      @rewards = Rewards.all
    end
  end

  def update

  end

  def destroy

  end

  private
  def reward_params
    params.require(:reward).permit(:campaign_id, :price, :title, :description, :number_available, :inventory, :estimated_delivery, :requires_shipping)
  end
end
