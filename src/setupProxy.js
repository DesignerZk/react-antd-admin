const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    proxy("/hd", {
      target: "http://139.155.94.196:4000",
      changeOrigin: true,
      pathRewrite:{
          "^/hd": ""
      }
    })
  );

}
