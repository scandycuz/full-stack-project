# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


users = User.create([
  { first_name: 'Guest',
    last_name: 'User',
    email: 'guestuser@email.com',
    password: 'password',
    country: "United States",
    city: "San Francisco", 
    postal_code: 94105,
    description: 'A guest account',
    about: 'StartupGoGo is awesome!',
    photo_url: "http://res.cloudinary.com/dhh1nask4/image/upload/v1478288492/profile_images/ajbv6jqjogu5fentx7uz.jpg"},
  { first_name: 'Trevor', last_name: 'Scandalios', email: 'trevorscandalios@email.com', password: 'password'}
])
