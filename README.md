# motion

## Ports: 
Server runs on PORT 3001.
Client runs on PORT 3000.

## Creating Tables

Login into postgres and create the database motion.

    psql --username postgres

    CREATE DATABASE motion;


Sign out and then sign in postgres specificially the newly created motion database. Create the below tables.

    psql --username postgres --dbname motion

    CREATE TABLE tasks (
        id SERIAL PRIMARY KEY,
        title VARCHAR(50),
        est INT,
        description VARCHAR(200),
        isdone BOOLEAN
    );

    CREATE TABLE events (
    id SERIAL PRIMARY KEY,
        subject VARCHAR(50),
        startTime TIMESTAMP,
        endTime TIMESTAMP,
        description VARCHAR(500),
        location VARCHAR(50)
    );
    
 You're done! 
 
 ## env.json
 In /app folder, there is an `env.json` file with database information. Please replace the "password" value with your postgres password. Now you're ready To Start.


## To start:
Open two terminals:

Terminal 1
    cd into the project /app folder and run `npm install`.
    Then cd into the /server folder, run `npm start`
    
Terminal 2
    cd into the project /app/client folder and run `npm install` .
    Then run `npm start`
