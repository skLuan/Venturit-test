import { createApp } from "vue";
import App from "./App.vue";
import "jquery";
import "bootstrap";
import "@/assets/styles/styles.scss";

// -------------------------------------------------------Icons from font awesome

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faArrowLeft,
  faArrowRight,
  faCaretRight,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


library.add(faSearch, faArrowRight, faArrowLeft, faCaretRight, faCircle);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
