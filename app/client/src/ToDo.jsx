//addtask
function addTask() {
    // let tasktitle = body.tasktitle;
    // let taskdate = body.taskdate;
    // let taskdescription = body.taskdescription;
    // let taskisdone = body.taskisdone;

    console.log(tasktitle, taskdate, taskdescription, taskisdone);
    let data = { 'tasktitle': tasktitle, 'taskdate': taskdate, 'taskdescription': taskdescription, 'taskisdone': taskisdone };

    fetch('/addtask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    }).then(function (response) {
        console.log(response.status); // will be 400 if request failed
        if (response.status === 200) {
            msg.textContent = "Success"
        } else {
            msg.textContent = "Bad request"
        }
    }).catch(function (error) {
        console.log(error); // in case fetch crashes for some reason
    });
}

//updatetask
function updateTask() {
    // let tasktitle = body.tasktitle;
    // let taskdate = body.taskdate;
    // let taskdescription = body.taskdescription;
    // let taskisdone = body.taskisdone;

    console.log(tasktitle, taskdate, taskdescription, taskisdone);
    let data = { 'tasktitle': tasktitle, 'taskdate': taskdate, 'taskdescription': taskdescription, 'taskisdone': taskisdone };

    fetch('/updatetask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    }).then(function (response) {
        console.log(response.status); // will be 400 if request failed
        if (response.status === 200) {
            msg.textContent = "Success"
        } else {
            msg.textContent = "Bad request"
        }
    }).catch(function (error) {
        console.log(error); // in case fetch crashes for some reason
    });
}

//returnalltasks
function returnAllTasks() {
    let url = `/returnalltasks`;
    fetch(url).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log("Client received from server:", data);
    }).catch(function (error) {
        console.log(error); // in case fetch crashes for some reason
    });
}

//returntask
function returnTask() {
    // let tasktitle = body.tasktitle;

    let url = `/returnalltasks?title=${tasktitle}`;
    fetch(url).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log("Client received from server:", data);
    }).catch(function (error) {
        console.log(error); // in case fetch crashes for some reason
    });
}

//completetask
function completeTask() {
    // let tasktitle = body.tasktitle;

    console.log(tasktitle);
    let data = { 'tasktitle': tasktitle };

    fetch('/completetask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    }).then(function (response) {
        console.log(response.status); // will be 400 if request failed
        if (response.status === 200) {
            msg.textContent = "Success"
        } else {
            msg.textContent = "Bad request"
        }
    }).catch(function (error) {
        console.log(error); // in case fetch crashes for some reason
    });
}
