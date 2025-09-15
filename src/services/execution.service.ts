import { ExecutionInput, ExecutionInputUpdate } from "../interfaces";
import { ExecutionDocument, ExecutionModel, ProcessModel } from "../models";


class ExecutionService {
    
    public async create(executionInput: ExecutionInput): Promise<ExecutionDocument> {

        if(!executionInput.startDate){
            executionInput.startDate = new Date()
        }

        return ExecutionModel.create(executionInput);
    }

    public async findByProcessId(id: string): Promise<ExecutionDocument[]> {
        const processExists = await ProcessModel.findById(id)

        if(!processExists){
            throw new ReferenceError("Process not found")
        }

        return ExecutionModel.find({ processId: id, deletedAt: null })
    }

    public async update(id: string, executionInput: ExecutionInputUpdate): Promise<ExecutionDocument | null> {
        try {
            const execution: ExecutionDocument | null = await ExecutionModel.findOneAndUpdate(
                { _id: id },
                executionInput,
                { returnOriginal: false }
            );

            return execution;
        } catch (error) {
            throw error;
        }
    }

    public getById(id: string): Promise<ExecutionDocument | null> {
        return ExecutionModel.findById(id);
    }

    public async delete(id: string): Promise<boolean> {
        try {
            const result = await ExecutionModel.findByIdAndUpdate(id, { deletedAt: new Date() })
            return result !== null;
        } catch (error) {
            throw error;
        }
    }

}

export const executionService = new ExecutionService();