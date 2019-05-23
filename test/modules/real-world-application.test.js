let res = ["scarlet", "sunset-orange", "vivid-tangerine", "macaroni-and-cheese", "mango-tango", "banana-mania", "dandelion", "canary", "inchworm", "asparagus", "granny-smith-apple", "fern", "shamrock", "mountain-meadow", "jungle-green", "caribbean-green", "tropical-rain-forest", "robins-egg-blue", "teal-blue", "outer-space", "pacific-blue", "cerulean", "denim", "wild-blue-yonder", "indigo", "manatee", "blue-bell", "purple-heart", "royal-purple", "wisteria", "vivid-violet", "purple-mountains-majesty", "fuchsia", "pink-flamingo", "jazzberry-jam", "eggplant", "cerise", "wild-strawberry", "cotton-candy", "razzmatazz", "pig-pink", "blush", "tickle-me-pink", "mauvelous", "pink-sherbert", "fuzzy-wuzzy", "beaver", "tumbleweed", "desert-sand", "almond", "shadow", "timberwolf", "antique-brass"]
describe("real-world-application.js", () => {
    let c
    try {
        c = crayola1990
    } catch (e) {
        c = undefined
    }
    describe("1. urlSlugs Function", () => {
        let urlSlugs = window["urlSlugs"]
        it('the array contains all the keys from the "me" object', () => {
            chai.assert.sameMembers(urlSlugs(c), res, 'Make sure to return and array of the keys')
        })
    })
})
