class AddPublishedColumnToCampaings < ActiveRecord::Migration
  def change
    add_column :campaigns, :published, :boolean, :default => false
  end
end
