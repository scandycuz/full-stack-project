class Campaign < ActiveRecord::Base

  validates :user, :title, :goal_amount, presence: true

  belongs_to :user

end