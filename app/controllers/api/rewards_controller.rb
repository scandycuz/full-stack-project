class Api::RewardsController < ApplicationController
  def show
    @reward = Reward.find(params[:id])
    if @reward
      render :show
    else
      render json: @reward.errors.full_messages
    end
  end

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
    @reward = Reward.find(reward_params[:id])

    if @reward.update_attributes(reward_params)
      render :show
    else
      render json: @reward.errors.full_messages
    end
  end

  def destroy
    @reward = Reward.find(params[:id])
    @campaign = @reward.campaign
    @reward.destroy

    render :show
  end

  private
  def reward_params
    params.require(:reward).permit(:id, :campaign_id, :price, :title, :description, :number_available, :inventory, :estimated_delivery, :requires_shipping)
  end
end
