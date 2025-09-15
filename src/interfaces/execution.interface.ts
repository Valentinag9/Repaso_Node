export interface ExecutionInput {
    processId: string,
    startDate: Date,
    endDate: Date,
    operatorUsername: string,
    notes: string,
    measuredPH: number,
    measuredTemperature: number
}

export interface ExecutionInputUpdate {
    processId?: string,
    startDate?: Date,
    endDate?: Date,
    operatorUsername?: string,
    notes?: string,
    measuredPH?: number,
    measuredTemperature?: number
}