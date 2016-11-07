@campaigns.each do |campaign|
  json.set! campaign.id do
    json.extract! campaign, :id, :user_id, :title, :tagline, :funds_received, :goal_amount, :card_image_url, :pitch_image_url, :pitch_video_url, :campaign_overview, :campaign_pitch, :status
  end
end
