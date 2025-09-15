import { Request, Response } from "express";
import { ExecutionDocument } from "../models";
import { executionService } from "../services";
import { ExecutionInput, ExecutionInputUpdate } from "../interfaces";

class ExecutionController {
    
    public async create(req: Request, res: Response) {
        try {
            const newExecution: ExecutionDocument = await executionService.create(req.body as ExecutionInput);

            res.status(201).json(newExecution);
        } catch (error) {
            if (error instanceof ReferenceError) {
                res.status(400).json({ message: "User not found" });
                return;
            }
            res.status(500).json(error);
        }
    }

    public async findByProcessId(req: Request, res: Response) {
        try {
            const userId: string = req.params.id || "";
            const executions: ExecutionDocument[] = await executionService.findByProcessId(userId);
            res.json(executions);
        } catch (error) {
            if (error instanceof ReferenceError) {
                res.status(400).json({ message: "Process not found" });
                return;
            }
            res.status(500).json(error);
        }
    }


    public async getOne(req: Request, res: Response) {
        try {
            const id: string = req.params.id || "";
            const execution: ExecutionDocument | null = await executionService.getById(id);
            if (execution === null) {
                res.status(404).json({ message: `Execution with id ${id} not found` });
                return;
            }
            res.json(execution);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const id: string = req.params.id || "";
            const execution: ExecutionDocument | null = await executionService.update(id, req.body as ExecutionInputUpdate);
            if (execution === null) {
                res.status(404).json({ message: `Execution with id ${id} not found` });
                return;
            }
            res.json(execution);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    public async delete(req: Request, res: Response) {
        try {
            const id: string = req.params.id || "";
            const deleted: boolean = await executionService.delete(id);
            if (!deleted) {
                res.status(404).json({ message: `Execution with id ${id} not found` });
                return;
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json(error);
        }
    }
    
}

export const executionController = new ExecutionController();
