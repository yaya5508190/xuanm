module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '全息投影,互动投影,触控显示,透明显示触控屏,VR全景,玄米数字',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'xuanm digi'},
      {
        name: 'keywords',
        content: '地面互动投影，墙面互动投影,沙盘弧幕投影,球幕投,全息投影,幕墙投影,水幕投影,投影机销售及租赁,液晶触控屏,透明显示触控屏,镜面触控屏 AR增强,触控程序开发,液晶LED拼接屏销售及租赁,多媒体展示设备,活动会展数字,地产宣传片,产品介绍演示动画,政府企业形象片,VR全景,虚拟漫游'
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: '//at.alicdn.com/t/font_433632_mgxd8yoikla3jtt9.css'},
      // {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'}
    ]
  },
  plugins: ['~/plugins/vuetify.js'],
  css: [
    '~/assets/style/app.styl',
    '~/assets/css/web.css',
    'material-design-icons-iconfont/dist/fonts/material-icons.css'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      '~/plugins/vuetify.js'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
