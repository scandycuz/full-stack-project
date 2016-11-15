# StartupGoGo

[StartupGoGo live][site]

[site]: http://www.startupgogo.xyz

StartupGoGo is a full-stack web application inspired by IndieGogo.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.

## Features & Implementation

### Campaign Rendering and Editing

In the backend, startup pitches are stored in a table in the database, with columns for each attribute. The home page of the site contains the pitch index, and displays Startup pitches currently active on the site.

Both the `CampaignIndexItems` on the home page and in the individual `CampaignShow` components contain a `GoalProgress` component. This component uses the Pitch's `funds_received` and `goal_amount` attributes to create a dyamic visual representation of the Pitch's progress towards the goal.

![image of campaign detail][docs/wireframes/View-Campaign.png]

Code to create the dynamic style attribute for the progress bar in the render method of the `GoalProgress` component:

```javascript
const fundsReceived = (this.props.fundsReceived) ? this.props.fundsReceived : 0;
const goalAmount = this.props.goalAmount;

const style = {
  width: fundsReceived / goalAmount * 100 + "%"
}
```

Pitch creation is undertaken utilizing a multi-part form. The user first selects 'Pitch a Startup', and enters the goal amount and title for the Campaign. This creates a Pitch and sets the `status` to `draft`. The user can then fill in additional information for the Pitch, and when they are ready, select 'Review and Publish'. This publishes the Pitch and makes it accessible from the home page.

### Profiles

Each user's details are kept in a table in the database. In addition to the standard user information (`user_id`, `password_digest`, `session_token`, etc...), the `Users` table in the database also contains all of the information pertaining to that user's profile. When the user signs up, they are only required to fill in their first name, last name, email, and password information, however, once succesfully logged in, users have access to a profile page, where they can access the `ProfileEdit` component and fill in additional information such as a profile image and description.

Component content is dynamically altered based on the current user's status. For example, if a user is not logged in, they will never have access to `ProfileEdit` and `CampaignEdit` components. If a user is logged in and views their own Pitch or Profile, they will have access to the `ProfileEdit` and `CampaignEdit` components, as well as a menu bar near the top of the screen allowing them to switch between the View and Edit components.

![image of campaign detail][docs/wireframes/Edit-Campaign.png]

This is done by dynamically rendering the component content and using router redirects based on the current users status.

### Rewards and Contributions

Users can contribute to Startup Pitches from that pitch's `CampaignShow` component. Any amount contributed by a user will be added to that Pitches `funds_received` attribute in the database, and the `CampaignShow` element will dynamically re-render to register the contribution.

Startup Pitches also have rewards that can be added, removed, and edited by a user through that pitch's `CampaignEdit` component. Instead of making a standard contribution, a user can elect to choose one of that Campaign's rewards. The user contributes an amount equal to that reward's `price` attribute to receive the reward. The rewards users have received are tracked in the `ProfileShow` component. The `CampaignShow` component also keeps track of users who have backed that Campaign.

## Future Directions for the Project

In addition the the already implemented features, I plan to continue to work on this project and add the additional elements below.

### Search

Searching Startup Pitches would be a very useful element for the app. I will add a search bar to the header that will send an ajax call to the RESTful API based on the user's query. The results would render in a new `CampaignSearchIndex` component with its own route. I would also like to add lazy loading to the `CampaignSearchIndex` component, along with additional seed data to better demonstrate the feature.

### Categories

I will also add categories to the app as well. Users will be able to view the Startup Pitches for specific categories. There would also be a `CategoryIndex` component on the home page that allowed users to quickly link to an index of for a particular category.
