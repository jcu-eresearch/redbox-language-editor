# ReDBox Language Editor

[![Deployment on GitHub Pages](https://github.com/jcu-eresearch/redbox-language-editor/workflows/Deploy-GitHubPages/badge.svg)](https://github.com/jcu-eresearch/redbox-language-editor/actions?query=workflow%3ADeploy-GitHubPages)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project automatically deploys itself to GitHub Pages via GitHub Actions
to be hosted at https://jcu-eresearch.github.io/redbox-language-editor/.

## Features

* Import 2-column key-value spreadsheets or CSV language files
* Automatically enables TinyMCE visual WYSIWYG editor when HTML is detected, or manually enable
  when HTML is wanted
* Ability to download results as Excel or CSV files
* Runs fully in browser - no server side code!
* Automatic cleanup of HTML in messages on editing single fields or the whole document
* Bootstrap 4 themed: currently uses [JCU CookBook](https://github.com/jcu/cookbook) for theming
  but works with any theme compatible with [react-bootstrap](react-bootstrap.github.io/)

## Setup

Clone this repository and run `yarn` to set up the environment.

To start the development server, run `yarn start`.

To deploy, commit your changes and push to GitHub to start the automatic
deployment process.

## Code standards

All code written in this project is linted via `eslint` and its default
configuration with CRA and formatting is carried out automatically on commit
via `prettier`.

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

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
