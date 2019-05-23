Node.js, Express.js, EJS template language, babel, React, webpack, sass using node-sass-middleware, axios for ajax calls


# Development

- Dev server can be located at localhost:8080
- This can be changed in config.js under env.PORT parameter

- Run ``npm install`` to install all dependencies
- Project developed on macOS

## Node.js Server Development
- ``npm start`` in order to start backend server

## React Frontend Development
- ``npm run dev`` in separate terminal in order to develop frontend react changes

## MongoDB Setup
- Ensure you have installed MongoDB from website or through homebrew if on Mac

- After downloading Mongo, create the “db” directory. This is where the Mongo data files will live. You can create the directory in the default location by running mkdir -p /data/db
- Make sure that the ``/data/db`` directory has the right permissions by running

```
> sudo chown -R `id -un` /data/db
> # Enter your password
```

- Run the Mongo daemon, in one of your terminal windows run ``mongod``. This should start the Mongo server.
- Run the Mongo shell, with the Mongo daemon running in one terminal, type ``mongo`` in another terminal window. This will run the Mongo shell which is an application to access data in MongoDB.

## Populate MongoDB With Test Data

- Ensure the node-modules relative path is added to classpath in order to run ``babel-node``

- Run the loadTestData.js script to create the contests
    - ``babel-node loadTestData.js``
- Run the updateTestData.js script to create the initial test names
    - ``babel-node updateTestData.js``
