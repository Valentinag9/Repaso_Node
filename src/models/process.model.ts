import mongoose from "mongoose";
import { ProcessInput } from "../interfaces";

export enum ProcessStatus {
    DRAFT = "draft",
    ACTIVE = "active",
    ARCHIVE = "archive"
}

export interface ProcessDocument extends ProcessInput, mongoose.Document {
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date
    status: ProcessStatus
}

const processSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    targetTemperature: { type: Number, required: true },
    targetPH: { type: Number, required: true },
    maxDurationHours: { type: Number, required: true },
    status: { type: String, enum: Object.values(ProcessStatus)},
    deletedAt: { type: Date, default: null }
}, { timestamps: true, collection: 'processes' })

export const ProcessModel = mongoose.model<ProcessDocument>("Process", processSchema)