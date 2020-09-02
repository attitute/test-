module.exports = {
    module: {
      rules: [
        // 普通的 `.scss` 文件和 `*.vue` 文件中的
        // `<style lang="scss">` 块都应用它
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                // 可以直接定义一个全局变量
                prependData: `$color: red;`
              }
            }
          ]
        }
      ]
    },
    proxyTable: { 
      '/api': {  //使用"/api"来代替"http://f.apiplus.c" 
        target: 'https://api.jisuapi.com', //源地址 
        changeOrigin: true, //改变源 
        pathRewrite: { 
          '^/api': 'http://127.0.0.1:8081' //路径重写 
          } 
      } 
    }
    // 插件忽略
  }