## Demo:

TBC

Hosted on GAE

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner.

### `yarn build`

Builds the app for production to the `./next` folder.

### `yarn start`

Starts the next js server.

## Project Structure

This web app is server-side rendered, this will help with SEO and sharing links on social media. However this will work once the correct head tags are set up on each page still TODO.

The main aim is to build up a design system using styled components and for each component to have its own tests and snapshots and styling in the same component directory.

**Pages**

Pages are special components which are rendered for specific routes, they shouldn't contain any styles they should only contain other components

Pages also act as the containers because of the way that next.js works. For SSR to have the data before a page loads it will run a function to grab and inject the data into the page, this data will either get sent to a context store of ripple out to the components via props

**Components**

Components are the main building blocks of the this application. Ideally each component should live in its own folder and contain an index file. This folder should also contain a styles file where styles have been separated out. Each component should contain its on tests folder for testing different states and snapshots for regression testing.

**Contexts**

Contexts are where shared state is stored

**Hooks**

Reusable behaviors, such as listening to dom events and returning values or, URL requests and returning values.

**Utils**

General methods can be used across all other files.

**Theme**

In order to use standardized colours fonts and spacing, no magic numbers should be used in styles all value should derive from the theme as much as possible

**URLs**

When creating links and route all urls are stored in an object here.
