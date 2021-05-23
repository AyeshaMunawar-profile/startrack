# Star Track

Star Track is a React app that allows a user to add an image by adding the url of the image and our app with the help of
an image recognition API will detect and show if there are any celebrity faces in the image and also tells us which
celebrity it is . This app has following features:

1. Sign-up and Login
2. Add image to the app using its **URL**
3. Do **input validation** on the URL using fetch API
4. Detect any celebrity face in the image using [**Clarifai API**](https://www.clarifai.com/)
5. Show a rectangle around the faces being detected in the image
6. Keep track of the number of times a user has used our app for face recognition

# Technologies used

1. [**REACT.JS**](https://reactjs.org/) for front end development
2. **NODE.JS** and **EXPRESS.JS** for backend development
3. **POSTGRE SQL** for database
4. [**React Particles API**](https://www.npmjs.com/package/react-tsparticles) for showing particles in the background
5. [**React Tilt API**](https://www.npmjs.com/package/react-tilt) for adding a 3d look (i.e glare , perspective etc.)
   and animation related to rotation in 3d space to the logo
6. [**Clarifai API**](https://www.clarifai.com/) for detecting the celebrity face from an image using the url of the
   image
7. Use [**Reactstrap**](https://reactstrap.github.io/) and [**Bootstrap**](https://getbootstrap.com/) for UI
8. Use [**React Axios**](https://www.npmjs.com/package/axios) A promise based HTTP client for the browser and node.js

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved
here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved
here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved
here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved
here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved
here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved
here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
