class ChangeCampaignDurationFormat < ActiveRecord::Migration
  def change
    change_column :campaigns, :duration, :string
  end
end
