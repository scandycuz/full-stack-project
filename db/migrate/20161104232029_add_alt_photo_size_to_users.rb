class AddAltPhotoSizeToUsers < ActiveRecord::Migration
  def change
    add_column :users, :small_photo_url, :string
  end
end
