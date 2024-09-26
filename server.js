//import express from 'express';

const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 3000;
const SECRET_ENV = process.env.SECRET_ENV;
const SECRET_API_KEY = process.env.SECRET_API_KEY;

app.get("/", (req, res) => {
  res.send("Hello from the the développeur star ⭐");
});

// ! Test these routes
app.get("/health", (req, res) => {
  res.sendStatus(200);
});

app.get("/secret", (req, res) => {
  const apiKey = req.headers['api-key'];
  if (apiKey === SECRET_API_KEY) {
    res.send(`Secret value is: ${SECRET_ENV}`);
  } else {
    res.sendStatus(403); // Forbidden
  }
});

// ! Don't fix and test these routes below
app.get("/bug", (req, res) => {
  console.log(a.b);
  res.sendStatus(200);
});

app.get("/crash_app", (req, res) => {
  try {
    setTimeout(function () {
      throw new Error("CRASH APP");
    }, 10);
  } catch (e) {
    console.log("error", e);
  }
});

app.get("/error", (req, res) => {
  throw new Error("This is a deliberate error!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//Export for integration test
module.exports = { app };
