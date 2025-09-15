export interface ProcessInput {
    name: string,
    description: string,
    targetTemperature: number,
    targetPH: number,
    maxDurationHours: number,
    createdAt: Date
}

export interface ProcessInputUpdate {
    name?: string,
    description?: string,
    targetTemperature?: number,
    targetPH?: number,
    maxDurationHours?: number,
    createdAt?: Date
}