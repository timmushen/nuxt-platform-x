const { resolve } = require("path");

async function platformX(moduleOptions) {
  const options = Object.assign({}, this.options.platformX, moduleOptions);

  /**********************************
   * Add Plugins
   **********************************/
  this.addPlugin({
    src: resolve(__dirname, "plugin.js"),
    fileName: "nuxt-platform-x.js",
    options
  });

  /**********************************
   * Add Favicon
   **********************************/
  this.options.head.link.push({
    rel: "icon",
    hid: "favicon",
    type: "image/x-icon",
    href: resolve(__dirname, "../lib/assets/favicon.ico")
  });
  /**********************************
   * Add CSS
   **********************************/
  // add fix for fontawesome - fixes flashes
  this.options.css.unshift("@fortawesome/fontawesome-svg-core/styles.css");

  if (moduleOptions.includeCSS !== false) {
    this.options.css.push(
      resolve(__dirname, "../lib/assets/css/tailwind.min.css")
    );
  }

  /**********************************
   * Add Layouts
   **********************************/

  // Add 404 Layout
  this.addLayout({
    name: "404",
    src: resolve(__dirname, "layouts/404.vue")
  });

  // Add Account Layout
  this.addLayout({
    name: "account",
    src: resolve(__dirname, "layouts/account.vue")
  });

  // Add App Layout
  this.addLayout({
    name: "app",
    src: resolve(__dirname, "layouts/app.vue")
  });

  // Add error Layout
  this.addLayout({
    name: "error",
    src: resolve(__dirname, "layouts/error.vue")
  });

  // Add login Layout
  this.addLayout({
    name: "login",
    src: resolve(__dirname, "layouts/login.vue")
  });

  // Add profile Layout
  this.addLayout({
    name: "profile",
    src: resolve(__dirname, "layouts/profile.vue")
  });

  // Add register Layout
  this.addLayout({
    name: "register",
    src: resolve(__dirname, "layouts/register.vue")
  });

  /**********************************
   * Add Routes
   **********************************/
  this.extendRoutes(routes => {
    routes.push({
      path: "/privacy",
      component: resolve(__dirname, "pages/privacy.vue")
    });
    routes.push({
      path: "/terms",
      component: resolve(__dirname, "pages/terms.vue")
    });
  });
}

module.exports = platformX;
module.exports.meta = require("../package.json");
