import mongoose from "mongoose";
import { ExecutionInput } from "../interfaces";

export enum ExecutionStatus {
    RUNNING = "running",
    STOPPED = "stopped"
}

export interface ExecutionDocument extends ExecutionInput, mongoose.Document {
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date,
    status: ExecutionStatus
}

const executionSchema = new mongoose.Schema({
    processId: { type: mongoose.Schema.Types.ObjectId, ref: 'Process', required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: false },
    operatorUsername: { type: String, required: true },
    notes: { type: String, required: true },
    measuredPH: { type: Number, required: true },
    measuredTemperature: { type: Number, required: true },
    status: { type: String, enum: Object.values(ExecutionStatus), default: ExecutionStatus.RUNNING }
}, { timestamps: true, collection: 'executions' })

export const ExecutionModel = mongoose.model<ExecutionDocument>("Execution", executionSchema)