<template>
  <div class="home">
    <!-- 顶部header -->
    <mt-header title="首页" fixed>
      <router-link to="/register" slot="left">注册</router-link>
	  <span v-if = "isLogin" slot="right">欢迎{{uname}}</span>
      <router-link to="/login" slot="right" v-else>登录</router-link>
    </mt-header>
    <!-- 导航栏 -->
    <mt-navbar class="nav" v-model="selected" fixed>
      <mt-tab-item v-for="(item, i) in cats" :key="i" :id="`${item.id}`">
        {{ item.category_name }}
      </mt-tab-item>
    </mt-navbar>
    <!-- 切换面板 -->
    <mt-tab-container
      class="tab-container"
      v-infinite-scroll="loadMoreArticle"
      :infinite-scroll-disabled="loading"
      infinite-scroll-immediate-check="true"
    >
      <mt-tab-container-item>
        <swipe></swipe>
        <article-item :selected="selected" :article="article"></article-item>
      </mt-tab-container-item>
    </mt-tab-container>
    <!-- 底部选项卡 -->
    <mt-tabbar v-model="tabactive" fixed>
      <mt-tab-item id="shouye">
        <!-- tabactive 如果是shouye 那就是1，不是那就是0 -->
        <img
          v-if="tabactive == 'shouye'"
          src="@/assets/img/main_1.png"
          slot="icon"
        />
        <img v-else src="@/assets/img/main_0.png" slot="icon" />
        首页</mt-tab-item
      >
      <mt-tab-item id="wode">
        <img
          v-if="tabactive == 'wode'"
          src="@/assets/img/me_1.png"
          slot="icon"
        />
        <img v-else src="@/assets/img/me_0.png" slot="icon" />
        我的</mt-tab-item
      >
    </mt-tabbar>
  </div>
</template>

<script>
import Swipe from "@/components/Swipe.vue";
import ArticleItem from "@/components/ArticleItem.vue";
import axios from "axios";
import {mapState} from "vuex";
import {loadArticles} from "@/assets/js/loadArticles.js"

export default {
	components: {
		Swipe,
		ArticleItem,
		loadArticles,
	},
	
	data() {
		return {
			selected: "1",
			tabactive: "shouye",
			// 存放从数据库获取的当前页面的分页类型
			cats: [],
			// 限制无限滑动的首屏加载
			loading: true,
			// 存放当页的文章类型数据
			article: [],
			// 存储当前的内容页数
			page: 1,
		};
	},

	methods: {
		// 初始化时载入article
		initNav(){
			// 发送http请求，获取UI类别，并赋值给数组，用于显示nav
			axios.get("/category").then( result=> this.cats = result.data.results);
		},
		// 初始化时载入article
		initArticleList(){
			var cid = this.selected;

			var showArticleList = articleList =>  this.article = articleList;
			
			loadArticles(cid, this.page, showArticleList);
		},
		// 当ui定义事件触发时
		loadMoreArticle(){
			// 先解锁无限滑动的开关
			this.loading = false;
			// 在触底的同时，发送请求从上数据库获取下一页的内容，并将下一页内容追加到当前内容中，做页面内容渲染
			// 当前所在的类别
			var cid = this.selected;
			// 获取下一页
			this.page++;

			//  定义将追加的数据添加到现有的列表中，同时指定其渲染形式
			var showArticleList = (articleList) => {
				// 重新关闭开关
				this.loading = true;
				// 追加到article中
				this.article.push(...articleList);
			};

			loadArticles(cid, this.page, showArticleList);
		},
  	},

	watch: {
		// 监听tabactive的变化，将会传入两个参数
		tabactive(newval, oldval) {
			if (newval == "wode") {
			this.$router.push("/me");
			}
		}
	},
	computed: {
		...mapState(["uname", "isLogin"])
	},

	mounted(){
		this.initNav();
		this.initArticleList();
		console.log(this.uname, this.isLogin)
	},
};
</script>

<style>
.nav {
  margin-top: 40px;
}
.tab-container {
  margin-top: 98px;
  margin-bottom: 70px;
}
</style>