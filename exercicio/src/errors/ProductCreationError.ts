export class ProductCreationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ProductCreationError";
    }
}
