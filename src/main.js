var moduleA=require("./a")
var moduleB=require("./b")

console.log(moduleB)
moduleA.aa();
moduleB.until();
function m(){
	console.log("来自main.js")
}
m();

require('./style.css')
require('./font/iconfont.css')