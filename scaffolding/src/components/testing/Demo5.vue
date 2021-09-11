<template>
    <div>
        <!-- 侦听器/监听函数/监视函数 -->
        {{num}}<button @click="up">++</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            num:0,
        }
    },
    methods: {
        // 当监听data中的变量值的变化，只要变量的值发生变化，就自动执行监听函数
        up(){
            this.num++
        }
    },
    // 所有监听函数必须写在watch里
    watch: {
        num(newVal, oldVal){
            // 函数名必须要跟监听的变量名一致            
            console.log(`newVal = ${newVal}`,`oldVal = ${oldVal}`)
        }
    }
}
</script>