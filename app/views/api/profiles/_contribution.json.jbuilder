json.set! :contributions do
  json.set! contribution.id do
    json.extract! contribution, :id, :user_id, :campaign_id, :amount
    json.campaign contribution.campaign, :title
    if contribution.reward
      json.reward contribution.reward, :title, :estimated_delivery
    end
  end
end
