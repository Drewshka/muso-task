<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify) -->

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

### Installation

#### Clone

-Clone this repo to your local machine using `git@github.com:Drewshka/muso-task.git`

#### Setup

1. Navigate to the client folder in your terminal and install npm like this:

```
 $ npm install
```

2. Navigate to the server folder in your terminal and install npm like this:

```
 $ npm install
```

#### API Keys

For this application to work, please create a Google Map API Key, and ensure that the two services below are enabled... otherwise it won't work! This API key must be in the environment variable `REACT_APP_GOOGLE_MAPS_API_KEY`. You will see how to set this up in the `.env.sample` folder in the client side.

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
