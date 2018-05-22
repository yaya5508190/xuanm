<template>
    <div v-resize="onResize">
        <v-carousel class="app-carousel"
                    :style="{height : windowSize.x/3.132 + 'px'}"
                    :hide-delimiters="windowSize.x < 800 ? true : false">
            <v-carousel-item v-for="(item,i) in carouselItems"
                             :src="item.img"
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
                        <v-card-text class="link" style="height: 120px">
                            <template v-if="i == 0">
                                <nuxt-link v-for="(topic,j) in topic_2" :to="'/topic/' + topic._id" :key="topic._id">{{topic.title}}</nuxt-link>
                            </template>
                            <template v-if="i == 1">
                                <nuxt-link v-for="(topic,j) in topic_3" :to="'/topic/' + topic._id" :key="topic._id">{{topic.title}}</nuxt-link>
                            </template>
                            <template v-if="i == 2">
                                <nuxt-link v-for="(topic,j) in topic_4" :to="'/topic/' + topic._id" :key="topic._id">{{topic.title}}</nuxt-link>
                            </template>
                            <template v-if="i == 3">
                                <nuxt-link v-for="(topic,j) in topic_5" :to="'/topic/' + topic._id" :key="topic._id">{{topic.title}}</nuxt-link>
                            </template>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat to="/marketing">查看详情</v-btn>
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
                    <template v-for="(item,i) in topic_1">
                        <v-flex class="lg4 md4 sm4 xs4" v-if="i < 9">
                            <v-card class="scaleImage" nuxt :to="'/topic/' + item._id">
                                <v-card-media
                                        :src="item.coverImg"
                                        :style="{height : windowSize.x/5 + 'px'}"
                                >
                                </v-card-media>
                                <div class="case-pic-info">{{item.title}}</div>
                            </v-card>
                        </v-flex>
                    </template>
                    <v-flex class="lg12 md12 sm12 xs12" style="text-align: center;font-size: 20px">
                        <v-btn outline color="grey darken-2" large round to="/piclist">更多案例</v-btn>
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
        <div class="collaborators" >
            <h3 class="head3">合作伙伴</h3>
            <h6 class="head6">Service Items</h6>
            <v-layout row wrap >
                <v-flex lg2 md2 sm4 xs6 v-for="(item,i) in collaborators" :key="i" class="text-sm-center text-xs-center">
                    <img :src="item.img" width="150px" />
                </v-flex>
            </v-layout>
        </div>
    </div>
</template>

<script>
  import axios from '~/plugins/axios'
  import _ from 'lodash'

  export default {
    layout: 'index',
    async asyncData ({ params }) {
      let carouselData = await axios.get('carousels')
      let partnerData = await axios.get('partner')
      let topicsData = await axios.get('topic')
      return {
        carouselItems: carouselData.data,
        collaborators: partnerData.data,
        topics: topicsData.data
      }
    },
    mounted () {
    },
    data: () => ({
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
      windowSize: {
        x: 0,
        y: 0
      }
    }),
    computed: {
      topic_1 () {
        let successes = _.filter(this.topics, {'topicType': 1})
        successes = _.reverse(_.sortBy(successes, function (success) {
          return new Date(success.createDate)
        }))
        return successes
      },
      topic_2 () {
        return _.filter(this.topics, {'topicType': 2})
      },
      topic_3 () {
        return _.filter(this.topics, {'topicType': 3})
      },
      topic_4 () {
        return _.filter(this.topics, {'topicType': 4})
      },
      topic_5 () {
        return _.filter(this.topics, {'topicType': 5})
      }
    },
    methods: {
      onResize () {
        this.windowSize = {x: window.innerWidth, y: window.innerHeight}
      }
    }
  }
</script>

<style>
</style>
