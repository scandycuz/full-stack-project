json.set! :campaigns do
  json.set! campaign.id do
    json.extract! campaign, :id, :title, :status
  end
end
