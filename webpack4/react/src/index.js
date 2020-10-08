import React,{Component} from 'react'
import {render} from 'react-dom'



class Home extends Component{
    constructor(props){
       super()
       this.state = {
           msg:"你好"
       }
    }
    changeTitle(){
        this.setState({
            msg:'内容改变了'
        })
    }
    render(){
        return (
            <div>
                <h1>{this.state.msg}</h1>
                <p><button onClick={()=>this.changeTitle()}>点击变化</button></p>
            </div>
        )
    }
}



render(<Home/>,document.getElementById('root'))