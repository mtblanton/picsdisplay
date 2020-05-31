This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Setup

To make actual API requests instead of getting `exampleresponse.json` every time, copy `.env.local.template` and rename it to `.env.local`. Replace `<YOUR_API_KEY_HERE>` with a Pixabay API key.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches cypress in non-interactive mode. Make sure the application is started and running on port 3000, otherwise this won't work!

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run cy:open`

Opens Cypress in interactive mode. This will let you see the tests run on the webpage. Like with `yarn test`, make sure you have the application started and running on port 3000!

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
