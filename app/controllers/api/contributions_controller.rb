class Api::ContributionsController < ApplicationController
  def index
    if params[:campaign_id]
      @contributions = Contribution.where("campaign_id = '#{params[:campaign_id]}'")
    elsif params[:profile_id]
      @contributions = Contribution.where("profile_id = #{params[:profile_id]}")
    else
      @contributions = Contribution.all
    end
  end

  def create
    @contribution = Contribution.new(contribution_params)

    if @contribution.save
      render :show
    else
      render @contribution.errors.full_messages
    end
  end

  private
  def contribution_params
    params.require(:contribution)
    .permit(:user_id, :campaign_id, :reward_id, :amount)
  end
end
