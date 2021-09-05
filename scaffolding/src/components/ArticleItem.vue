<template>
  <div class="articleitem">
    <!-- 单一文章信息开始 -->
    <div v-for="(item, i) in articleList" :key="i">
      <!-- 点击后传入文章 -->
	  <!-- 通过传入已经从articlelist中获取的data中的文章id，再次向数据库发送请求，请求文章详情的内容 -->
      <router-link :to="`/article?id=${item.id}`">
        <!-- 文章标题开始 -->
        <div class="articleItem-header">{{ item.subject }}</div>
        <!-- 文章标题结束 -->
        <!-- 文章图文信息开始 -->
        <div class="articleItem-wrapper">
          <!-- 文章图像开始  -->
          <div class="articleImg">
            <img :src="`/img/articles/${item.image}`" />
          </div>
          <!-- 文章图像结束 -->
          <!-- 文章简介开始 -->
          <div class="articleDes">{{ item.description }}</div>
          <!-- 文章简介结束 -->
        </div>
        <!-- 文章图文信息结束 -->
      </router-link>
    </div>
    <!-- 单一文章信息结束 -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ArticleItem",

  props: ["selected", "article"],

  data() {
    return {
      navactive: "1",
      show: false,
    };
  },

  watch: {
    selected(newVal) {
      console.log(newVal);
      // 发送http请求，获取UI类别下
      axios
        .get("/articles", {
          params: { cid: newVal, page: newVal },
        })
        .then((result) => {
          this.article = result.data.results;
          console.log(this.article);
        });
    },
  },
  computed: {
    articleList: function () {
      return this.article;
    },
    page: function () {
      return this.selected;
    },
  },
};
</script>

<style scoped>
.articleItem {
  padding: 10px 0;
  margin: 0 10px;
  border-bottom: 1px solid #999;
}
.articleItem-header {
  font-weight: 600;
  font-size: 17px;
  color: #1a1a1a;
  line-height: 22px;
}
.articleItem-wrapper {
  display: flex;
  align-items: center;
  padding-top: 10px;
  width: 100%;
}
.articleImg {
  margin-right: 15px;
}
.articleImg img {
  width: 112px;
  height: 74px;
  border-radius: 5px;
}
.articleDes {
  height: 65px;
  font-size: 15px;
  overflow: hidden;
  font-weight: 400;
  text-overflow: ellipsis;
  line-height: 21px;
  letter-spacing: normal;
  color: #444;
}
</style>
