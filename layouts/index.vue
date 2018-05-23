<template>
    <v-app>
        <v-container fluid style="padding: 0 0 0 0">
            <v-layout row class="header" v-scroll="onScroll">
                <v-flex lg12 md12 sm12>
                    <div class="logo"><img src="/images/m-logo.png"></div>
                </v-flex>
                <!--<v-flex lg2 md3 sm5 hidden-xs-only>-->
                    <!--<div style="float: left;">-->
                        <!--<v-icon style="color: #c62c2d" large>phone</v-icon>-->
                    <!--</div>-->
                    <!--<div class="tel">-->
                        <!--<span class="number">180-5199-0220<br/>180-2013-3922</span>-->
                    <!--</div>-->
                <!--</v-flex>-->
                <div class="phone">
                    <div style="float: left;">
                        <v-icon style="color: #c62c2d;font-size: 45px">phone</v-icon>
                    </div>
                    <div class="tel">
                        <span class="number">180-5199-0220<br/>180-2013-3922</span>
                    </div>
                </div>
            </v-layout>
            <v-toolbar style="background-color: #c62c2d" :fixed="offsetTop>100">
                <v-spacer></v-spacer>
                <v-toolbar-items class="hidden-xs-only app-toolbar" v-for="item in toolbarItems" :key="item.title" >
                    <v-btn flat dark :to="item.url" active-class class="title" >{{item.title}}</v-btn>
                </v-toolbar-items>
                <v-spacer></v-spacer>
                <v-menu offset-y>
                    <v-toolbar-side-icon slot="activator" class="hidden-sm-and-up" dark></v-toolbar-side-icon>
                    <v-list style="background-color: #c62c2d" dark>
                        <v-list-tile v-for="item in toolbarItems" :key="item.title" :to="item.url" active-class>
                            <v-list-tile-title >{{ item.title }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </v-toolbar>
            <nuxt :style="{ marginTop: offsetTop>100?'60px':'0px' }"/>
            <v-footer height="auto">
                <v-card
                        flat
                        tile
                        class="grey darken-3 lighten-1 white--text text-xs-center footer"
                >
                    <v-card-text>
                        <div class="logo"><img src="/images/logo.png"></div>
                    </v-card-text>
                    <v-card-text class="white--text pt-0">
                        <p class="intro">
                            “玄米数字”主创团队拥有十多年媒体创意及整合技术执行的从业经验<br/>熟悉传统展示媒介向多元化互动新媒体+互联网信息整合的综合展示技术<br/>专业综合场景展示及氛围营造的整合服务机构
                        </p>
                    </v-card-text>
                    <v-card-text class="white--text pt-0">
                        <v-layout row wrap>
                            <v-flex lg4 md4 sm4 xs12>
                                <h4>公司地址：</h4>
                                <p>江苏省南京市鼓楼区建宁路65号金川科技园17栋203</p>
                            </v-flex>
                            <v-flex lg4 md4 sm4 xs12>
                                <h4>联系方式：</h4>
                                <p>180-5199-0220 / 180-2013-3922</p>
                            </v-flex>
                            <v-flex lg4 md4 sm4 xs12>
                                <h4>E-mail：</h4>
                                <p><a href="mailto:xuanmi@aliyun.com">xuanmi@aliyun.com</a></p>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                    <v-card-text class="white--text copyright">
                        &copy;2018 — <strong>XUANM All Rights Reserved 苏ICP备17053041号</strong>
                    </v-card-text>
                </v-card>
            </v-footer>
        </v-container>
    </v-app>
</template>
<script>
  export default {
    data: () => ({
      lorem: `Lorem`,
      toolbarItems: [
        {
          title: '首页',
          url: '/'
        }, {
          title: '服务项目',
          url: '/marketing'
        }, {
          title: '案例展示',
          url: '/piclist'
        }, {
          title: '玄米新闻',
          url: '/newlist'
        }, {
          title: '关于我们',
          url: '/about'
        }, {
          title: '联系我们',
          url: '/contact'
        }
      ],
      offsetTop: 0
    }),
    methods: {
      onScroll (e) {
        this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
      }
    }
  }
</script>
<style>
    html {
        font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
        font-size: 16px;
        word-spacing: 1px;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        box-sizing: border-box;
    }
</style>
