class AddDefaultToCampaignFundsRaised < ActiveRecord::Migration
  def change
    change_column :campaigns, :funds_received, :integer, :default => 0
  end
end
