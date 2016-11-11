class Campaign < ActiveRecord::Base

  validates :user, :title, :goal_amount, presence: true

  belongs_to :user

  has_many :rewards

  has_many :contributions

  has_many :contributors,
  through: :contributions,
  source: :user
end
