<template>
    <div class="divWrap">
        <h1>{{time}}</h1>
        <button @click="btnClick">{{btnStatus?'暂停':"开始"}}</button>

        <div>
          <Jsx msg="父组件消息"></Jsx>
        </div>
    </div>
</template>


<script>
import Jsx from './Jsx.js'

export default {
    data(){
        return {
            time:0,
            timeId:null,
            btnStatus:true,
        }
    },
    created(){
       this.setTime()
    },
    methods:{
       setTime(){
          this.timeId = setInterval(()=>{
              this.time += 1
          },1000)
       },
       btnClick(){
           if(this.btnStatus){
               clearInterval(this.timeId)
           }else{
               this.setTime()
           }

           this.btnStatus = !this.btnStatus;
       }
    },
    components:{
        Jsx,
    }
}
</script>

<style scoped>
.divWrap{

}
</style>
