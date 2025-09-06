export interface IGameService {
    start(): Promise<void>
    init(): Promise<void>
}