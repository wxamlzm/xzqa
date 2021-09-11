<template>
    <div>
        arr:{{arr}}
        <button @click="update"></button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            arr: ['鹤岗', '北京', '广州', '上海']
        }
    },

    methods: {
        update(){
            this.citys[0] = '毛裤'
            // 解决办法：使用数组api来访问数组，可以让vue监控

        }
    }
}
</script>