import express from "express";
import {
  createTask,
  deleteTask,
  getTasks,
  updateTask,
} from "../controllers/taskController";
import { authenticate } from "../middlewares/authMiddleware";

const router = express.Router();

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Cria uma nova tarefa
 *     description: Cria uma nova tarefa associada ao usuário autenticado.
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [pendente, concluida]
 *               dueDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Tarefa criada com sucesso
 *       400:
 *         description: Erro ao criar tarefa
 */
router.post("/", authenticate, createTask);

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Retorna as tarefas do usuário autenticado
 *     description: Retorna todas as tarefas associadas ao usuário autenticado.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de tarefas retornada com sucesso
 *       401:
 *         description: Não autorizado
 */
router.get("/", authenticate, getTasks);

/**
 * @swagger
 * /tasks/{taskId}:
 *   put:
 *     summary: Atualiza uma tarefa
 *     description: Atualiza uma tarefa específica do usuário autenticado.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: taskId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [pendente, concluida]
 *               dueDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Tarefa atualizada com sucesso
 *       400:
 *         description: Erro ao atualizar tarefa
 */
router.put("/:taskId", authenticate, updateTask);

/**
 * @swagger
 * /tasks/{taskId}:
 *   delete:
 *     summary: Exclui uma tarefa
 *     description: Exclui uma tarefa específica do usuário autenticado.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: taskId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarefa excluída com sucesso
 *       400:
 *         description: Erro ao excluir tarefa
 */
router.delete("/:taskId", authenticate, deleteTask);

export default router;
