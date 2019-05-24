// #region truthyExtractor helpers
let testObj = { firstName: "Theo", middleName: "", lastName: "Gerrard" }
let answerObj = { firstName: "Theo", lastName: "Gerrard" }

function onlyTruthy(obj) {
    if (typeof obj == "undefined") return false
    for (let prop in obj) {
        if (!obj[prop]) return false
    }
    return true
}
// #endregion

let m
try {
    m = me
} catch (e) {
    m = undefined
}
describe("objects.js", () => {
    describe("1. truthyExtractor Function", () => {
        let truthyExtractor = window["truthyExtractor"]
        it("returns an object", () => {
            chai.assert.isObject(truthyExtractor(testObj), "The return type must be an object.")
        })
        it("Returns a new object with only truthy values", () => {
            chai.assert.isTrue(onlyTruthy(truthyExtractor(testObj)), "The return object should only contain truthy values.")
        })
        it("Returns an object that is not empty", () => {
            chai.assert.hasAllKeys(truthyExtractor(testObj), answerObj, "Be sure to return an object that is not empty")
        })
    })
    describe("2. change me", () => {
        it('the "me" variable has your values instead', () => {
            chai.assert(m["name"] != "Jake Overall", 'Make sure to change the property values in the "me" object')
        })
    })
    describe("3. objectKeys Function", () => {
        let objectKeys = window["objectKeys"]
        it('the array contains all the keys from the "me" object', () => {
            chai.assert.sameMembers(objectKeys(m), ['name', 'age', 'hair color'], 'Make sure to return and array of the keys')
        })
    })
})