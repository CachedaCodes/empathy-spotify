import Vue from "vue";
import App from "./App.vue";
import store from "./store";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay, faMicrophone, faCompactDisc, faCalendarDay, faSearch } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPlay, faMicrophone, faCalendarDay, faCompactDisc, faSpotify, faSearch);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
