describe("Strings.js", () => {
  describe("uppercase Function", () => {
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

  describe("letterCount Function", () => {
    let letterCount = window['letterCount']
    it("finds the number of times a letter occurs in a string", () => {
      chai.assert.strictEqual(52, letterCount('JavaScript, not to be confused with Java, was created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not always known as JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape. In September of 1995 the name was changed to LiveScript, then in December of the same year, upon receiving a trademark license from Sun, the name JavaScript was adopted. This was somewhat of a marketing move at the time, with Java being very popular around then.', "a"), 'Be sure to check for both lower and upper case letters.')
    })
  })

  describe("uppercaseWord Function", () => {
    let uppercaseWord = window['uppercaseWord']
    it("works with word input", () => {
      chai.assert.strictEqual(uppercaseWord("I scream, you scream, we all scream for icecream", "scream"), "I SCREAM, you SCREAM, we all SCREAM for icecream", 'Be sure to watch for the ","s')
    })
  })
})