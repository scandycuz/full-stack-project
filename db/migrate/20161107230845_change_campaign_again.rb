class ChangeCampaignAgain < ActiveRecord::Migration
  def change
    remove_column :campaigns, :duration
    add_column :campaigns, :duration, :date
  end
end
