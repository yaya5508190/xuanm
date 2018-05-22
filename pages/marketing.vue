<template>
    <div>
        <v-parallax src="/images/banner7.png" class="app-banner">
            <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                    <div style="width: 200px;margin-top: 3%;margin-left: 1%">
                        <h1 class="white--text mb-10 display-10 text-xs-center">服务项目</h1>
                        <h3 class="white--text mb-10 display-10 text-xs-center">SERVICES PROJECT</h3>
                    </div>
                </v-flex>
            </v-layout>
        </v-parallax>
        <v-layout class="app-content mb-3" row wrap>
            <v-flex xs12>
                <h2 class="display-1 mb-2 mt-3">互动投影</h2>
            </v-flex>
            <v-flex xs12>
                <p class="body-1">互动投影系统主要通过投影显示技术和红外感应技术配合精美的数字文件来营造一种奇幻动感的交互体验。<br/>应用领域：售楼中心、活动会展、企业展厅、文化主题馆、商业空间</p>
            </v-flex>
            <v-flex sm3 xs6 v-for="(item,i) in topic_2" :key="i">
                <v-card class="scaleImage" :to="'/topic/' + item._id">
                    <v-card-media :src="item.coverImg" class="white--text media" height="180px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline">{{item.title}}</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-media>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout class="app-content mb-3" row wrap>
            <v-flex xs12>
                <h2 class="display-1 mb-2 mt-3">触摸显示</h2>
            </v-flex>
            <v-flex xs12>
                <p class="body-1">触控显示技术主要是通过屏显类设备结合触摸或体感技术，加入系统集成实现的一种综合人机交互体验。<br/>行业领域：售楼中心、活动会展、智能展厅、企业机构等</p>
            </v-flex>
            <v-flex sm3 xs6 v-for="(item,i) in topic_3" :key="i">
                <v-card class="scaleImage" :to="'/topic/' + item._id">
                    <v-card-media :src="item.coverImg" class="white--text media" height="180px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline">{{item.title}}</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-media>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout class="app-content mb-3" row wrap>
            <v-flex xs12>
                <h2 class="display-1 mb-2 mt-3">影视动画</h2>
            </v-flex>
            <v-flex xs12>
                <p class="body-1">针对客户各项需求综合解决各项多媒体设备中的数字文件制作、宣传片定制。<br/>行业领域：企业、商业、地产、医疗机构、政府院校、教育培训等</p>
            </v-flex>
            <v-flex sm3 xs6 v-for="(item,i) in topic_4" :key="i">
                <v-card class="scaleImage" :to="'/topic/' + item._id">
                    <v-card-media :src="item.coverImg" class="white--text media" height="180px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline">{{item.title}}</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-media>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout class="app-content mb-3" row wrap>
            <v-flex xs12>
                <h2 class="display-1 mb-2 mt-3">数字展厅</h2>
            </v-flex>
            <v-flex xs12>
                <p class="body-1">智能化数字展厅的整体规划设计、综合展示多媒体硬软件方案实施，或单项展示设备配套服务。<br/>行业领域：售楼中心、科教展厅、校史党史馆、企业展厅、综合体验中心等</p>
            </v-flex>
            <v-flex sm3 xs6 v-for="(item,i) in topic_5" :key="i">
                <v-card class="scaleImage" :to="'/topic/' + item._id">
                    <v-card-media :src="item.coverImg" class="white--text media" height="180px">
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline">{{item.title}}</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-media>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>
<script>
  import axios from '~/plugins/axios'
  import _ from 'lodash'

  export default {
    layout: 'index',
    async asyncData ({ params }) {
      let topicsData = await axios.get('topic')
      return {
        topics: topicsData.data
      }
    },
    computed: {
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
    }
  }
</script>