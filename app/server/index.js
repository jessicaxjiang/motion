const express = require("express");

const PORT = 3001;

const app = express();

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
  let taskdate = body.taskdate;
  let taskdescription = body.taskdescription;
  let taskisdone = body.taskisdone;

  // Check if the date object is a valid date
  // if (taskdate) {
  //   console.log("Fail Date")
  //   return res.sendStatus(400);
  // }

  // Check if taskisdone object is boolean
  if (typeof taskisdone !== "boolean") {
    console.log("Fail isdone")
    return res.sendStatus(400);
  }

  pool.query(
    `INSERT INTO tasks(title, date, description, isdone) 
        VALUES($1, $2, $3, $4)
        RETURNING *`,
    [tasktitle, taskdate, taskdescription, taskisdone]
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

app.get("/returntasks", function (req, res) {
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