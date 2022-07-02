import { Person } from "../src/testfile";

describe("Test Suite 1", () => {
    it("Should return 10", () => {
        let p = new Person();
        expect(p.doSomething(5)).toBe(10);
    })
})