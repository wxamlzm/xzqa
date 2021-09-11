<template>
    <div>
        <!-- 计算属性 -->
        <!-- 保存一个函数的执行结果 -->
        <ul>
            <li v-for="(p,i) of cart" :key="i">
                {{p.lname}} | {{p.price}} | {{p.count}} | {{p.price * p.count}}
                <button @click="p.count++">++</button>
            </li>
        </ul>
        <h3>{{total}}</h3>
    </div>
</template>

<script>
export default {
    data(){
        return{
            cart: [
                {lid: 1, lname: '华为', price: 5999, count: 2},
                {lid: 2, lname: '锤子', price: 3099, count: 3},
                {lid: 3, lname: '三星', price: 4099, count: 5},
            ]
        }
    },
    // 计算属性写在computed
    computed: {
        // 当修改了计算属性中的结果所依赖的值，计算属性会自动执行
        total(){
            var sum = 0;
            for (var p of this.cart){
                sum += p.price * p.count;
            }

            return sum
        }
    }
    // 计算属性写成对象形式

}
</script>