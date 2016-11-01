
```js
{
  currentUser: {
    id: 1,
    email: "user@gmail.com",
    firstname: "User",
    last_name: "Smith"
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createCampaign: {errors: ["title can't be blank"]}
  },
  profile: {
    user_id : 1,
    email: "user@gmail.com",
    first_name: "User",
    last_name: "Smith",
    country: "United States",
    city: "San Francisco",
    postal_code: "integer",
    description: "I enjoy getting funds from people.",
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    photo_url: "assets/profile_images/user_24_profile.png",
  }
  campaigns: {
    1: {
      id: 1,
      user_id: 2,
      title: "Uber for Jetskis",
      goal_amount: 1000,
      funds_received: 240,
      card_image_url: "assets/campaign_card_images/campaign_1_card.png",
      tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  },
  campaign_show: {
    id: 1,
    user_id: 2,
    title: "Uber for Jetskis",
    goal_amount: 1000,
    funds_received: 240
    card_image_url: "assets/campaign_card_images/campaign_1_card.png",
    pitch_image_url: "assets/campaign_pitch_images/campaign_1_pitch.png",
    pitch_video_url: "https://vimeo.com/120469122",
    video_overlay_url: "assets/campaign_overlay_images/campaign_1_overlay.png",
    tagline: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    campaign_overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    campaign_pitch: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rewards: {
      1: {
        id: 1,
        amount: 25,
        title: "Be a Pal!",
        description: "Receive a 10% discount on your first Jetskuber!",
        num_claimed: 14,
        reward_date: "2016-11-24"
      }
    }
  },
  contributions: {
    1: {
      id: 1,
      user_id: 1,
      campaign_id: 2,
      reward_id: 12,
      amount: 120
    },
    2: {
      id: 2,
      user_id: 1,
      campaign_id: 3,
      reward_id: 24,
      amount: 80
    }
  },
  search_query: "jetskis"
}
```
