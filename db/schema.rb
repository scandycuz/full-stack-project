# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161215191001) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "campaigns", force: :cascade do |t|
    t.integer  "user_id",                             null: false
    t.string   "title",                               null: false
    t.string   "tagline"
    t.integer  "funds_received",    default: 0
    t.integer  "goal_amount",                         null: false
    t.string   "card_image_url"
    t.string   "pitch_image_url"
    t.string   "pitch_video_url"
    t.text     "campaign_overview"
    t.text     "campaign_pitch"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "status",            default: "draft"
    t.string   "location"
    t.date     "duration"
    t.boolean  "featured",          default: false
    t.string   "slider_image_url"
  end

  add_index "campaigns", ["title"], name: "index_campaigns_on_title", using: :btree
  add_index "campaigns", ["user_id"], name: "index_campaigns_on_user_id", using: :btree

  create_table "contributions", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "campaign_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "amount"
    t.integer  "reward_id"
  end

  create_table "rewards", force: :cascade do |t|
    t.integer  "campaign_id"
    t.integer  "price",              null: false
    t.string   "title",              null: false
    t.text     "description"
    t.integer  "number_available"
    t.date     "estimated_delivery"
    t.boolean  "requires_shipping"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.integer  "inventory"
  end

  add_index "rewards", ["campaign_id"], name: "index_rewards_on_campaign_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "first_name",      null: false
    t.string   "last_name",       null: false
    t.string   "country"
    t.string   "city"
    t.integer  "postal_code"
    t.text     "description"
    t.text     "about"
    t.string   "photo_url"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "small_photo_url"
  end

  add_index "users", ["email"], name: "index_users_on_email", using: :btree
  add_index "users", ["first_name"], name: "index_users_on_first_name", using: :btree
  add_index "users", ["last_name"], name: "index_users_on_last_name", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", using: :btree

end
