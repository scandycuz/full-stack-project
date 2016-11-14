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
    description: 'Synth pitchfork skateboard godard vexillologist church-key.',
    about: 'Forage woke brooklyn, chambray crucifix tumblr stumptown celiac man bun mlkshk. Pug lyft poutine, prism kinfolk selfies green juice pop-up gentrify. Marfa kitsch schlitz, post-ironic pork belly af twee normcore chillwave humblebrag crucifix.',
    photo_url: "http://res.cloudinary.com/dhh1nask4/image/upload/v1478719506/profile_images/egponpiwrqvdeymjwmxm.jpg",
    small_photo_url: "https://res.cloudinary.com/dhh1nask4/image/upload/c_fill,h_310,w_310/v1478719506/profile_images/egponpiwrqvdeymjwmxm.jpg"
  },{ first_name: 'John',
    last_name: 'Ash',
    email: 'johnash@email.com',
    password: 'password',
    country: "United States",
    city: "San Francisco",
    postal_code: 94105,
    description: "Chartreuse four loko meh man braid, woke franzen farm-to-table.",
    about: "kombucha intelligentsia meditation fanny pack small batch truffaut af ramps godard bushwick. Typewriter vape messenger bag listicle. Twee mumblecore typewriter poutine, disrupt fap viral cronut tacos before they sold out unicorn ugh whatever crucifix cardigan.",
    photo_url: "http://res.cloudinary.com/dhh1nask4/image/upload/v1478719854/profile_images/wi8yakjtft5oz2bcsnip.jpg",
    small_photo_url: "https://res.cloudinary.com/dhh1nask4/image/upload/c_fill,h_310,w_310/v1478719854/profile_images/wi8yakjtft5oz2bcsnip.jpg"
  },{ first_name: 'Emma',
    last_name: 'Johnson',
    email: 'emmajohnson@email.com',
    password: 'password',
    country: "United States",
    city: "New York",
    postal_code: 10010,
    description: "Chartreuse four loko meh man braid, woke franzen farm-to-table.",
    about: "kombucha intelligentsia meditation fanny pack small batch truffaut af ramps godard bushwick. Typewriter vape messenger bag listicle. Twee mumblecore typewriter poutine, disrupt fap viral cronut tacos before they sold out unicorn ugh whatever crucifix cardigan.",
    photo_url: "http://res.cloudinary.com/dhh1nask4/image/upload/v1478720218/profile_images/oxjlkmkdhztkpfca4yia.jpg",
    small_photo_url: "https://res.cloudinary.com/dhh1nask4/image/upload/c_fill,h_310,w_310/v1478720218/profile_images/oxjlkmkdhztkpfca4yia.jpg"
  },{ first_name: 'Aaron',
    last_name: 'Hoffman',
    email: 'aaronhoffman@email.com',
    password: 'password',
    country: "United States",
    city: "Portland",
    postal_code: 97330,
    description: "Chartreuse four loko meh man braid, woke franzen farm-to-table.",
    about: "kombucha intelligentsia meditation fanny pack small batch truffaut af ramps godard bushwick. Typewriter vape messenger bag listicle. Twee mumblecore typewriter poutine, disrupt fap viral cronut tacos before they sold out unicorn ugh whatever crucifix cardigan.",
    photo_url: "http://res.cloudinary.com/dhh1nask4/image/upload/v1478720025/profile_images/mxm5g5gdp02guyc5njo3.jpg",
    small_photo_url: "https://res.cloudinary.com/dhh1nask4/image/upload/c_fill,h_310,w_310/v1478720088/profile_images/mvjrtkgzzzaou3ta3j9j.jpg"
  },{ first_name: 'Felicia',
    last_name: 'Burroughs',
    email: 'feliciaburroughs@email.com',
    password: 'password',
    country: "United States",
    city: "San Francisco",
    postal_code: 94105,
    description: "Chartreuse four loko meh man braid, woke franzen farm-to-table.",
    about: "kombucha intelligentsia meditation fanny pack small batch truffaut af ramps godard bushwick. Typewriter vape messenger bag listicle. Twee mumblecore typewriter poutine, disrupt fap viral cronut tacos before they sold out unicorn ugh whatever crucifix cardigan.",
    photo_url: "http://res.cloudinary.com/dhh1nask4/image/upload/v1478720403/profile_images/f7gngpmhjikf3rob1i9n.jpg",
    small_photo_url: "https://res.cloudinary.com/dhh1nask4/image/upload/c_fill,h_310,w_310/v1478720403/profile_images/f7gngpmhjikf3rob1i9n.jpg"
  },{ first_name: 'Ronald',
    last_name: 'Stoller',
    email: 'ronaldstoller@email.com',
    password: 'password',
    country: "United States",
    city: "San Francisco",
    postal_code: 94105,
    description: "Chartreuse four loko meh man braid, woke franzen farm-to-table.",
    about: "kombucha intelligentsia meditation fanny pack small batch truffaut af ramps godard bushwick. Typewriter vape messenger bag listicle. Twee mumblecore typewriter poutine, disrupt fap viral cronut tacos before they sold out unicorn ugh whatever crucifix cardigan.",
    photo_url: "http://res.cloudinary.com/dhh1nask4/image/upload/v1478720603/profile_images/btmqxfkipsiuhhdzgf8c.jpg",
    small_photo_url: "https://res.cloudinary.com/dhh1nask4/image/upload/c_fill,h_310,w_310/v1478720603/profile_images/btmqxfkipsiuhhdzgf8c.jpg"
  },{ first_name: 'Cassandra',
    last_name: 'Reyes',
    email: 'cassandrareyes@email.com',
    password: 'password',
    country: "United States",
    city: "San Francisco",
    postal_code: 94105,
    description: "Chartreuse four loko meh man braid, woke franzen farm-to-table.",
    about: "kombucha intelligentsia meditation fanny pack small batch truffaut af ramps godard bushwick. Typewriter vape messenger bag listicle. Twee mumblecore typewriter poutine, disrupt fap viral cronut tacos before they sold out unicorn ugh whatever crucifix cardigan.",
    photo_url: "http://res.cloudinary.com/dhh1nask4/image/upload/v1478720719/profile_images/hifllwl8bv9tqtizb4hr.jpg",
    small_photo_url: "https://res.cloudinary.com/dhh1nask4/image/upload/c_fill,h_310,w_310/v1478720719/profile_images/hifllwl8bv9tqtizb4hr.jpg"
  }
])

