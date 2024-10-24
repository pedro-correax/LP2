import { ProductErrorMessages } from "../enums/ProductErrorMessages";
import { ProductCreationError } from "../errors/ProductCreationError";


export class Product {
    private _description: string = "";
    private _quantity: number = 0;
    private _price: number = 0;
    private _code: string = "";
    private _entryDate: Date = new Date();

    set description(description: string) {
        if (description.trim().length >= 10) {
            this._description = description;
        } else {
            throw new ProductCreationError(ProductErrorMessages.DESCRIPTION_ERROR_MESSAGE);
        }
    }

    get description(): string {
        return this._description;
    }

    set quantity(quantity: number) {
        if (quantity >= 0 && quantity <= 99) {
            this._quantity = quantity;
        } else {
            throw new ProductCreationError(ProductErrorMessages.QUANTITY_ERROR_MESSAGE);
        }
    }

    get quantity(): number {
        return this._quantity;
    }

    set price(price: number) {
        if (price >= 1) {
            this._price = price;
        } else {
            throw new ProductCreationError(ProductErrorMessages.PRICE_ERROR_MESSAGE);
        }
    }

    get price(): number {
        return this._price;
    }

    set code(code: string) {
        if (/^[A-Z]{3}-\d{4}$/.test(code)) {
            this._code = code;
        } else {
            throw new ProductCreationError(ProductErrorMessages.CODE_ERROR_MESSAGE);
        }
    }

    get code(): string {
        return this._code;
    }

    set entryDate(date: Date) {
        if (date <= new Date()) {
            this._entryDate = date;
        } else {
            throw new ProductCreationError(ProductErrorMessages.DATE_ERROR_MESSAGE);
        }
    }

    get entryDate(): Date {
        return this._entryDate;
    }
}