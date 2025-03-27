document.getElementById('expense-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;

    const res = await fetch('/expenses/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, amount, category })
    });

    if (res.ok) {
        alert('Expense Added!');
        window.location.reload();
    } else {
        alert('Error adding expense');
    }
});

async function fetchExpenses() {
    const res = await fetch('/expenses');
    const expenses = await res.json();

    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = '';

    expenses.forEach(expense => {
        const li = document.createElement('li');
        li.textContent = `${expense.name} - $${expense.amount} [${expense.category}]`;
        expenseList.appendChild(li);
    });
}

fetchExpenses();

