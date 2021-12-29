# About

Muso-task is an application designed to help freelance musicians connect with eachother and to help them find gig opportunities in performing, recording or teaching.
This application is a full-stack application using React, React-Router, SASS, Node, Express, mySQL, Knex, Passport OAuth, Google Map API as well as other front-end essentials.

## Goals and Requirements

My goal was to build a full stack application from scratch. To do this I used React, Express, Node.js, mySQL and knex. Additionally, I also used an API from Google Maps to show the gigs as markers on a map of Toronto. Clicking on these markers will give you info about the gig, who posted it, the venue and the date of the gig.

## Key Learnings

1. Learning how to write queries in knex to get data from tables and how to use foreign keys to obtain data from both tables in the same query.
2. Using React Hooks, which weren't covered in-depth during our course.
3. Using the Google Maps API to set markers on the map and Autocomplete inputs on my forms.
4. Axios requests
5. Gitflow and working with different branches while developing

## Installation
test

#### Clone

1. Clone this repo to your local machine using `git@github.com:Drewshka/muso-task.git`

#### Setup

1. Navigate to the client folder in your terminal and install npm like this:

```
 $ npm install
```

2. Navigate to the server folder in your terminal and install npm like this:

```
 $ npm install
```

3. You will need to create an app in github to use the sign-in functionality https://github.com/settings/applications/new

4. You will need a `SESSION_SECRET`, `CLIENT_ID` and `CLIENT_SECRET` as seen in `.env.sample` in the `server` folder.

#### API Keys

For this application to work, please create a Google Map API Key, and ensure that the two services below are enabled... otherwise it won't work! This API key must be in the environment variable `REACT_APP_GOOGLE_MAPS_API_KEY`. You will see how to set this in the `.env.sample` folder in the client side.

    -Maps JavaScript API
    -Places API
    -Geocoding API

#### Links

1. Google Maps React: https://www.npmjs.com/package/@react-google-maps/api
2. Google Places React: https://www.npmjs.com/package/use-places-autocomplete
3. Reach Combobox: https://reacttraining.com/reach-ui/combobox/
4. Snazzy Maps Style: https://snazzymaps.com/style/8097/wy
5. Browser Geolocation: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition

#### Acknowledgements

-To the Educators and Teaching Assistants for the Palm Cohort and all staff at Brainstation - thanks for your support, expertise and encouragement!
