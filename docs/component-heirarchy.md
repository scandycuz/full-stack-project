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

**CampaignFormContainer**
 - CampaignForm

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
|-------|-------------|
| "/" | "HomeContainer" | "CampaignSlider" | "App" |
| "/search" | | | "SearchContainer" |
| "/start-a-campaign" | | | "StartACampaignFormContainer" |
| "/campaigns/:id/edit" | | | "EditCampaignForm" |
| "/users/:id" | | | "ProfileContainer" |
| "projects/:id" | | | "CampaignShowContainer" |









//
