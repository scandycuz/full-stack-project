 # API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users/:id`

### Session

- `GET /api/session`
- `POST /api/session`
- `DELETE /api/session`

### Campaigns

- `GET /api/campaigns`
  - Campaigns index/search
  - accepts a string query param to list matching campaigns
- `POST /api/campaigns`
- `GET /api/campaigns/:id`
- `PATCH /api/campaigns/:id`
- `DELETE /api/campaigns/:id`

### Contributions

- `POST /api/campaigns/:id/contributions`

### Rewards

- `GET /api/campaigns/:id/rewards`
- `POST /api/campaigns/:id/rewards`
- `GET /api/campaigns/:id/rewards/:rewardId`
- `PATCH /api/campaigns/:id/rewards/rewardId`
- `DELETE /api/campaigns/:id/rewards/:rewardId`

### Comments

- `POST /api/campaigns/:id/comments`
- `PATCH /api/campaigns/:id/comments/:comment_id`
- `DELETE /api/campaigns/:id/comments/:comment_id`
