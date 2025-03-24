import { CodeBlock } from "@/components/code-block"
import { TerminalBlock } from "@/components/terminal-block"

export function PostContent() {
  const sampleCode = `const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const port = 3000;

// Database connection
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'crud_example'
});

app.use(express.json());

// GET all items
app.get('/api/items', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM items');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});`

  const terminalCommands = ["npm init -y", "npm install express mysql2", "node server.js"]

  return (
    <main className="flex-1 h-[calc(100vh-64px)] overflow-y-auto custom-scrollbar">
      <div className="p-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-[#60fefe]">Building a CRUD API with Node.js and MySQL</h1>
          <div className="flex items-center text-[#b3b3b3] mb-6">
            <span>Published: March 23, 2025</span>
            <span className="mx-2">•</span>
            <span>10 min read</span>
          </div>

          <p className="text-[#b3b3b3] mb-6">
            In this guide, we'll walk through creating a simple CRUD (Create, Read, Update, Delete) API using Node.js
            with Express and MySQL. This is perfect for beginners who want to understand how to build a backend service
            that interacts with a database.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white">Prerequisites</h2>
          <ul className="list-disc pl-6 mb-6 text-[#b3b3b3] space-y-2">
            <li>Node.js installed on your machine</li>
            <li>MySQL installed and running</li>
            <li>Basic knowledge of JavaScript</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-white">Setting Up the Project</h2>
          <p className="text-[#b3b3b3] mb-4">
            First, let's create a new directory for our project and initialize it with npm. Open your terminal and run
            the following commands:
          </p>

          <TerminalBlock commands={terminalCommands} />

          <h2 className="text-2xl font-semibold mb-4 text-white">Creating the Server</h2>
          <p className="text-[#b3b3b3] mb-4">
            Now, let's create our server file. Create a new file called{" "}
            <code className="bg-[#1e2130] px-1 rounded">server.js</code> and add the following code:
          </p>

          <CodeBlock code={sampleCode} language="javascript" filename="server.js" />

          <h2 className="text-2xl font-semibold mb-4 text-white">Setting Up the Database</h2>
          <p className="text-[#b3b3b3] mb-4">
            Before running our server, we need to set up our MySQL database. Let's create a database and a table for our
            items:
          </p>

          <CodeBlock
            code={`CREATE DATABASE IF NOT EXISTS crud_example;
USE crud_example;

CREATE TABLE IF NOT EXISTS items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO items (name, description) VALUES 
  ('Item 1', 'Description for item 1'),
  ('Item 2', 'Description for item 2');`}
            language="sql"
            filename="setup.sql"
          />

          <h2 className="text-2xl font-semibold mb-4 text-white">Testing the API</h2>
          <p className="text-[#b3b3b3] mb-4">
            Now that we have our server and database set up, let's test our API endpoint. Start the server and use a
            tool like curl or Postman to make a GET request:
          </p>

          <TerminalBlock commands={["curl http://localhost:3000/api/items"]} />

          <p className="text-[#b3b3b3] mt-6">
            This is just the beginning of our CRUD API. In the next part of this guide, we'll implement the Create,
            Update, and Delete operations to complete our API.
          </p>
        </div>
      </div>
    </main>
  )
}

