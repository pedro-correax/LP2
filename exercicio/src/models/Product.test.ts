import { Product } from "./Product";
import { ProductCreationError } from "../errors/ProductCreationError";
import { ProductErrorMessages } from "../enums/ProductErrorMessages";

describe("Tests over Product class", () => {
    it("should create a product with valid inputs", () => {
        const descriptionValue = "Produto de Teste Válido";
        const quantityValue = 50;
        const priceValue = 99.99;
        const codeValue = "ABC-1234";
        const entryDateValue = new Date("2024-04-01");

        const product = new Product();
        product.description = descriptionValue;
        product.quantity = quantityValue;
        product.price = priceValue;
        product.code = codeValue;
        product.entryDate = entryDateValue;

        expect(product.description).toBe(descriptionValue);
        expect(product.quantity).toBe(quantityValue);
        expect(product.price).toBe(priceValue);
        expect(product.code).toBe(codeValue);
        expect(product.entryDate).toBe(entryDateValue);
    });

    it("should not create a product with invalid description", () => {
        const product = new Product();

        try {
            product.description = "Curto";
            fail("It allowed to set an invalid description");
        } catch (err) {
            expect(err).toBeInstanceOf(ProductCreationError);
            expect(err.message).toBe(ProductErrorMessages.DESCRIPTION_ERROR_MESSAGE);
        }
    });

    it("should not create a product with invalid quantity", () => {
        const product = new Product();

        try {
            product.quantity = 100;
            fail("It allowed to set an invalid quantity");
        } catch (err) {
            expect(err).toBeInstanceOf(ProductCreationError);
            expect(err.message).toBe(ProductErrorMessages.QUANTITY_ERROR_MESSAGE);
        }
    });

    it("should not create a product with invalid price", () => {
        const product = new Product();

        try {
            product.price = 0;
            fail("It allowed to set an invalid price");
        } catch (err) {
            expect(err).toBeInstanceOf(ProductCreationError);
            expect(err.message).toBe(ProductErrorMessages.PRICE_ERROR_MESSAGE);
        }
    });

    it("should not create a product with invalid code", () => {
        const product = new Product();

        try {
            product.code = "1234cd";
            fail("It allowed to set an invalid code");
        } catch (err) {
            expect(err).toBeInstanceOf(ProductCreationError);
            expect(err.message).toBe(ProductErrorMessages.CODE_ERROR_MESSAGE);
        }
    });

it('should not create a product with invalid stock entry date', () => {
        const product = new Product();
        try{
            product.entryDate = new Date('2030-02-27');
            fail("It allowed to set an invalid stock entry date")
        } catch(err) {
            expect(err).toBeInstanceOf(ProductCreationError);
            expect(err.message).toBe(ProductErrorMessages.DATE_ERROR_MESSAGE);
        };
    });
});


