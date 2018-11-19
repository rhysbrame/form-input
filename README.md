# A simple React form

A React web app for entering details and getting back a JSON object.

Components are tested with Jest using enzyme.

## Possible improvements

- We could have used some proptypes on the two main components for clarity.
- The submit button is disabled when there invalid fields but the console still logs the output JSON object. I would change it so it only fires when its all valid.

## Running the application

> Note: This setup has been tested with the latest LTS version of Node.js (10.12.0 as of 19/11/2018) on macOS High Sierra.

1. Clone the repository
   - `$ git clone git@github.com:rhysbrame/form-input.git`
1. Install project dependencies
   - `$ cd form-input`
   - `$ npm install`
1. Run it in development mode
   - `$ npm run dev`
1. Navigate to the app at http://localhost:3000/

### Building for production

1. Build the application
   - `$ npm run build`
1. Run the "built" version
   - `$ npm run start`

## Running tests

### Unit tests

1. Run the Jest test suites
   - `$ npm run test`
