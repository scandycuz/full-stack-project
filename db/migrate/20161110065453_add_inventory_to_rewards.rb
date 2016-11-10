class AddInventoryToRewards < ActiveRecord::Migration
  def change
    add_column :rewards, :inventory, :integer
  end
end
