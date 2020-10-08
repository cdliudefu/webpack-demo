import one from './public/one'


one()
console.log("pageOne 页面")

// 懒加载 two.js
import(/*webpackChunkName 'two.js'*/ './public/two.js').then(module=>[
    module.default()
])