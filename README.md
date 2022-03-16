# motion

## To start:
Open two terminals:

Terminal 1
    cd into the app folder and run `npm install`.
    Then cd into the server folder, run `npm start`
    
Terminal 2
    cd into the app/client folder and run `npm install` .
    Then run `npm start`

## Ports: 
Server runs on PORT 3001.
Client runs on PORT 3000.

Creating Tables

    psql --username postgres

    CREATE DATABASE motion;

    psql --username postgres --dbname motion

    CREATE TABLE tasks (
        id SERIAL PRIMARY KEY,
        title VARCHAR(50),
        est INT,
        description VARCHAR(500),
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
