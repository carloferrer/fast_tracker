# fast_tracker
A tool for keeping track of your day, utilised via the command line.  This is a WIP project; see [docs/PROPOSAL.md](./docs/PROPOSAL.md) for more information.

## Repo Setup
- Clone this repository.
- `cd` to repository root.
- Install with `yarn`.

## DB Setup
- To install mongoDB on macOS...
  - `brew tap mongodb/brew`
  - `brew install mongodb-community@4.0`

## Running the Project
- In one terminal window, `yarn serve` to initialise and "spin up" database.
- In a separate terminal window, `yarn start` to run Express server.

## Testing the Project
Database and Express servers must be running prior to testing.
- `yarn test:list` to print table JSON.
- `yarn test:add` to add arbitrary item.
- `yarn test:delete <_id>` to delete item by `_id`.

## Stack
- mongoDB
- Express
- Node.js
