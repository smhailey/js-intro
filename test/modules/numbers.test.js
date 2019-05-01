describe("numbers.js", () => {
  let add = window['add']
  
  describe("Add Function", () => {
    it("works with simple input", () => {
      chai.assert.strictEqual(9, add(4, 5))
    })
  })
})