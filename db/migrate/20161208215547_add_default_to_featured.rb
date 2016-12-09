class AddDefaultToFeatured < ActiveRecord::Migration
  def change
    change_column :campaigns, :featured, :boolean, :default => false
  end
end
