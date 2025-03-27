# BudgetMate

BudgetMate is a simple web-based expense tracker that helps users track their spending efficiently.

## Features
- **Add Expenses:** Record expenses with a title, amount, and category.
- **View Expenses:** See a list of all recorded expenses.
- **Persistent Storage:** Uses MongoDB to store expenses.
- **REST API:** Backend built with Node.js and Express.
- **Minimal UI:** Simple frontend for user interaction.

## Installation & Setup

### Prerequisites
- Node.js installed
- MongoDB connection string

### Steps
1. Clone the repository:
   ```bash
   git clone 
   cd BudgetMate
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add:
   ```
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the server:
   ```bash
   node server/index.js
   ```

## API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/expenses` | Get all expenses |
| POST | `/expenses` | Add a new expense |

## Deployment
You can deploy this project using services like Render, Railway, or Heroku.

## License
This project is open-source under the MIT License.
