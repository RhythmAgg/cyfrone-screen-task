# React + typescript Vite Screen
The single screen application is build following the design shared by the team. It can be referred from `/src/assets/Design.jpg`

## Run commands
We use a demo JSON data file `db.json` which is used to mimick the data that our database would contain and serve us. A temporary JSON server can be setup that will expose the data file to an API endpoint from which well fetch the data.
```
  // Setup the JSON server
  json-server --watch db.json --port 3000
```
After this in **another shell tab** we need to start the dev/preview. First install node modules
```
  npm i
```
Then launch the dev server
```
  npm run dev
```