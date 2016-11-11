class CreateContributions < ActiveRecord::Migration
  def change
    create_table :contributions do |t|
      t.integer :user_id, null: false
      t.integer :campaign_id, null: false
      t.integer :reward_id, null: false
      t.timestamps null: false
    end
  end
end
