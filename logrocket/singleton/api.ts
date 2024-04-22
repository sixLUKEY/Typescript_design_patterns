import express, { Application, Request, Response } from "express";
import { DBInstance } from "./db";
import bodyParser from "body-parser";
const app = express();

async function start() {
  try {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    const db = await DBInstance.getInstance();

    app.get("/todos", async (req: Request, res: Response) => {
      try {
        const db = await DBInstance.getInstance();

        const todos = await db.collection("todo").find({}).toArray();
        res.status(200).json({ success: true, data: todos });
      } catch (err) {
        console.log("Error fetching data : ", err);
        res.status(500).json({ success: false, data: null });
      }
    });

    app.post("/todo", async (req: Request, res: Response) => {
      try {
        const db = await DBInstance.getInstance();

        const todo = req.body.todos;
        const todoCollection = await db
          .collection("todo")
          .insertOne({ name: todo });

        res.status(200).json({ success: true, data: todoCollection });
      } catch (err) {
        console.log("Error on inserting : ", err);
        res.status(500).json({ success: false, data: null });
      }
    });
    app.listen(4000, () => {
        console.log('Server is running on PORT 4000')
    })
  } catch (err) {
    console.log('Error while starting the server : ', err)
  }
}

// start()
//! code not working properly