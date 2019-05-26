SEMrush React and Node API 
===
 
## Prerequisites

In order to download and run this application you'll need these programs:
- [Git](https://git-scm.com/)
- [Node.js >= 11.9.0](https://nodejs.org/en/)

## Running the app

Clone the project and execute:

```
git clone https://github.com/Mircoguidetti/semrush-react-node-api.git
cd semrush-react-node-api/
```

## Add API key
Create a file inside the config directory  `cd backend/config/` and call it  `dev.js`.
You need to export an object like this:

```
module.exports = {
    semRushApiKey: 'your-api-key' 
};
```

## Install dependencies

```
> npm run install-all
```

`install-all` will execute `npm install` for you installing client and backend dependencies. 

## Run development server

```
npm run start-dev-server
```

`start-dev-server` will run the client and backend servers in concurrently


