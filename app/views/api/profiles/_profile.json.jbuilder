json.extract! profile, :id, :email, :first_name, :last_name, :country, :city, :postal_code, :description, :about, :photo_url, :small_photo_url

campaigns ||= []

campaigns.each do |campaign|
  json.partial! 'api/profiles/campaign', campaign: campaign
end
