const express = require("express");
const mongoose = require("mongoose");

const bookController = require("./controllers/books");

mongoose
  .connect("mongodb://localhost:27017/express-mongoose", {
    useNewUrlParser: true
  })
  .then(() => {
    const app = express();
    app.use(express.json());

    app.get("/books", bookController.findBooks);
    app.post("/books", bookController.createBook);
    app.get("/books/:id", bookController.findBook);
    app.patch("/books/:id", bookController.updateBook);
    app.delete("/books/:id", bookController.deleteBook);

    app.listen(8000, () => {
      console.log("Server has started at port 8000");
    });
  })
  .catch(() => {
    console.log("Database connection failed!");
  });
