class Api::CampaignsController < ApplicationController

  def index
    if params[:profile_id]
      @campaigns = Campaign.where("user_id = '#{params[:profile_id]}'")
    else
      @campaigns = Campaign.where("status = 'published'")
    end
  end

  def create
    @campaign = Campaign.new(campaign_params)

    if @campaign.save
      render :create
    else
      render @campaign.errors.full_messages
    end
  end

  def show
    @campaign = Campaign.find(params[:id])
    @author = @campaign.user
    @rewards = @campaign.rewards
    @contributors = @campaign.contributors

    render :show
  end

  def update
    @campaign = Campaign.find(params[:campaign][:id])
    @author = @campaign.user
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
    .permit(:id, :user_id, :title, :tagline, :funds_received, :goal_amount, :card_image_url, :pitch_image_url, :pitch_video_url, :campaign_overview, :campaign_pitch, :location, :duration, :status, :author, :rewards, :contributors)
  end
end
