# Running the Aplication

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `yarn install` or `npm install`
Installs all the required dependencies.

### `yarn start` or `npm run start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test` or `npm run test`
Launches the test runner in the interactive watch mode.<br />

## Application Details

The application is loaded with a default set of Routes. The Routes are plotted using [react-digraph] in a canvas in a default position. Each node in the graph represents a town and the arrows between two nodes represents the path and the delivery cost between those nodes. You can always change the position of the nodes by clicking and dragging the nodes in the graph to your liking. The updated positions will be respected and maintained by the app.


### Routes Section
We can also add new routes in the Routes section of the app. Routes have to be of the format 'AB1' which is read as a route between town 'A' and town 'B' with cost of 1. The added new routes will be automatically reflected in the application.

![Routes Section](/demoes/RoutesDemo.gif)

### Case 1 Section
This section helps up in calculating the delivery cost for a given delivery route. The delivery routes are to be represented as towns separated by hyphen. For example a delivery route from town A to town B to town C will be represented as A-B-C.
The delivery cost for the given routes will be populated automatically when valid routes are entered.

![Case 1 Section](/demoes/Case1Demo.gif)

### Case 2 Section 
This section helps us in calculating the number of possible delivery routes between any two given towns. The number of routes are populated autmatically when the towns are entered. We can also set a maximum number of towns constraint, it is set as 5 by default.

![Case 2 Section](/demoes/Casetwo.gif)
