
import { Product } from "./product.ts";

const createSut = (name: string, price: number):Product => {
    return new Product(name, price);
}

describe("Product", () => {
    it("should Product", () => {
        //System under test
        const sut = createSut('Cmiseta azul M', 49.90);

        expect(sut).toHaveProperty('name', 'Cmiseta azul M');
    });
});