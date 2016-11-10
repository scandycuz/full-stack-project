@rewards.each do |reward|
  json.set! reward.id do
    json.extract! reward, :id, :campaign_id, :price, :title, :description, :number_available, :estimated_delivery, :requires_shipping
  end
end