campaigns = Campaign.create([
  { user_id: 1,
    title: "Uber for Jetskis",
    tagline: "Blog sustainable 8-bit man braid you probably haven't heard of them.",
    funds_received: 240,
    goal_amount: 1000,
    card_image_url: "http://res.cloudinary.com/dhh1nask4/image/upload/v1478717293/campaign_images/thymgf1hpphzdivqgod8.jpg",
    pitch_image_url: "http://res.cloudinary.com/dhh1nask4/image/upload/v1478717207/profile_images/jbxv08cv9ffxqk5dps5v.jpg",
    campaign_overview: "Franzen man bun hammock subway tile, vinyl forage portland. Street art 8-bit artisan, woke four loko microdosing meggings. Readymade tumblr biodiesel, roof party man braid viral umami ethical af ugh bespoke listicle gochujang swag. Vape meggings four loko, skateboard beard disrupt fixie fingerstache bespoke sartorial schlitz flannel.",
    campaign_pitch: "Mustache freegan gochujang venmo, actually lo-fi put a bird on it. 8-bit mlkshk austin, tofu chambray tilde kickstarter artisan messenger bag. +1 four dollar toast tumeric, offal bitters microdosing migas chicharrones. Fanny pack scenester tattooed before they sold out shabby chic. Quinoa chambray salvia before they sold out edison bulb.",
    status: "published",
    location: "San Francisco, CA, United States",
    duration: "2016-12-04"
  },{ user_id: 1,
    title: "Tindr for Farmers",
    goal_amount: 2000,
    funds_received: 40,
    card_image_url: "http://res.cloudinary.com/dhh1nask4/image/upload/v1478717510/campaign_images/ovlz1a5teidurhfq5uzq.jpg",
    pitch_image_url: "http://res.cloudinary.com/dhh1nask4/image/upload/v1478717440/profile_images/hqywo7n5x46ozxcmd18a.jpg",
    tagline: "Normcore hot chicken polaroid photo booth. Salvia williamsburg yr paleo, godard hexagon.",
    campaign_overview: "Literally coloring book mumblecore, edison bulb brooklyn banh mi mustache bitters. 3 wolf moon church-key swag sartorial pitchfork cornhole. Beard iPhone post-ironic, wayfarers knausgaard tousled synth gastropub bicycle rights flannel glossier cardigan deep v crucifix williamsburg. Direct trade whatever vape irony copper mug.",
    campaign_pitch: "Gluten-free kogi plaid kitsch narwhal. Single-origin coffee pabst sriracha heirloom, aesthetic authentic literally ramps bushwick affogato tilde hashtag franzen XOXO mixtape. Jean shorts authentic next level, glossier put a bird on it direct trade chia.",
    status: "published",
    location: "San Francisco, CA, United States",
    duration: "2016-11-30"
  },{ user_id: 2,
    title: "Flikar",
    goal_amount: 2000,
    funds_received: 40,
    card_image_url: "http://res.cloudinary.com/dhh1nask4/image/upload/v1478717668/campaign_images/dlgfllcl3dfpnf3sghej.jpg",
    pitch_image_url: "http://res.cloudinary.com/dhh1nask4/image/upload/v1478717777/profile_images/b3wiyiwuvavdwsyo1bmi.jpg",
    tagline: "Schlitz before they sold out single-origin coffee mumblecore, brunch tumblr fanny pack.",
    campaign_overview: "Vinyl paleo salvia, occupy iPhone williamsburg artisan ennui jianbing subway tile semiotics edison bulb. Williamsburg tacos kombucha, salvia farm-to-table portland locavore irony scenester keffiyeh pork belly thundercats banjo. Fingerstache hammock poutine, street art gastropub kickstarter edison bulb slow-carb heirloom blog locavore drinking vinegar yr.",
    campaign_pitch: "Bushwick YOLO stumptown mlkshk, master cleanse tilde flexitarian readymade vexillologist pabst knausgaard slow-carb celiac leggings. La croix copper mug post-ironic cliche tacos normcore. Art party heirloom salvia DIY succulents 90's, microdosing vinyl umami dreamcatcher. Disrupt aesthetic master cleanse live-edge hexagon normcore, tattooed chartreuse butcher plaid fam lumbersexual 90's.",
    status: "published",
    location: "Portland, CA, United States",
    duration: "2016-12-02"
  },{ user_id: 3,
    title: "Klerpit",
    goal_amount: 1000,
    funds_received: 680,
    card_image_url: "http://res.cloudinary.com/dhh1nask4/image/upload/v1478718098/campaign_images/yhgwehyvtkzfpsfumamk.jpg",
    pitch_image_url: "http://res.cloudinary.com/dhh1nask4/image/upload/v1478718067/profile_images/o4mnftl3i3zlxvint7ne.jpg",
    tagline: "Kinfolk skateboard brooklyn prism, selvage authentic fixie vegan twee flannel craft beer bushwick.",
    campaign_overview: "Heirloom banjo put a bird on it, XOXO chicharrones la croix tote bag narwhal fixie viral coloring book. Cold-pressed wolf cray, mlkshk stumptown meditation echo park XOXO 90's tbh chia. Intelligentsia hexagon austin vegan, gastropub bushwick kale chips gluten-free cardigan celiac scenester poke direct trade slow-carb.",
    campaign_pitch: "Tumblr mustache keffiyeh vegan, kickstarter squid vinyl. Pop-up la croix fap fanny pack. Unicorn truffaut godard portland 3 wolf moon blog. Cornhole +1 pabst, neutra 8-bit sustainable wayfarers tbh tacos street art shoreditch meggings. Four dollar toast typewriter williamsburg, intelligentsia quinoa deep v food truck flannel keytar. Meditation live-edge poutine, cred next level lumbersexual bespoke helvetica farm-to-table. Ethical keytar everyday carry, pabst ennui cliche master cleanse keffiyeh vegan celiac raclette.",
    status: "published",
    location: "San Francisco, CA, United States",
    duration: "2016-11-28"
  },{ user_id: 4,
    title: "iBanjo",
    goal_amount: 4000,
    funds_received: 2140,
    card_image_url: "http://res.cloudinary.com/dhh1nask4/image/upload/v1478718368/campaign_images/mdcbvn9eojwqbdm8vdvj.jpg",
    pitch_image_url: "http://res.cloudinary.com/dhh1nask4/image/upload/v1478718382/profile_images/bu3crt7ycwxnk01eoweh.jpg",
    tagline: "Plaid portland pabst next level umami, woke knausgaard literally VHS tote bag.",
    campaign_overview: "Slow-carb chia dreamcatcher, disrupt butcher bitters drinking vinegar umami cardigan raw denim portland organic. Biodiesel iceland flexitarian wolf glossier distillery, pour-over wayfarers bespoke slow-carb. Selfies celiac hot chicken four dollar toast, scenester austin salvia before they sold out DIY. Scenester af lumbersexual sriracha shabby chic knausgaard.",
    campaign_pitch: "Chia hell of street art small batch echo park edison bulb. Truffaut pinterest flexitarian, snackwave shoreditch mlkshk tbh fixie tilde. Pinterest selfies biodiesel meh 8-bit hot chicken. VHS tilde put a bird on it, asymmetrical meggings keytar actually irony chia small batch normcore farm-to-table. Wayfarers pitchfork vegan, gastropub twee XOXO asymmetrical mustache.",
    status: "published",
    location: "New York, NY, United States",
    duration: "2016-11-24"
  },{ user_id: 5,
    title: "Vuzoo",
    goal_amount: 40000,
    funds_received: 12600,
    card_image_url: "http://res.cloudinary.com/dhh1nask4/image/upload/v1478718780/campaign_images/kguahrb8rxumqztcq8el.jpg",
    pitch_image_url: "http://res.cloudinary.com/dhh1nask4/image/upload/v1478718770/profile_images/vt1iohs9nnnoexbmxvet.jpg",
    tagline: "Humblebrag asymmetrical ethical sustainable put a bird on it listicle flexitarian knausgaard.",
    campaign_overview: "Slow-carb chia dreamcatcher, disrupt butcher bitters drinking vinegar umami cardigan raw denim portland organic. Biodiesel iceland flexitarian wolf glossier distillery, pour-over wayfarers bespoke slow-carb. Selfies celiac hot chicken four dollar toast, scenester austin salvia before they sold out DIY. Scenester af lumbersexual sriracha shabby chic knausgaard.",
    campaign_pitch: "Chia hell of street art small batch echo park edison bulb. Truffaut pinterest flexitarian, snackwave shoreditch mlkshk tbh fixie tilde. Pinterest selfies biodiesel meh 8-bit hot chicken. VHS tilde put a bird on it, asymmetrical meggings keytar actually irony chia small batch normcore farm-to-table. Wayfarers pitchfork vegan, gastropub twee XOXO asymmetrical mustache.",
    status: "published",
    location: "Portland, OR, United States",
    duration: "2016-12-08"
  },{ user_id: 6,
    title: "Listable",
    goal_amount: 8000,
    funds_received: 8400,
    card_image_url: "http://res.cloudinary.com/dhh1nask4/image/upload/v1478719022/campaign_images/keflaqlvmkgevtjdudlw.jpg",
    pitch_image_url: "http://res.cloudinary.com/dhh1nask4/image/upload/v1478719014/campaign_images/xwhbwpubdtbj2qct8xde.jpg",
    tagline: "Green juice brooklyn offal, street art XOXO trust fund actually fashion axe cronut.",
    campaign_overview: "Slow-carb chia dreamcatcher, disrupt butcher bitters drinking vinegar umami cardigan raw denim portland organic. Biodiesel iceland flexitarian wolf glossier distillery, pour-over wayfarers bespoke slow-carb. Selfies celiac hot chicken four dollar toast, scenester austin salvia before they sold out DIY. Scenester af lumbersexual sriracha shabby chic knausgaard.",
    campaign_pitch: "Chia hell of street art small batch echo park edison bulb. Truffaut pinterest flexitarian, snackwave shoreditch mlkshk tbh fixie tilde. Pinterest selfies biodiesel meh 8-bit hot chicken. VHS tilde put a bird on it, asymmetrical meggings keytar actually irony chia small batch normcore farm-to-table. Wayfarers pitchfork vegan, gastropub twee XOXO asymmetrical mustache.",
    status: "published",
    location: "San Francisco, CA, United States",
    duration: "2016-12-08"
  },{ user_id: 7,
    title: "jQuirky",
    goal_amount: 2000,
    funds_received: 620,
    card_image_url: "http://res.cloudinary.com/dhh1nask4/image/upload/v1478719264/campaign_images/kcjzdrnil3fiwl53hsmy.jpg",
    pitch_image_url: "http://res.cloudinary.com/dhh1nask4/image/upload/v1478719275/campaign_images/zmsxdihgknldtg6zneqt.jpg",
    tagline: "Edison bulb kickstarter readymade twee, heirloom glossier live-edge activated.",
    campaign_overview: "Actually small batch whatever asymmetrical, pickled narwhal vinyl gastropub ramps tumblr art party ugh. Swag 3 wolf moon marfa chartreuse irony. Heirloom chartreuse succulents, occupy banjo blog godard gastropub everyday carry kitsch direct trade four dollar toast. Brunch etsy man bun, freegan williamsburg shabby chic venmo vice swag blue bottle cliche.",
    campaign_pitch: "Banjo drinking vinegar 8-bit neutra, vape hexagon mixtape bitters fingerstache edison bulb. Direct trade master cleanse dreamcatcher, vinyl green juice selvage austin squid taxidermy. Pour-over lomo slow-carb iPhone actually thundercats food truck, hammock banh mi ramps disrupt williamsburg waistcoat. Bespoke typewriter wolf, vegan hella banh mi keffiyeh +1 slow-carb. Authentic cronut williamsburg, asymmetrical you probably haven't heard of them pabst direct trade post-ironic kitsch waistcoat blue bottle microdosing.",
    status: "published",
    location: "San Francisco, CA, United States",
    duration: "2016-11-30"
  }
])

