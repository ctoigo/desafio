import { Request, Response } from "express";
import { firestore } from "../config/firebase";

const tasksCollection = firestore.collection("tasks");

export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, description, status, dueDate } = req.body;
    const { user }: any = req;
    const taskRef = await tasksCollection.add({
      title,
      description,
      status,
      dueDate,
      userId: user.uid,
    });
    res.status(201).json({ id: taskRef.id });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getTasks = async (req: Request, res: Response) => {
  try {
    const { user }: any = req;
    const querySnapshot = await tasksCollection
      .where("userId", "==", user.uid)
      .get();
    const tasks = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json(tasks);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  try {
    const { taskId } = req.params;
    await tasksCollection.doc(taskId).update(req.body);
    res.json({ message: "Task updated successfully" });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { taskId } = req.params;
    await tasksCollection.doc(taskId).delete();
    res.json({ message: "Task deleted successfully" });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
