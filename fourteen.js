// Import Express
const express = require("express");

const app = express();

// Middleware
app.use((req, res, next) => {

    console.log("Middleware Executed");

    next();
});

// Home Route
app.get("/", (req, res) => {

    res.send(`
        <html>
        <head>
            <title>Home Page</title>

            <style>
                body {
                    font-family: Arial;
                    text-align: center;
                    margin-top: 100px;
                    background-color: #f2f2f2;
                }

                button {
                    padding: 10px 20px;
                    font-size: 16px;
                    cursor: pointer;
                }

                a {
                    text-decoration: none;
                }
            </style>
        </head>

        <body>

            <h1>Welcome to Home Page</h1>

            <a href="/about">
                <button>Go to About Page</button>
            </a>

        </body>
        </html>
    `);
});

// About Route
app.get("/about", (req, res) => {

    res.send(`
        <html>
        <head>
            <title>About Page</title>

            <style>
                body {
                    font-family: Arial;
                    text-align: center;
                    margin-top: 100px;
                    background-color: #f2f2f2;
                }

                button {
                    padding: 10px 20px;
                    font-size: 16px;
                    cursor: pointer;
                }

                a {
                    text-decoration: none;
                }
            </style>
        </head>

        <body>

            <h1>Welcome to About Page</h1>

            <a href="/">
                <button>Back to Home</button>
            </a>

        </body>
        </html>
    `);
});

// Start Server
app.listen(3000, () => {

    console.log("Server running at http://localhost:3000");
});