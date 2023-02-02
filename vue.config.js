const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/styles/scss/_variables.scss";
        @import "@/styles/scss/_mixins.scss";
        `,
      },
    },
  },
};
