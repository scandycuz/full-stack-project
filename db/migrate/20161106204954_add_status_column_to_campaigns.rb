class AddStatusColumnToCampaigns < ActiveRecord::Migration
  def change
    remove_column :campaigns, :published
    add_column :campaigns, :status, :string, :default => "draft"
  end
end
