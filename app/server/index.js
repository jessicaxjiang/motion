const pg = require("pg");
const express = require("express");

const PORT = 3001;

const app = express();
const hostname = "localhost";


const env = require("../env.json");
const Pool = pg.Pool;
const pool = new Pool(env);
pool.connect().then(function () {
  console.log(`Connected to database ${env.database}`);
});

app.use(express.json());

const cors = require("cors");

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.get("/api", (req, res) => {
  res.json({ message: "Testing server message." });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.post("/addtask", function (req, res) {
  // Get data from body
  let body = req.body.task;
  let tasktitle = body.title;
  let taskEST = parseInt(body.est);
  let taskdescription = body.description;
  let taskisdone = false;
  console.log(Number.isInteger(taskEST));
  // Check if the date object is a valid date
  if (!(Number.isInteger(taskEST))) {
    console.log("Fail EST")
    return res.sendStatus(400);
  }

  // Check if taskisdone object is boolean
  if (typeof taskisdone !== "boolean") {
    console.log("Fail isdone")
    return res.sendStatus(400);
  }

  pool.query(
    `INSERT INTO tasks(title, EST, description, isdone) 
        VALUES($1, $2, $3, $4)
        RETURNING *`,
    [tasktitle, taskEST, taskdescription, taskisdone]
  ).then(function (response) {
    // row was successfully inserted into table
    console.log("Inserted:");
    console.log(response.rows);
    res.send();
  })
    .catch(function (error) {
      // something went wrong when inserting the row
      console.log(error);
      return res.sendStatus(400);
    });
});

app.post("/addevent", function (req, res) {
  // Get data from body
  let body = req.body.event;
  let eventtitle = body.subject;
  let eventdescription = body.description;
  let eventstarttime = body.startTime;
  let eventendtime = body.endTime;
  let eventlocation = body.location;

  let startUnix = Date.parse(eventstarttime);
  let endUnix = Date.parse(eventendtime);

  //check if start time is before end time
  if (endUnix - startUnix < 0) {
    console.log("Invalid time range entered. Start time must be before End time.");
    return res.sendStatus(400);
  }

  pool.query(
    `INSERT INTO events(subject, startTime, endTime, description, location) 
        VALUES($1, $2, $3, $4, $5)
        RETURNING *`,
    [eventtitle, eventstarttime, eventendtime, eventdescription, eventlocation]
  ).then(function (response) {
    // row was successfully inserted into table
    console.log("Inserted:");
    console.log(response.rows);
    res.send();
  })
    .catch(function (error) {
      // something went wrong when inserting the row
      console.log(error);
      return res.sendStatus(400);
      res.send();
    });
});

app.post("/addaccount", function (req, res) {
  // Get data from body
  let body = req.body.signup;
  let username = body.username;
  let password = body.password;
  let passwordconfirm = body.confirmpassword;
  if (username.length < 5) {
    console.log("username doesn't match")
    return res.sendStatus(400);
  }
  if (password.length < 8) {
    console.log("password not long enough")
    return res.sendStatus(400);
  }
  if (password !== passwordconfirm) {
    console.log("passwords don't match")
    return res.sendStatus(400);
  }

  pool.query(
    `INSERT INTO events(subject, startTime, endTime, description, location) 
        VALUES($1, $2, $3, $4, $5)
        RETURNING *`,
    [eventtitle, eventstarttime, eventendtime, eventdescription, eventlocation]
  ).then(function (response) {
    // row was successfully inserted into table
    console.log("Inserted:");
    console.log(response.rows);
    res.send();
  })
    .catch(function (error) {
      // something went wrong when inserting the row
      console.log(error);
      return res.sendStatus(400);
      res.send();
    });
});

app.post("/updatetask", function (req, res) {
  // Get data from body
  let body = req.body;
  let tasktitle = body.tasktitle;
  let taskEST = body.taskEST;
  let taskdescription = body.taskdescription;
  let taskisdone = body.taskisdone;

  // Check if the date object is a valid date
  if (!(taskEST.isInteger())) {
    console.log("Fail EST")
    return res.sendStatus(400);
  }

  // Check if taskisdone object is boolean
  if (typeof taskisdone !== "boolean") {
    console.log("Fail isdone")
    return res.sendStatus(400);
  }

  pool.query(
    `UPDATE tasks SET EST = $2, description = $3, isdone = $4
        WHERE title = $1`,
    [tasktitle, taskEST, taskdescription, taskisdone]
  ).then(function (response) {
    // row was successfully inserted into table
    console.log("Updated");
    res.send();
  })
    .catch(function (error) {
      // something went wrong when inserting the row
      console.log(error);
      return res.sendStatus(400);
      res.send();
    });
});

app.post("/updateevent", function (req, res) {
  // Get data from body
  let body = req.body.event;
  let eventtitle = body.subject;
  let eventdescription = body.description;
  let eventstarttime = body.startTime;
  let eventendtime = body.endTime;
  let eventlocation = body.location;

  let startUnix = Date.parse(eventstarttime);
  let endUnix = Date.parse(eventendtime);

  //check if start time is before end time
  if (endUnix - startUnix < 0) {
    console.log("Invalid time range entered. Start time must be before End time.");
    return res.sendStatus(400);
  }

  pool.query(
    `UPDATE events SET startTime = $2, endTime = $3, description = $4, location = $5 
        WHERE subject = $1`,
    [eventtitle, eventstarttime, eventendtime, eventdescription, eventlocation]
  ).then(function (response) {
    // row was successfully inserted into table
    console.log("Updated");
    res.send();
  })
    .catch(function (error) {
      // something went wrong when inserting the row
      console.log(error);
      return res.sendStatus(400);
      res.send();
    });
});


app.get("/returnalltasks", function (req, res) {
  pool.query(`SELECT * FROM tasks`).then(function (response) {
    console.log("Found:");
    console.log(response.rows);
    res.json({ "rows": response.rows });
  })
    .catch(function (error) {
      console.log(error);
      return res.sendStatus(500);
    });
});

app.get("/returnallevents", function (req, res) {
  pool.query(`SELECT * FROM events`).then(function (response) {
    console.log("Found:");
    console.log(response.rows);
    res.json({ "dataSource": response.rows });
  })
    .catch(function (error) {
      console.log(error);
      return res.sendStatus(500);
    });
});


app.get("/returntask", function (req, res) {
  let tasktitle = req.query.tasktitle;
  console.log(tasktitle);

  pool.query(`SELECT * FROM tasks WHERE title = '${tasktitle}'`).then(function (response) {
    console.log("Found:");
    console.log(response.rows);
    res.json({ "rows": response.rows });
  })
    .catch(function (error) {
      console.log(error);
      return res.sendStatus(500);
    });
});

app.get("/returnevent", function (req, res) {
  let eventtitle = req.query.eventtitle;
  console.log(eventtitle);

  pool.query(`SELECT * FROM events WHERE subject = '${eventtitle}'`).then(function (response) {
    console.log("Found:");
    console.log(response.rows);
    res.json({ "rows": response.rows });
  })
    .catch(function (error) {
      console.log(error);
      return res.sendStatus(500);
    });
});


app.post("/completetask", function (req, res) {
  // Get data from body
  let body = req.body;
  let tasktitle = body.tasktitle;

  pool.query(
    `DELETE FROM tasks WHERE title = $1`,
    [tasktitle]
  ).then(function (response) {
    // row was successfully inserted into table
    console.log("Completed");
    res.send();
  })
    .catch(function (error) {
      // something went wrong when inserting the row
      console.log(error);
      return res.sendStatus(400);
      res.send();
    });
});

app.post("/deletevent", function (req, res) {
  // Get data from body
  let body = req.body;
  let eventtitle = body.eventtitle;

  pool.query(
    `DELETE FROM events WHERE subject = $1`,
    [eventtitle]
  ).then(function (response) {
    // row was successfully inserted into table
    console.log("Deleted");
    res.send();
  })
    .catch(function (error) {
      // something went wrong when inserting the row
      console.log(error);
      return res.sendStatus(400);
      res.send();
    });
});