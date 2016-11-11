json.set! :contributions do
  json.set! contribution.id do
    json.extract! contribution, :id, :user_id, :campaign_id, :amount
  end
end
