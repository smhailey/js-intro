import './setup.js'
import './modules/strings.test.js'
import './modules/numbers.test.js'

let loadDynamicModules = async function(){
  await import("https://bcw.blob.core.windows.net/public/tester/.test/modules/dynamic.test.js")
  mocha.run()
}


loadDynamicModules()

