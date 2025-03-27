const API_URL = "https://budgetmate-backend.onrender.com"; // Replace with your actual backend URL

// Function to fetch and display expenses
async function fetchExpenses() {
    try {
        const response = await fetch(`${API_URL}/expenses`);
        const expenses = await response.json();
        const expensesList = document.getElementById("expenses-list");

        // Clear previous list
        expensesList.innerHTML = "";

        expenses.forEach(expense => {
            const li = document.createElement("li");
            li.textContent = `${expense.title} - $${expense.amount}`;
            expensesList.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching expenses:", error);
    }
}

// Function to add a new expense
async function addExpense(event) {
    event.preventDefault();
    
    const title = document.getElementById("title").value;
    const amount = document.getElementById("amount").value;

    if (!title || !amount) {
        alert("Please enter both title and amount!");
        return;
    }

    try {
        const response = await fetch(`${API_URL}/expenses`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, amount })
        });

        if (response.ok) {
            document.getElementById("expense-form").reset();
            fetchExpenses(); // Refresh the list after adding an expense
        } else {
            alert("Failed to add expense.");
        }
    } catch (error) {
        console.error("Error adding expense:", error);
    }
}

// Run fetchExpenses when the page loads
document.addEventListener("DOMContentLoaded", () => {
    fetchExpenses();
    document.getElementById("expense-form").addEventListener("submit", addExpense);
});

