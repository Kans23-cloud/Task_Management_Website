const Task = require("../models/Task");

// Create Task
const createTask = async (req, res) => {
    try {

        const { title, description, status, priority } = req.body;

        const task = await Task.create({
            title,
            description,
            status,
            priority,
            user: req.user.id
        });

        req.app
    .get("io")
    .emit("taskCreated", task);

        res.status(201).json(task);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Get All Tasks
const getTasks = async (req, res) => {
    try {

        const tasks = await Task.find({
            user: req.user.id
        });

        res.status(200).json(tasks);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Get Single Task
const getTaskById = async (req, res) => {
    try {

        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json(task);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

// Update Task
const updateTask = async (req, res) => {
    try {

        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        req.app
    .get("io")
    .emit("taskUpdated", task);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.status(200).json(task);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const deleteTask = async (req, res) => {
    try {

        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        await task.deleteOne();

        req.app
    .get("io")
    .emit("taskDeleted", req.params.id);

        res.status(200).json({
            message: "Task Deleted"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createTask,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
};