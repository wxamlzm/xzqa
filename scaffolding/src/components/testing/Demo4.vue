<template>
    <div>
        <input type="text" v-model="str1" @input="oni" @change="onc">
        <p>{{str1}}</p>
        <textarea name="" id="" cols="30" rows="10" v-model="str2"></textarea>
        <p>{{str2}}</p>

        <!-- vue会把v-model中的只和value的值笔记，相同为选中状态 -->
        <input type="radio" name="sex" value="1" v-model="sex">
        <input type="radio" name="sex" value="0" v-model="sex">
        <p>{{sex}}</p>
        
        <input type="checkbox" v-model="isCheck">
        <p>{{isCheck}}</p>
        <!-- 多选中的checkbox -->
        <input type="checkbox" v-model='likes' value="sk">
        <input type="checkbox" v-model='likes' value="kc">
        <input type="checkbox" v-model='likes' value="ky">
        <h3>{{likes}}</h3>
        <!--  -->
        <select name="" id="" v-model="citys" multiple>
            <option value="bj">北京</option>
            <option value="sh">上海</option>
            <option value="gz">广州</option>
        </select>
        <h4>{{citys}}</h4>
    </div>
</template>

<script>
export default {
    data(){
        return {
            str1: '',
            str2: '',
            sex: 1,
            isCheck: false,
            likes: [],
            citys: []
        };
    },
    methods: {
        oni(){
            // 一遍输入一遍触发
            console.log('oni'+this.str1);
        },
        onc(){
            // 变化后触发结果
            console.log('onc'+ this.str2);
        }
    }
}
</script>