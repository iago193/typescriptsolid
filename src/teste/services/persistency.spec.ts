import { Persistency } from "./persistency.ts";

describe("Persistency", () => {
    it("should return undefined", () => {
        //System under test
        const sut = new Persistency();

        expect(sut.saveOrder()).toBeUndefined();
    });
});