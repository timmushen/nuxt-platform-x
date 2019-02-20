const { resolve } = require("path");
import Vue from "vue";

/**********************************
 * Vue Font Awesome
 **********************************/
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
config.autoAddCss = true;

// Fontawesome regular fonts
// import { far } from "@fortawesome/pro-regular-svg-icons";
// library.add(far);

// Fontawesome solid fonts
import { fas } from "@fortawesome/pro-solid-svg-icons";
library.add(fas);

// Fontawesome light fonts
import { fal } from "@fortawesome/pro-light-svg-icons";
library.add(fal);

Vue.component("XIcon", FontAwesomeIcon);

/**********************************
 * Vue Moment
 **********************************/
import VueMoment from "vue-moment";
// import moment from 'moment-timezone'
Vue.use(VueMoment);
