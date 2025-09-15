import { Request, Response } from "express";
import { ProcessDocument } from "../models";
import { processService } from "../services";
import { ProcessInput, ProcessInputUpdate } from "../interfaces";

class ProcessController {
    
    public async create(req: Request, res: Response) {
        try {
            const newProcess: ProcessDocument = await processService.create(req.body as ProcessInput);

            res.status(201).json(newProcess);
        } catch (error) {
            if (error instanceof ReferenceError) {
                res.status(400).json({ message: "User not found" });
                return;
            }
            res.status(500).json(error);
        }
    }

    public async getAll(req: Request, res: Response) {
        try {
            const processs: ProcessDocument[] = await processService.getAll();
            res.json(processs);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    public async getOne(req: Request, res: Response) {
        try {
            const id: string = req.params.id || "";
            const process: ProcessDocument | null = await processService.getById(id);
            if (process === null) {
                res.status(404).json({ message: `Process with id ${id} not found` });
                return;
            }
            res.json(process);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    public async update(req: Request, res: Response) {
        try {
            const id: string = req.params.id || "";
            const process: ProcessDocument | null = await processService.update(id, req.body as ProcessInputUpdate);
            if (process === null) {
                res.status(404).json({ message: `Process with id ${id} not found` });
                return;
            }
            res.json(process);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    public async delete(req: Request, res: Response) {
        try {
            const id: string = req.params.id || "";
            const deleted: boolean = await processService.delete(id);
            if (!deleted) {
                res.status(404).json({ message: `Process with id ${id} not found` });
                return;
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json(error);
        }
    }
    
}

export const processController = new ProcessController();
