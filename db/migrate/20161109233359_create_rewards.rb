class CreateRewards < ActiveRecord::Migration
  def change
    create_table :rewards do |t|
      t.integer :campaign_id, index: true
      t.integer :price, null: false
      t.string :title, null:false
      t.text :description
      t.integer :number_available
      t.date :estimated_delivery
      t.boolean :requires_shipping, defalt: false
      t.timestamps null: false
    end
  end
end
