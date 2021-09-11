<template>
    <div class="demo1">
        <div :style="divStyle"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            divStyle:{
                top: '100px',
                left: '100px',
                backgroundColor: 'red',
            }
        };
    },
    methods: {
        right(){
            this.divStyle.left = parseInt(this.divStyle.left) + 0 + 'px';
        }
    }
}
</script>

<style scoped>
div{
    width: 100px;
    height: 100px;
    background-color: blue;
}
</style>