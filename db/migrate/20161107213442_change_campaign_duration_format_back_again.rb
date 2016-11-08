class ChangeCampaignDurationFormatBackAgain < ActiveRecord::Migration
  def change
    add_column :campaigns, :duration, :date
  end
end
