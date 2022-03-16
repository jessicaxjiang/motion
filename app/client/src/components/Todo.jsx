import './components.css';
import Button from '@material-ui/core/Button';
import TodoHeader from './TodoHeader';
import { useEffect, useState } from 'react';

function Todo() {
    let [tasks, setTasks] = useState([])
    let emptyTasks = true;
    function returnAllTasks() {
        let url = `http://localhost:3001/returnalltasks`;
        fetch(url).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log("Client received from server:", data);
            console.log(data.rows);
            setTasks(data.rows);
        }).catch(function (error) {
            console.log(error); // in case fetch crashes for some reason
        });
    }

    emptyTasks = tasks.length == 0;
    useEffect(returnAllTasks, []);

    return (
        <div>
            <TodoHeader />
            { emptyTasks && <div>
                <h2>No tasks found. Add more below.</h2>
            </div>
            }
            <div className="tasks-container">

                {tasks &&
                    tasks.map((task, index) => {
                        console.log(task);
                        let title = task.title;
                        let description = task.description;
                        let est = task.est;
                        return (
                            <div className='task' key={index}>
                                <div className="todobuttons">
                                    <Button>Edit</Button>
                                    <Button>Complete/Delete</Button>
                                </div>
                                <h2>{title}</h2>
                                <p>Description: {description}</p>
                                <p>Estimated Time: {est} minutes</p>
                                <hr></hr>
                            </div>
                        )
                    })
                }

            </div>
            <div className="addTaskButton">
                <Button href="/addToDo">Add Task</Button>
            </div>
            <div className="button-div">
                <Button href="/addTodo" className='addTask'>Add Task</Button>
            </div>

        </div>
    )
}

// //updatetask
// function updateTask() {
//     // let tasktitle = body.tasktitle;
//     // let taskdate = body.taskdate;
//     // let taskdescription = body.taskdescription;
//     // let taskisdone = body.taskisdone;

//     console.log(tasktitle, taskdate, taskdescription, taskisdone);
//     let data = { 'tasktitle': tasktitle, 'taskdate': taskdate, 'taskdescription': taskdescription, 'taskisdone': taskisdone };

//     fetch('/updatetask', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//     }).then(function (response) {
//         console.log(response.status); // will be 400 if request failed
//         if (response.status === 200) {
//             msg.textContent = "Success"
//         } else {
//             msg.textContent = "Bad request"
//         }
//     }).catch(function (error) {
//         console.log(error); // in case fetch crashes for some reason
//     });
// }

// //returnalltasks

// //returntask
// function returnTask() {
//     // let tasktitle = body.tasktitle;

//     let url = `/returntask?title=${tasktitle}`;
//     fetch(url).then(function (response) {
//         return response.json();
//     }).then(function (data) {
//         console.log("Client received from server:", data);
//     }).catch(function (error) {
//         console.log(error); // in case fetch crashes for some reason
//     });
// }

// //completetask
// function completeTask() {
//     // let tasktitle = body.tasktitle;

//     console.log(tasktitle);
//     let data = {'tasktitle': tasktitle };

//     fetch('/completetask', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//     }).then(function (response) {
//         console.log(response.status); // will be 400 if request failed
//         if (response.status === 200) {
//             msg.textContent = "Success"
//         } else {
//             msg.textContent = "Bad request"
//         }
//     }).catch(function (error) {
//         console.log(error); // in case fetch crashes for some reason
//     });
// }

export default Todo;
