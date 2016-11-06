class CreateCampaigns < ActiveRecord::Migration
  def change
    create_table :campaigns do |t|
      t.integer :user_id, null: false, index: true
      t.string :title, null: false, index: true
      t.string :tagline
      t.integer :funds_received
      t.integer :goal_amount, null: false
      t.string :card_image_url
      t.string :pitch_image_url
      t.string :pitch_video_url
      t.text :campaign_overview
      t.text :campaign_pitch
      t.timestamps null: false
    end
  end
end
