# Setup

## Start Server

Server started at http://localhost:1234 . Parcel is used for bundler.

```
yarn start
```

## Run Jest Test

Jest is used for Unit Test.

```
yarn test
```

## Run Cypress

Cypress is used for E2E test. There are two examples at `cypress/integration`:

- index_spec.js It renders index page without any stub for API request.
- index_with_request_spec.js

  It renders index page with stub for API request. `API` constant should be changed to the correct url once decided.

### Run Cypress Test with Web Server started

```
yarn cypress
```

### Open Cypress CLI

```
yarn cypress:open
```

### Run Cypress Test

```
yarn cypress:run
```
