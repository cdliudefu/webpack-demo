import one from './public/one'

console.log("pageTwo 页面")


// 懒加载 two.js
import(/*webpackChunkName 'two.js'*/ './public/two.js').then(module=>[
    module.default()
])
