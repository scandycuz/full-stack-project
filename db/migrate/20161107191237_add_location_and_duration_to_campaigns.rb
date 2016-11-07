class AddLocationAndDurationToCampaigns < ActiveRecord::Migration
  def change
    add_column :campaigns, :location, :string
    add_column :campaigns, :duration, :date
  end
end
