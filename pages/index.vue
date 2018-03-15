<template>
    <div v-resize="onResize">
        <v-carousel class="app-carousel"
                    :style="{height : windowSize.x/3.132 + 'px'}"
                    :hide-delimiters="windowSize.x < 800 ? true : false">
            <v-carousel-item v-for="(item,i) in carouselItems"
                             :src="item.src"
                             :key="i"
                             style="width: 100%;height: 100%"></v-carousel-item>
        </v-carousel>
        <div class="marketing app-content">
            <h3 class="head3">服务项目</h3>
            <h6 class="head6">Service Items</h6>
            <v-layout row wrap >
                <v-flex class="lg3 md6 sm6 xs6 pr-1 pl-1 pt-1 pb-1" v-for="(item,i) in marketingItems" :key="i">
                    <v-card>
                        <v-card-media :src="item.img" class="white--text media">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline">{{item.title}}</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-media>
                        <v-card-text class="link">
                            <a href="/">{{item.title}}</a>
                            <a>{{item.title}}</a>
                            <a>{{item.title}}</a>
                            <a>{{item.title}}</a>
                            <a>{{item.title}}</a>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat>查看详情</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </div>
        <div class="successing app-content">
            <h3 class="head3">成功案例</h3>
            <h6 class="head6">Successful case</h6>
            <v-container fluid grid-list-md>
                <v-layout row wrap>
                    <v-flex class="lg4 md4 sm4 xs4" v-for="(item,i) in successingItems" :key="i">
                        <v-card nuxt to="/">
                            <v-card-media
                                    :src="item.img"
                                    :style="{height : windowSize.x/4 + 'px'}"
                            >
                            </v-card-media>
                            <div class="case-pic-info">{{item.title}}</div>
                        </v-card>
                    </v-flex>
                    <v-flex class="lg12 md12 sm12 xs12" style="text-align: center;font-size: 20px">
                        <v-btn outline color="grey darken-2" large round>更多案例</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
        <div class="introduction_info">
            <img src="/images/introduction_info.jpg"/>
        </div>
        <div class="clothing">
            <h3 class = "head3">服务领域</h3>
            <h6 class = "head6">Service field</h6>
            <v-layout row wrap class="box-container">
                <v-flex class="lg3 md6 xs6">
                    <a href="#" class="box">
                        <i class="iconfont icon-dichanjianzhu"></i>
                        <h4>商业地产</h4>
                        <p>为地产售楼中心及线下推广活动提供多媒体数字化综合应用解决方案</p>
                    </a>
                </v-flex>
                <v-flex class="lg3 md6 xs6 ">
                    <a href="#" class="box">
                        <i class="iconfont icon-wenhua"></i>
                        <h4>文旅产业</h4>
                        <p>为线下文化旅游产业园提供综合多媒体互动展示配套服务</p>
                    </a>
                </v-flex>
                <v-flex class="lg3 md6 xs6 ">
                    <a href="#" class="box">
                        <i class="iconfont icon-jigou"></i>
                        <h4>企业机构</h4>
                        <p>为企业机构提供形象展示、产品介绍、活动发布等综合数字化解决方案</p>
                    </a>
                </v-flex>
                <v-flex class="lg3 md6 xs6 ">
                    <a href="#" class="box">
                        <i class="iconfont icon-yuanxiao"></i>
                        <h4>教育培训</h4>
                        <p>为院校提供校史馆建设、科技智能化教育课程解决方案</p>
                    </a>
                </v-flex>
            </v-layout>
        </div>
        <div class="introduction_info">
            <img src="/images/contact.jpg"/>
        </div>
        <div class="collaborators">
            <h3 class="head3">合作伙伴</h3>
            <h6 class="head6">Service Items</h6>
            <v-layout row wrap>
                <v-flex lg2 md2 sm4 xs6 v-for="(item,i) in collaborators" :key="i" class="text-sm-center text-xs-center">
                    <img :src="item.img" />
                </v-flex>
            </v-layout>
        </div>
    </div>
</template>

<script>
  export default {
    mounted () {
      this.onResize()
    },
    data: () => ({
      carouselItems: [
        {
          src: '/images/banner.jpg'
        }, {
          src: '/images/banner3.jpg'
        }, {
          src: '/images/banner4.jpg'
        }, {
          src: '/images/banner5.jpg'
        }, {
          src: '/images/banner6.jpg'
        }, {
          src: '/images/banner7.jpg'
        }, {
          src: '/images/banner8.jpg'
        }
      ],
      marketingItems: [
        {
          title: '互动投影',
          img: '/images/m1_01.jpg',
          href: ''
        }, {
          title: '触控显示',
          img: '/images/m1_02.jpg',
          href: ''
        }, {
          title: '影视动画',
          img: '/images/m1_03.jpg',
          href: ''
        }, {
          title: '数字展厅',
          img: '/images/m1_04.jpg',
          href: ''
        }
      ],
      successingItems: [
        {
          title: '互动投影',
          img: '/images/m2_01.jpg',
          href: ''
        }, {
          title: '触控显示',
          img: '/images/m2_01.jpg',
          href: ''
        }, {
          title: '影视动画',
          img: '/images/m2_01.jpg',
          href: ''
        }, {
          title: '数字展厅',
          img: '/images/m2_01.jpg',
          href: ''
        }, {
          title: '互动投影',
          img: '/images/m2_01.jpg',
          href: ''
        }, {
          title: '触控显示',
          img: '/images/m2_01.jpg',
          href: ''
        }, {
          title: '影视动画',
          img: '/images/m2_01.jpg',
          href: ''
        }, {
          title: '数字展厅',
          img: '/images/m2_01.jpg',
          href: ''
        }, {
          title: '数字展厅',
          img: '/images/m2_01.jpg',
          href: ''
        }
      ],
      collaborators: [
        {
          img: '/images/link1.jpg'
        }, {
          img: '/images/link2.jpg'
        }, {
          img: '/images/link4.jpg'
        }, {
          img: '/images/link5.jpg'
        }, {
          img: '/images/link6.jpg'
        }, {
          img: '/images/link7.jpg'
        }
      ],
      windowSize: {
        x: 0,
        y: 0
      }
    }),
    methods: {
      onResize () {
        this.windowSize = {x: window.innerWidth, y: window.innerHeight}
      }
    }
  }
</script>

<style>
</style>
