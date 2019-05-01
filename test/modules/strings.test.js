describe("Strings.js", () => {
  describe("Uppercase Function", () => {
    let uppercase = window['uppercase']
    it("works with simple input", () => {
      chai.assert.strictEqual("I", uppercase("i"), "Be sure to uppercase the letter i")
    })

    it("Works with more than one character input", () => {
      chai.assert.strictEqual("hello I call myself joan", uppercase("hello i call myself joan"), "Be sure to uppercase the letter i")
    })

    it("Only uppercases I in reference to oneself", () => {
      chai.assert.strictEqual("When I went to the mall I bought a pair of shoes.", uppercase("When i went to the mall i bought a pair of shoes."), "You can't uppercase every letter i")
    })
  })

  describe("LetterCount Function", () => {
    let letterCount = window['letterCount']
    it("works with simple input", () => {
      chai.assert.strictEqual("I", letterCount("i"), "Be sure to uppercase the letter i")
    })

    it("Works with more than one character input", () => {
      chai.assert.strictEqual("hello I call myself joan", letterCount("hello i call myself joan"), "Be sure to uppercase the letter i")
    })

    it("Only uppercases I in reference to oneself", () => {
      chai.assert.strictEqual("When I went to the mall I bought a pair of shoes.", letterCount("When i went to the mall i bought a pair of shoes."), "You can't uppercase every letter i")
    })
  })
})