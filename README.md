# mobile-shopping

App for searching and adding mobiles to shopping cart. The purpose of this application is to provide a solution to the problem posed by Zara.com.

This application will finally avoid the use of Redux by providing a solution through API contexts.

Persistence has been achieved by using localstorage.

On the other hand, if Redux had been used, the data would have been persisted using Redux persist, but as mentioned above, redux has not been used because it has not been deemed necessary.

# Structure used:

- api
- assets
- components
- config
- contexts
- hooks
- store
- styles
- utils
- views

## Heads up

### Views

The views, are decomposed into several files:

- index.jsx: They obtain the necessary props from a custom hook for the presentational layer or view. Contains the call to the control logic.
- view.jsx: are purely visual components. Receive props and handle events. In this way, they could be reused in other parts of the application if necessary.
- style.scss: contain styles of the view

### Config

Contains environment and configuration variables and a fetcher singleton model. Applying SOLID principles, the api calling methodology is abstracted to a fetcher class. Thus, if in the future you want to use another fetcher, the application would be free of changes, being the changes concentrated in that class.

A hook has been developed for the fetching topic: `useRequest`.

### Contexts

There are two contexts. The AppStateContext contains the state of the application and makes use of useReducer to emulate the behavior of Redux

On the other hand, PersistContext is using to persist the state of the application and provides access to persistent data.

# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This application is composed of several methodologies or framewors:

React
React Route to enrouting\
esLint\
Prettier\
...

Possible improvements:

- Apply [react-virtualized](https://www.npmjs.com/package/react-virtualized) for listing. This way there would be less rows loaded in the DOM.

## Step-by-step instructions for operation

The application needs to have node (e.g v18.14.0) and npm (e.g. 9.3.1 ) installed

1. Run `npm install` to install dependencies and configuration
2. Run `npm start `

Note: There is data persistence, so that if it already exists in the localstorage it will not be requested again from the server.

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

### `npm run lint`

Execute and pass Eslint to the project. If execute, the `npm run lint:fix` command automatically fixes fixable bugs.\

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
