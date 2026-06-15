import { useState } from "react";
import Navbar from "../components/Navbar";

import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function Dashboard() {

    const [selectedTask, setSelectedTask] = useState(null);

    return (
        <div className="dashboard">

            <Navbar />

            <h1 className="dashboard-title">Task Dashboard</h1>

            <TaskForm
                selectedTask={selectedTask}
            />

            <hr />

            <TaskList
                setSelectedTask={setSelectedTask}
            />

        </div>
    );
}

export default Dashboard;