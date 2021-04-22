module.exports = {
    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
          args[0].title= '台灣自來水股份有限公司圖資管理系統(手機版)'
          return args
        })
    }
  }
