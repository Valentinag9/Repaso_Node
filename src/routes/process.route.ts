import express, { Request, Response } from "express";
import { processController } from "../controller";


export const router = express.Router();

router.get("/", processController.getAll);
router.get("/:id", processController.getOne);
router.put("/:id", processController.update);
router.post("/", processController.create);
router.delete("/:id", processController.delete);