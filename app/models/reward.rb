class Reward < ActiveRecord::Base
  validates :campaign, :price, :title, presence: true
  # validates :estimated_delivery, presence: true, if: :requires_shipping?

  belongs_to :campaign
end
