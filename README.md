# NetFlix GPT

- create react app
- configure tailwindcss
- Header
- Routing
- Login Form
- Sign up Form
- Form validation
- firebase setup
- firebase deploy app to production
- created sign Up Account
- Implement Sign In user api
- created Redux store
- Implemented Sign out
- Update profile
- BugFix:- when user Sign Up, it won't update the displayName and photoURL
- BugFix:- if user not logged In then redirect /browse page to login and login page and vice-versa.
- unsubscribe to onAuthStateChanged when it unmounts
- constants URL puts in one constants.js file
- Register TMDB API now playing movies list API
- Custom Hook for Now Playing Movies
- Created movieslice
- update the store with movies data
- planning for MainContainer and Secondary container
- Fetch DAta fro Trailer video
- update store with trailer video Data
- Embedded the youtube and make it autoplay and mute
- Tailwind Classes to make MainContainer look awesome
- Build secondary component
- created MovieList
- build Moviecard
- TMDB image CDN URL
- made the browser page amazing with tailwind css
- created useplayingNOw , usepopularMovies, useTopRatedMovies, useUpcomingMovies custom hook
- Creating Gpt Search functionality
- Gpt search page
- adding multi language feature
- platform.openai.com
- gpt search API calls
- fetched getMovieSuggestions from TMDB
- created gptSlice added data
- Reused Movie List components to make movie suggestions container
- Added .env file
- Memoization Technique to reduce the number of API calls
- made our site Responsive
- making Nested Routing for Header available to everypage
# Features

- Login/Signup Form
- redirect to Browse page
- Browse(after authentication)
  - Header
  - Main Movie
  - Tailer in Background
  - Title & Description
  - Movie Suggestions
  - Movielists \* N
- NetFlix GPT
- Search Bar
- Movie Suggestions

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
