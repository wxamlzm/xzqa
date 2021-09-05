<template>
    <div class="article">
        <!-- 顶部导航开始 -->
        <header>
            <mt-header title="学前端，上学问">
                <router-link slot="left" to="/">
                    <mt-button  icon="back"></mt-button>
                </router-link>
            </mt-header>
        </header>
        <!-- 导航导航结束 -->
        <!-- 正文区域开始 -->
        <div class="question">
            <!-- 标题开始 -->
            <div class="question-header">
                <div class="question-header-title">
                   {{this.articleDetails.subject}}
                </div>
                <div class="question-header-datetime">
                   2020年11月30日16:49
                </div>
            </div>
            <!-- 标题结束 -->
            <!-- 作者信息开始 -->
            <div class="author-info">
                <img src="/img/avatar/0.jpg" class="author-info-avatar">
                <div class="author-info-detail">
                    <div class="author-info-nickname">{{this.articleDetails.nickname}}</div>
                    <div class="author-info-badge">
                        共<mt-badge type="primary" size="small">123</mt-badge>篇
                    </div>
                </div>
                
            </div>
            <!-- 作者信息结束 -->
            <!-- 内容开始 -->
            <div class="question-content">
                <div class="rich-content" v-html = "this.articleDetails.content"></div>
            </div>
            <!-- 内容结束 -->
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            articleDetails: {}
        }
    },
    // 在访问到该页面的时候，根据传入的参数，
    // 向服务器请求对应的数据
    // 并绑定在对应的元素内
    mounted(){
        // 初始化的时候，通过传过来的id，向数据库发送请求，并进行时数据的对应绑定
        // 测试
        console.log(this.$route.query.id);
        var id = this.$route.query.id;
        //  通过数据库和路由比对，确认传参为id，路径为detail来获取 文章详情并绑定
        axios.get('/detail', {params: {id}})
        .then( result => {
            this.articleDetails = result.data.result;
            console.log(result.data.result)
            });
    }
}
</script>

<style>
.article{
    background: #f6f6f6;
    height: 100vh;
}
.question-header{
    margin-bottom: 5px;
    padding: 10px;
    background: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
}
.question-header-title {
    font-size: 18px;
    color: #1a1a1a;
    line-height: 1.5;
}
.question-header-datetime{
    margin-top:5px;
    font-size:14px;
    color:#646464;
}
.author-info{
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    padding: 8px 10px;
    background: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    
}
.author-info-avatar{
    width:40px;
    height: 40px;
    border-radius: 100%;
}
.author-info-detail{
    margin-left:15px;
}
.author-info-nickname{
    font-size: 15px;
    margin-bottom:6px;
}
.author-info-badge{
    font-size: 14px;
}
.question-content {
    padding: 10px;
    background-color:#fff;
}

.rich-content p{
    padding: 5px 0;
    line-height: 1.7;
}
.rich-content img{
    max-width:100%;
}
</style>
