class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email, null: false, index: true, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false, index: true, unique: true
      t.string :first_name, null: false, index: true
      t.string :last_name, null: false, index: true
      t.string :country
      t.string :city
      t.integer :postal_code
      t.text :description
      t.text :about
      t.string :photo_url
      t.timestamps null: false
    end
  end
end
