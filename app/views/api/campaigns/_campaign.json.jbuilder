json.extract! campaign, :id, :user_id, :title, :tagline, :funds_received, :goal_amount, :card_image_url, :pitch_image_url, :pitch_video_url, :campaign_overview, :campaign_pitch, :duration, :location, :status
json.author @author, :id, :first_name, :last_name, :city, :country, :description, :small_photo_url
json.partial! 'api/campaigns/rewards', rewards: rewards
json.partial! 'api/campaigns/contributors', contributors: contributors
