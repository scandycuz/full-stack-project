## Component Hierarchy

**App**

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Header
 - Sidebar

**CampaignSliderContainer**
 - CampaignSlider
  * CampaignIndexItem

**SearchResultsContainer**
 - Search
 - CampaignIndex

**StartACampaignFormContainer**
 - StartACampaignForm

**EditCampaignFormContainer**
 - EditCampaignForm

**ProfileContainer**
 - Profile
  - ProfileTabs
  - EditProfile

**CampaignShowContainer**
 - CampaignShow
  * CampaignTabs
  * CampaignRewards

**Header**
 - HeaderSearch

**Search**

**CampaignIndex**
 - CampaignIndexItem

## Routes

|Path   | IndexRoute | IndexRedirect | Component   |
|-------|------------|---------------|-------------|
| "/" | "HomeContainer" | "CampaignSliderContainer" | "App" |
| "/search" | | | "SearchContainer" |
| "/start-a-campaign" | | | "StartACampaignFormContainer" |
| "/campaigns/:id/edit" | | | "EditCampaignFormContainer" |
| "/users/:id" | | | "ProfileContainer" |
| "projects/:id" | | | "CampaignShowContainer" |
