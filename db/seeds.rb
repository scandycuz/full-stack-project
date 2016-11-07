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
    photo_url: "",
    small_photo_url: ""
  },{ first_name: 'Trevor',
    last_name: 'Scandalios',
    email: 'trevorscandalios@email.com',
    password: 'password',
    country: "United States",
    city: "San Francisco",
    postal_code: "94105",
    description: "Hi, this is my site!",
    about: "Truffaut trust fund wolf everyday carry gastropub tacos, tattooed flannel paleo coloring book godard. YOLO air plant 3 wolf moon venmo DIY lomo. Salvia bitters truffaut, franzen tbh bespoke hammock. You probably haven't heard of them narwhal schlitz tousled affogato hoodie forage pug hexagon mustache put a bird on it plaid.",
    photo_url: "",
    small_photo_url: ""
  }
])

campaigns = Campaign.create([
  { user_id: 1,
    title: "Uber for Jetskis",
    goal_amount: 1000,
    funds_received: 240,
    card_image_url: "",
    pitch_image_url: "",
    pitch_video_url: "https://vimeo.com/120469122",
    tagline: "Blog sustainable 8-bit man braid you probably haven't heard of them.",
    campaign_overview: "Franzen man bun hammock subway tile, vinyl forage portland. Street art 8-bit artisan, woke four loko microdosing meggings. Readymade tumblr biodiesel, roof party man braid viral umami ethical af ugh bespoke listicle gochujang swag. Vape meggings four loko, skateboard beard disrupt fixie fingerstache bespoke sartorial schlitz flannel.",
    campaign_pitch: "Mustache freegan gochujang venmo, actually lo-fi put a bird on it. 8-bit mlkshk austin, tofu chambray tilde kickstarter artisan messenger bag. +1 four dollar toast tumeric, offal bitters microdosing migas chicharrones. Fanny pack scenester tattooed before they sold out shabby chic. Quinoa chambray salvia before they sold out edison bulb."
  },{ user_id: 1,
    title: "Tindr for Farmers",
    goal_amount: 2000,
    funds_received: 40,
    card_image_url: "",
    pitch_image_url: "",
    pitch_video_url: "https://www.youtube.com/watch?v=eyU3bRy2x44",
    tagline: "Normcore hot chicken polaroid photo booth. Salvia williamsburg yr paleo, godard hexagon.",
    campaign_overview: "Literally coloring book mumblecore, edison bulb brooklyn banh mi mustache bitters. 3 wolf moon church-key swag sartorial pitchfork cornhole. Beard iPhone post-ironic, wayfarers knausgaard tousled synth gastropub bicycle rights flannel glossier cardigan deep v crucifix williamsburg. Direct trade whatever vape irony copper mug.",
    campaign_pitch: "Gluten-free kogi plaid kitsch narwhal. Single-origin coffee pabst sriracha heirloom, aesthetic authentic literally ramps bushwick affogato tilde hashtag franzen XOXO mixtape. Jean shorts authentic next level, glossier put a bird on it direct trade chia."
  }
])
