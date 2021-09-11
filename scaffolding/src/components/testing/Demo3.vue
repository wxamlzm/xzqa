<template>
    <div>
        n:{{n}}
        <!-- 标准写法 -->
        <button v-on:click="n++">v-on:click</button>
        {{msg}}
        <!-- 绑定点击事件 -->
        <button @click="n++">@click</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            n: 0,
            msg: 'hello'
        };
    },
    methods: {
        say(str) {
            this.msg = str;
        }
    }
}
</script>