const express = require("express");

const PORT = 3001;

const app = express();

const cors = require("cors");

const corsOptions = {
   origin:'*', 
   credentials:true,
   optionSuccessStatus:200,
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
  let body = req.body;
  let tasktitle = body.tasktitle;
  let taskEST = body.taskEST;
  let taskdescription = body.taskdescription;
  let taskisdone = body.taskisdone;

  // Check if the date object is a valid date
  // if (taskEST) {
  //   console.log("Fail EST")
  //   return res.sendStatus(400);
  // }

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
      res.send();
    });
});

app.post("/addevent", function (req, res) {
  // Get data from body
  let body = req.body;
  let eventtitle = body.eventtitle;
  let eventdate = body.eventdate;
  let eventdescription = body.eventdescription;
  let eventtime = body.eventtime;
  let eventisrepetition = body.eventrepetition;

  // Check if the date object is a valid date
  // if (eventdate) {
  //   console.log("Fail Date")
  //   return res.sendStatus(400);
  // }

  // Check if the time object is a valid date
  // if (eventtime) {
  //   console.log("Fail Time")
  //   return res.sendStatus(400);
  // }

  // Check if eventisrepetition object is boolean
  if (typeof eventisrepetition !== "boolean") {
    console.log("Fail srepetition")
    return res.sendStatus(400);
  }

  pool.query(
    `INSERT INTO events(title, date, time, description, isrepetition) 
        VALUES($1, $2, $3, $4, $5)
        RETURNING *`,
    [eventtitle, eventdate, eventtime, eventdescription, eventisrepetition]
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
  // if (taskEST) {
  //   console.log("Fail EST")
  //   return res.sendStatus(400);
  // }

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
  let body = req.body;
  let eventtitle = body.eventtitle;
  let eventdate = body.eventdate;
  let eventdescription = body.eventdescription;
  let eventtime = body.eventtime;
  let eventisrepetition = body.eventrepetition;


  // Check if the date object is a valid date
  // if (eventdate) {
  //   console.log("Fail Date")
  //   return res.sendStatus(400);
  // }

  // Check if the time object is a valid date
  // if (eventtime) {
  //   console.log("Fail Time")
  //   return res.sendStatus(400);
  // }

  // Check if eventisrepetition object is boolean
  if (typeof eventisrepetition !== "boolean") {
    console.log("Fail srepetition")
    return res.sendStatus(400);
  }

  pool.query(
    `UPDATE events SET date = $2, time = $3, description = $4, isrepetition = $5
        WHERE title = $1`,
    [eventtitle, eventdate, eventtime, eventdescription, eventisrepetition]
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
    res.json({ "rows": response.rows });
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

  pool.query(`SELECT * FROM events WHERE title = '${eventtitle}'`).then(function (response) {
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
    `DELETE FROM events WHERE title = $1`,
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