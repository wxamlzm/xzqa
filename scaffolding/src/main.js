import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import { Button, Cell, Header, Field, Navbar, TabItem, TabContainer, TabContainerItem, Tabbar, Swipe, SwipeItem} from 'mint-ui'
import 'mint-ui/lib/style.css'


axios.defaults.baseURL = 'http://127.0.0.1'
Vue.prototype.axios = axios;
Vue.config.productionTip = false

Vue.component(Tabbar.name, Tabbar);
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Header.name, Header);
Vue.component(Field.name, Field);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
