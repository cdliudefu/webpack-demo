const utils = require('loader-utils')

function  dispose(content,option){
    console.log(option)
   
    return content.replace(/\{\{name\}\}/g,option.name).replace(/\{\{age\}\}/g,option.age);
}



module.exports = function (source) {
    let option = utils.getOptions(this)
    let content = dispose(source,option) || {name:'暂无姓名',age:0}
    this.callback(null,content)
 };

