class AddSliderImageUrlToCampaigns < ActiveRecord::Migration
  def change
    add_column :campaigns, :slider_image_url, :string
  end
end
