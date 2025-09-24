import { Message } from "./message.ts";

const createSut = () => {
    return new Message();
}

describe("Persistency", () => {
    it("should return undefined", () => {
        //System under test
        const sut = createSut();

        expect(sut.sendMessage("Hello world")).toBeUndefined();
    });
});