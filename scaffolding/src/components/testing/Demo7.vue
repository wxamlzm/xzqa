<template>
    <div>
        <!-- 过滤器 -->
        <!-- 专门对变量的原始值进行加工，然后再显示的函数 -->
        <h3>{{ uname }}</h3>
        <h3>{{ age }}</h3>
        <h3>{{ sex | gender}}</h3>
        <h3>{{ salary | format(5)}}</h3>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                uname: 'zs',
                age: 25,
                sex: 1,
                salary: 100000
            }
        },
        filters:{
            gender(sex){
                return sex?'男':'女'
            },
            format(salary, num){
                return salary.toFixed(num);
            }
        }
    }
    
</script>