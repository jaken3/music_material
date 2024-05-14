export interface Message<T> {
    type: string;
    message: string;
    model?:T[]
}
