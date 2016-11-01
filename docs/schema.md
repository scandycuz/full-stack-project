# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
first_name      | string    | not null, indexed
last_name       | string    | not null, indexed
country         | string    |
city            | string    |
postal_code     | integer   |
description     | string    |
about           | text      |
photo_url       | string    |

## campaigns
column name       | data type | details
------------------|-----------|-----------------------
id                | integer   | not null, primary key
user_id           | integer   | not null, foreign key (references user), indexed
title             | string    | not null
tagline           | string    | not null
funds_received    | integer   |
goal_amount       | integer   | not null
card_image_url    | string    | not null
pitch_video_url   | string    |
pitch_image_url   | string    |
video_overlay_url | string    |
campaign_overview | text      | not null
campaign_pitch    | text      | not null


## contributions
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
user_id   | integer   | not null, foreign key (references user), indexed
campaign_id  | integer   | not null, foreign key, (references campaign), indexed
reward_id    | integer   | not null, foreign key, (references reward), indexed
amount       | integer   | not null

## rewards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
campaign_id | integer   | not null, foreign key (references campaign)
amount      | integer   | not null
title       | string    | not null
description | text      |
reward_date | date      | not_null
