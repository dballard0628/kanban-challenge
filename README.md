# kanban-challenge 🎯

A full-stack Kanban-style task management application that allows users to create, manage, and organize their tasks visually across different states: **Todo**, **In Progress**, and **Done**.

## 🚀 Features

- 📝 Create, update, and delete task tickets
- 🧱 Drag-and-drop-style board (3 swimlanes)
- 🔒 Authentication gated views
- 🌐 RESTful API integration
- 🎨 Responsive and styled with modern UI (custom CSS + Google Fonts)

## 📸 Screenshot

![kanban-challenge UI](./assets/screenshot.png)

## 🛠️ Built With

- **Frontend**: React, TypeScript, React Router
- **Backend**: Node.js, Express
- **Database**: PostgreSQL
- **Styling**: CSS3, Google Fonts (`Inter Tight`)
- **Authentication**: JWT-based session management

## 📂 Folder Structure

kanban-challenge/ ├── client/ │ ├── src/ │ │ ├── components/ # Reusable components (e.g., Swimlane) │ │ ├── pages/ # Page components (Board, Create, ErrorPage) │ │ ├── interfaces/ # TypeScript interfaces │ │ ├── api/ # API calls (e.g., ticketAPI.ts) │ │ ├── utils/ # Auth utilities │ │ ├── App.tsx │ │ └── main.tsx │ ├── public/ │ └── index.css ├── server/ │ ├── controllers/ │ ├── models/ │ ├── routes/ │ ├── db/ # DB connection & seed files │ └── server.js ├── .env ├── README.md └── package.json

bash
Copy
Edit

## 📦 Setup Instructions

1. **Clone the repo**  
```terminal
git clone https://github.com/yourusername/kanban-challenge.git
cd kanban-challenge
Install dependencies for client and server

Copy
Edit
cd client
npm install
cd ../server
npm install
Setup environment variables
Create a .env file in the server/ directory with the following:

env
Copy
Edit
PORT=3001
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=kanban_db
DB_HOST=localhost
JWT_SECRET=your_secret_key
Run the app
Start server and client concurrently:

bash
Copy
Edit
# In root directory:
npm run dev
Or separately:

bash
Copy
Edit
# Start backend
cd server
npm start

# Start frontend
cd client
npm run dev
🧪 Testing
Coming soon! You can test manually by:

Logging in

Creating tickets

Deleting/updating tickets

Observing behavior across swimlanes

✨ Future Enhancements
✅ Drag-and-drop support

🌍 Multi-user collaboration

📅 Due dates, tags, filters

📈 Analytics dashboard

🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

📄 License
MIT

📬 Contact Me
If you have any questions, feedback, or collaboration ideas, feel free to reach out:

📧 Email: [dball@gmail.com]

💼 Render Link: 

🐙 GitHub: https://github.com/dballard0628/kanban-challenge