import { useEffect, useState } from "react";
import API from "../services/api";
import socket from "../socket";

function TaskList({ setSelectedTask }) {

const [tasks, setTasks] = useState([]);

const fetchTasks = async () => {

    try {

        const token = localStorage.getItem("token");

        const res = await API.get(
            "/tasks",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        setTasks(res.data);

    } catch (error) {

        console.log(error);

    }
};

const deleteTask = async (id) => {

    try {

        const token = localStorage.getItem("token");

        await API.delete(
            `/tasks/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        fetchTasks();

    } catch (error) {

        console.log(error);

    }
};

useEffect(() => {

    fetchTasks();

    socket.on(
        "taskCreated",
        fetchTasks
    );

    socket.on(
        "taskUpdated",
        fetchTasks
    );

    socket.on(
        "taskDeleted",
        fetchTasks
    );

    return () => {

        socket.off("taskCreated");
        socket.off("taskUpdated");
        socket.off("taskDeleted");

    };

}, []);

return (
    <div>

        <h2>My Tasks</h2>

        <div className="tasks-container">

            {tasks.map((task) => (

                <div
                    key={task._id}
                    className="task-card"
                >

                    <h3>{task.title}</h3>

                    <p>{task.description}</p>

                    <p>
                        Status: {task.status}
                    </p>

                    <p>
                        Priority: {task.priority}
                    </p>

                    <div className="task-actions">

                        <button
                            className="edit-btn"
                            onClick={() =>
                                setSelectedTask(task)
                            }
                        >
                            Edit
                        </button>

                        <button
                            className="delete-btn"
                            onClick={() =>
                                deleteTask(task._id)
                            }
                        >
                            Delete
                        </button>

                    </div>

                </div>

            ))}

        </div>

    </div>
);


}

export default TaskList;
