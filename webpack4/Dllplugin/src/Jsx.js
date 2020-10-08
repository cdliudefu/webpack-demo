import Vue from 'vue'

Vue.component('test-jsx',{
    render(){
        return (
            <button onClick={this.msgFun}>点击</button>
        )
    },
    methods:{
        msgFun(){
            console.log(this)
            alert('jsx语法')
        }
    }
   
})

export default {
    render (h) { 
        return (
            <div id="foo">
               <h1> 测试JSX语法</h1>
               <div>
                   <test-jsx></test-jsx>
               </div>
            </div>
        )
    }
}

