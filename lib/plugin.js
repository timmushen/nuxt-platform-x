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

/**********************************
 * Add Global Base Components
 **********************************/
import XTest from "./components/XTest.vue";
export { XTest };
Vue.use(XTest);

// // Topbar
// import XTopbar from "../lib/components/Base/Global/XTopbar.vue";
// Vue.component("XTopbar", XTopbar);

// // SidbarDark
// import XSidebarDark from "../lib/components/Base/Global/XSidebarDark.vue";
// Vue.component("XSidebarDark", XSidebarDark);

/**********************************
 * Add Widget Components
 **********************************/
// // Timeline
// import XTimeline from "../lib/components/Widgets/XTimeline.vue";
// Vue.component("XTimeline", XTimeline);

// // XTimeline Item
// import XTimelineItem from "../lib/components/Widgets/XTimelineItem.vue";
// Vue.component("XTimelineItem", XTimelineItem);

// // XCard
// import XCard from "../lib/components/Widgets/XCard.vue";
// Vue.component("XCard", XCard);

// // XCardAccordian
// import XCardAccordian from "../lib/components/Widgets/XCardAccordian.vue";
// Vue.component("XCardAccordian", XCardAccordian);