rewards = Reward.create([
  { campaign_id: 1,
    price: 50,
    title: "Snackwave mlkshk",
    description: "Franzen man bun hammock subway tile, vinyl forage portland. Street art 8-bit artisan.",
    number_available: 30,
    inventory: 30,
    estimated_delivery: "2017-01-02",
    requires_shipping: true
  },{ campaign_id: 1,
    price: 80,
    title: "YOLO pitchfork",
    description: "Activated charcoal poutine chambray air plant beard, irony portland kombucha kinfolk humblebrag.",
    requires_shipping: false
  },{ campaign_id: 1,
    price: 150,
    title: "Hashtag master cleanse",
    description: "Etsy chartreuse hella truffaut neutra, unicorn live-edge brooklyn small batch drinking vinegar.",
    requires_shipping: false
  },{ campaign_id: 2,
    price: 40,
    title: "Pinterest swag fanny pack",
    description: "Franzen man bun hammock subway tile, vinyl forage portland. Street art 8-bit artisan.",
    number_available: 30,
    inventory: 30,
    estimated_delivery: "2017-02-24",
    requires_shipping: true
  },{ campaign_id: 2,
    price: 100,
    title: "Heirloom thundercats",
    description: "Activated charcoal poutine chambray air plant beard, irony portland kombucha kinfolk humblebrag.",
    requires_shipping: false
  },{ campaign_id: 2,
    price: 240,
    title: "Craft beer man braid",
    description: "Etsy chartreuse hella truffaut neutra, unicorn live-edge brooklyn small batch drinking vinegar.",
    requires_shipping: false
  },{ campaign_id: 3,
    price: 50,
    title: "Tote bag woke readymade",
    description: "Franzen man bun hammock subway tile, vinyl forage portland. Street art 8-bit artisan.",
    number_available: 30,
    inventory: 30,
    estimated_delivery: "2017-06-10",
    requires_shipping: true
  },{ campaign_id: 3,
    price: 80,
    title: "Poke trust fund",
    description: "Activated charcoal poutine chambray air plant beard, irony portland kombucha kinfolk humblebrag.",
    requires_shipping: false
  },{ campaign_id: 3,
    price: 150,
    title: "Before they sold out",
    description: "Etsy chartreuse hella truffaut neutra, unicorn live-edge brooklyn small batch drinking vinegar.",
    requires_shipping: false
  },{ campaign_id: 4,
    price: 200,
    title: "Freegan pork belly brunch",
    description: "Franzen man bun hammock subway tile, vinyl forage portland. Street art 8-bit artisan.",
    number_available: 30,
    inventory: 30,
    estimated_delivery: "2017-01-18",
    requires_shipping: true
  },{ campaign_id: 4,
    price: 450,
    title: "Literally man bun brunch",
    description: "Activated charcoal poutine chambray air plant beard, irony portland kombucha kinfolk humblebrag.",
    requires_shipping: false
  },{ campaign_id: 5,
    price: 50,
    title: "Craft beer hot chicken",
    description: "Franzen man bun hammock subway tile, vinyl forage portland. Street art 8-bit artisan.",
    number_available: 30,
    inventory: 30,
    estimated_delivery: "2018-01-04",
    requires_shipping: true
  },{ campaign_id: 5,
    price: 80,
    title: "Yuccie raw denim affogato mumblecore",
    description: "Activated charcoal poutine chambray air plant beard, irony portland kombucha kinfolk humblebrag.",
    requires_shipping: false
  },{ campaign_id: 5,
    price: 150,
    title: "Selfies cronut",
    description: "Etsy chartreuse hella truffaut neutra, unicorn live-edge brooklyn small batch drinking vinegar.",
    requires_shipping: false
  },{ campaign_id: 5,
    price: 500,
    title: "Before they sold out",
    description: "Etsy chartreuse hella truffaut neutra, unicorn live-edge brooklyn small batch drinking vinegar.",
    requires_shipping: false
  },{ campaign_id: 6,
    price: 80,
    title: "Poke trust fund",
    description: "Activated charcoal poutine chambray air plant beard, irony portland kombucha kinfolk humblebrag.",
    requires_shipping: false
  },{ campaign_id: 6,
    price: 150,
    title: "Before they sold out",
    description: "Etsy chartreuse hella truffaut neutra, unicorn live-edge brooklyn small batch drinking vinegar.",
    requires_shipping: false
  },{ campaign_id: 7,
    price: 200,
    title: "Freegan pork belly brunch",
    description: "Franzen man bun hammock subway tile, vinyl forage portland. Street art 8-bit artisan.",
    number_available: 30,
    inventory: 30,
    estimated_delivery: "2017-04-18",
    requires_shipping: true
  },{ campaign_id: 7,
    price: 450,
    title: "Literally man bun brunch",
    description: "Activated charcoal poutine chambray air plant beard, irony portland kombucha kinfolk humblebrag.",
    requires_shipping: false
  },{ campaign_id: 7,
    price: 650,
    title: "Craft beer hot chicken",
    description: "Franzen man bun hammock subway tile, vinyl forage portland. Street art 8-bit artisan.",
    number_available: 30,
    inventory: 30,
    estimated_delivery: "2017-02-24",
    requires_shipping: true
  },{ campaign_id: 8,
    price: 250,
    title: "Literally man bun brunch",
    description: "Activated charcoal poutine chambray air plant beard, irony portland kombucha kinfolk humblebrag.",
    requires_shipping: false
  },{ campaign_id: 8,
    price: 650,
    title: "Craft beer hot chicken",
    description: "Franzen man bun hammock subway tile, vinyl forage portland. Street art 8-bit artisan.",
    number_available: 30,
    inventory: 30,
    estimated_delivery: "2017-02-18",
    requires_shipping: true
  }
])

