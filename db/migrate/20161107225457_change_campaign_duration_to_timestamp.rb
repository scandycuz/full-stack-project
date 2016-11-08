class ChangeCampaignDurationToTimestamp < ActiveRecord::Migration
  def change
    remove_column :campaigns, :duration
    add_column :campaigns, :duration, :timestamp
  end
end
