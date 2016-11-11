class ChangeContributionsRewardColumn < ActiveRecord::Migration
  def change
    remove_column :contributions, :reward_id
    add_column :contributions, :reward_id, :integer
  end
end
