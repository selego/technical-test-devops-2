const express = require("express");

const app = express();
const PORT = 3000;
const SECRET_ENV = "secret";

app.get("/", (req, res) => {
  res.send("Hello from the the développeur star ⭐");
});

// ! Test these routes
app.get("/health", (req, res) => {
  res.sendStatus(200);
});

app.get("/secret", (req, res) => {
  console.log("SECRET_ENV", SECRET_ENV);
  if (req?.body?.test) res.sendStatus(201);
  res.sendStatus(200);
});

// ! Don't fix and test these routes
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
