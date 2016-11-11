contributions ||= []

contributions.each do |contribution|
    json.set! contribution.id do
      json.extract! contribution, :id, :user_id, :campaign_id, :reward_id
    end
end