contributions = Contribution.create([
  { user_id: 1,
    campaign_id: 3,
    amount: 50
  },{ user_id: 1,
    campaign_id: 5,
    amount: 100
  },{ user_id: 1,
    campaign_id: 7,
    amount: 50,
    reward_id: 1
  },{ user_id: 1,
    campaign_id: 7,
    amount: 100,
    reward_id: 5
  },{ user_id: 2,
    campaign_id: 1,
    amount: 50
  },{ user_id: 2,
    campaign_id: 1,
    amount: 180
  },{ user_id: 2,
    campaign_id: 6,
    amount: 350
  },{ user_id: 4,
    campaign_id: 1,
    amount: 20
  },{ user_id: 4,
    campaign_id: 2,
    amount: 280
  },{ user_id: 4,
    campaign_id: 7,
    amount: 140
  },{ user_id: 4,
    campaign_id: 5,
    amount: 400
  },{ user_id: 5,
    campaign_id: 1,
    amount: 20
  },{ user_id: 5,
    campaign_id: 2,
    amount: 280
  },{ user_id: 4,
    campaign_id: 4,
    amount: 140
  },{ user_id: 6,
    campaign_id: 2,
    amount: 400
  },{ user_id: 6,
    campaign_id: 1,
    amount: 180
  },{ user_id: 7,
    campaign_id: 6,
    amount: 350
  }
])
