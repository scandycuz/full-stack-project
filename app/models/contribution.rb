class Contribution < ActiveRecord::Base
  validates :user, :campaign, :reward, presence: true

  belongs_to :user
  belongs_to :campaign
  belongs_to :reward
end
