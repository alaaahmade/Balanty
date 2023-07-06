declare class CustomError extends Error {
    status: number;
    constructor(status: number, message: string);
}
export default CustomError;
