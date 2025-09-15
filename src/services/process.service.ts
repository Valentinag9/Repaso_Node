import { ProcessInput, ProcessInputUpdate } from "../interfaces";
import { ProcessDocument, ProcessModel } from "../models";


class ProcessService {
    
    public async create(processInput: ProcessInput): Promise<ProcessDocument> {
        return ProcessModel.create(processInput);
    }

    public async update(id: string, processInput: ProcessInputUpdate): Promise<ProcessDocument | null> {
        try {
            const process: ProcessDocument | null = await ProcessModel.findOneAndUpdate(
                { _id: id },
                processInput,
                { returnOriginal: false }
            );

            return process;
        } catch (error) {
            throw error;
        }
    }

    public getAll(): Promise<ProcessDocument[]> {
        return ProcessModel.find({ deletedAt: null });
    }

    public getById(id: string): Promise<ProcessDocument | null> {
        return ProcessModel.findById(id);
    }

    public async delete(id: string): Promise<boolean> {
        try {
            const result = await ProcessModel.findByIdAndUpdate(id, { deletedAt: new Date() })
            return result !== null;
        } catch (error) {
            throw error;
        }
    }

}

export const processService = new ProcessService();