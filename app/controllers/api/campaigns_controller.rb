class Api::CampaignsController < ApplicationController

  def index
    if params[:profile_id]
      @campaigns = Campaign.where("user_id = '#{params[:profile_id]}'")
    else
      @campaigns = Campaign.all
    end
  end

  def create
    @campaign = Campaign.new(campaign_params)

    if @campaign.save
      render :show
    else
      render @campaign.errors.full_messages
    end
  end

  def show
    @campaign = Campaign.find(params[:id])

    render :show
  end

  def update
    @campaign = Campaign.find(params[:campaign][:id])

    if @campaign.update_attributes(campaign_params)
      render :show
    else
      render json: @campaign.errors.full_messages
    end
  end

  def destroy

  end

  private
  def campaign_params
    params.require(:campaign)
    .permit(:user_id, :title, :tagline, :funds_received, :goal_amount, :card_image_url, :pitch_image_url, :pitch_video_url, :campaign_overview, :campaign_pitch, :location, :duration, :status)
  end
end
