# Purpose

A project I have been working on in my spare time in order to practice and learn more about Node.js and React. This project also allowed me to sharpen my database skills using MongoDB as persistent storage.

Technologies used in this project: Node.js, Express.js, EJS template language, babel, React, webpack, sass using node-sass-middleware, Axios for ajax calls


# Running the Project

- Dev server will be located at localhost:8080
- This can be changed in config.js under env.PORT parameter
- Project developed and tested on macOS Mojave
- Run ``npm install`` to install all dependencies
- Follow instructions in below header sections to set up project

## Node.js Server
- ``npm start`` in order to start or develop backend server and api

## React Frontend
- ``npm run dev`` in separate terminal in order to run or develop frontend react changes

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

## Acknowledgements

- Based off Lynda.com course ``Learning Fullstack Javascript``.