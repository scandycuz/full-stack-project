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
  - ProfileCampaigns
  - ProfileContributions
  - EditProfile

**CampaignShowContainer**
 - CampaignShow
  * CampaignComments
  * CampaignBackers
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
| "/profiles/:id" | | | "ProfileContainer" |
| "/profiles/:id/campaigns" | | | "ProfileCampaigns" |
| "/profiles/:id/contributions" | | | "ProfileContributions" |
| "/profiles/:id/edit" | | | "EditProfile" |
| "projects/:id" | | | "CampaignShowContainer" |
| "projects/:id/comments" | | | "CampaignComments" |
| "projects/:id/backers" | | | "CampaignBackers" |
