# motion
Motion, is an online planner that includes a To-Do list and calendar for task scheduling, targeted to a working professional or student audience. 

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
    
 You're done (with the postgres part at least)! 
 
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
