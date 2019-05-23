describe("arrays.js", () => {
    let c
    let i
    let l
    try {
        c = contacts
    }
    catch (e) { }
    try {
        i = instructors
    }
    catch (e) { }
    try {
        l = length
    }
    catch (e) { }
    describe("1. length of contacts array", () => {
        it("length is equal to length of contacts", () => {
            chai.assert.strictEqual(c.length, l, "Be sure to use the length property of contacts")
        })
    })
    describe("2. Add to contacts array", () => {
        it("5 people in contacts", () => {
            chai.assert.strictEqual(c.length, 5, "Be sure to add each person to the contacts array.")
        })
    })
    describe("3. Add to the instructors array", () => {
        it("contains the 3 instructors ", () => {
            chai.assert.strictEqual(i.length, 3, "Be sure to use the contacts array to add to instructors.")
        })
    })
})