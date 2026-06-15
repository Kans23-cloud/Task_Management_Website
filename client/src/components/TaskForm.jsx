import { useState, useEffect } from "react";
import API from "../services/api";

function TaskForm({ selectedTask, fetchTasks, clearSelection }) {

    const [task, setTask] = useState(
        selectedTask || {
            title: "",
            description: "",
            status: "Pending",
            priority: "Medium"
        }
    );

    useState(() => {
        if (selectedTask) {
            setTask(selectedTask);
        }
    }, [selectedTask]);

    useEffect(() => {

    if (selectedTask) {

        setTask({
            title: selectedTask.title,
            description: selectedTask.description,
            status: selectedTask.status,
            priority: selectedTask.priority
        });

    }

}, [selectedTask]);

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        const token = localStorage.getItem("token");

        if (selectedTask) {

            await API.put(
                `/tasks/${selectedTask._id}`,
                task,
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );

            alert("Task Updated");

        }
        else {

            await API.post(
                "/tasks",
                task,
                {
                    headers: {
                        Authorization:
                            `Bearer ${token}`
                    }
                }
            );

            alert("Task Created");

        }

    }
    catch (error) {

        console.log(error);

    }
};

    return (
        <form className="task-form" onSubmit={handleSubmit}>

            <h2>
                {selectedTask ? "Update Task" : "Create Task"}
            </h2>

            <input
                type="text"
                name="title"
                placeholder="Task Title"
                value={task.title}
                onChange={handleChange}
            />

            <br /><br />

            <textarea
                name="description"
                placeholder="Description"
                value={task.description}
                onChange={handleChange}
            />

            <br /><br />

            <select
                name="status"
                value={task.status}
                onChange={handleChange}
            >
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
            </select>

            <br /><br />

            <select
                name="priority"
                value={task.priority}
                onChange={handleChange}
            >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
            </select>

            <br /><br />

            <button type="submit">

    {
        selectedTask
            ? "Update Task"
            : "Add Task"
    }

</button>

        </form>
    );
}

export default TaskForm;