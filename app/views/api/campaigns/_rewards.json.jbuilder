json.set! :rewards do
  rewards.each do |reward|
    json.set! reward.id do
      json.extract! reward, :id, :campaign_id, :price, :title, :description, :number_available, :inventory, :estimated_delivery, :requires_shipping
    end
  end
end
