let btn = document.querySelector('button')


btn.onclick = ()=>{
    import(/*webpackChunkName: "alert"*/ './alert').then(module=>{
         module.default()
    })
}

