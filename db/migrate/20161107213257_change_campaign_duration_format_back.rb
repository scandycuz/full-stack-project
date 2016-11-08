class ChangeCampaignDurationFormatBack < ActiveRecord::Migration
  def change
    remove_column :campaigns, :duration
  end
end
