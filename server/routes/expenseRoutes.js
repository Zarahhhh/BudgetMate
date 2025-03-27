const express = require("express");
const Expense = require("../models/Expense");
const router = express.Router();

// Add Expense
router.post("/add", async (req, res) => {
    try {
        const expense = new Expense(req.body);
        await expense.save();
        res.redirect("/");
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get Expenses
router.get("/", async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.render("index", { expenses });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

