let s
let t
let a
let sc
try {
  s = sum
}
catch (e) { }
try {
  t = threes
}
catch (e) { }
try {
  a = average
}
catch (e) { }
try {
  sc = scores
}
catch (e) { }

describe("numbers.js", () => {
  describe("1. sum of variables", () => {
    it("sum up the three variables", () => {
      chai.assert.equal(s, 1081, 'remember to add them in order')
    })
  })
  describe("2. divisible by 3", () => {
    it("check each number from 20 - 100 for divisibility by 3", () => {
      chai.assert.sameMembers(t, divisibilityOfThree(), 'remember to add the divisible numbers to "threes"')
    })
  })
  describe("3. class average of the test scores", () => {
    it('find the average value of the test scores within the "scores" array', () => {
      chai.assert.strictEqual(a, averager(), 'remember to set the value of average')
    })
  })
})

function divisibilityOfThree() {
  return [...Array(101).keys()].filter(n => n > 20 && n % 3 == 0 ? n : false)
}

function averager() {
  return sc.reduce((gt, n) => gt + n) / sc.length
}
