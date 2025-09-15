import express, { Request, Response } from "express";
import { executionController } from "../controller";


export const router = express.Router();

router.get("/process/:id", executionController.findByProcessId);
router.get("/:id", executionController.getOne);
router.put("/:id", executionController.update);
router.post("/", executionController.create);
router.delete("/:id", executionController.delete);