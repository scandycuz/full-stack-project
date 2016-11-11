contributors ||= []

json.set! :contributors do
  contributors.each do |contributor|
    json.set! contributor.id do
      json.extract! contributor, :id, :first_name, :last_name, :city, :country, :small_photo_url
    end
  end
end
