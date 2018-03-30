<template>
    <div v-resize="onResize">
        <v-parallax src="/images/banner6.png" class="app-banner">
            <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                    <div style="width: 200px;margin-top: 12%;margin-right: 25%;float:right ">
                        <h1 class="white--text mb-10 display-10 text-xs-center">玄米新闻</h1>
                        <h3 class="white--text mb-10 display-10 text-xs-center">XUANM NEWS</h3>
                    </div>
                </v-flex>
            </v-layout>
        </v-parallax>
        <v-layout class="app-content mb-3" row wrap>
            <v-flex xs12>
                <h2 class="display-1 mb-2 mt-3">新闻资讯:</h2>
            </v-flex>
            <v-flex xs12 v-if="topic_6.length > 0 ">
                <v-card>
                    <v-list>
                        <template v-for="(item,i) in topic_6" >
                            <v-list-tile :to="'/topic/' + item._id" :key="i" v-if="i >= pageSize * ( page - 1) && i < pageSize * page">
                                <v-list-tile-content>
                                    <v-list-tile-title v-html="item.title" ></v-list-tile-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </template>
                    </v-list>
                </v-card>
            </v-flex>
            <v-flex xs12 v-else>
                <span class="headline">暂无资讯</span>
            </v-flex>
        </v-layout>
        <div class="text-xs-center" style="margin-top: 20px">
            <v-pagination :length="pageLength" v-model="page" :total-visible="5" color="red darken-1"></v-pagination>
        </div>
    </div>
</template>
<script>
  import axios from 'axios'
  import _ from 'lodash'

  export default {
    layout: 'index',
    async asyncData ({ params }) {
      let topicsData = await axios.get('topic')
      return {
        topics: topicsData.data
      }
    },
    mounted () {
      this.onResize()
    },
    data: () => ({
      pageSize: 10,
      page: 1,
      windowSize: {
        x: 0,
        y: 0
      }
    }),
    methods: {
      onResize () {
        this.windowSize = {x: window.innerWidth, y: window.innerHeight}
      }
    },
    computed: {
      topic_6 () {
        return _.filter(this.topics, {'topicType': 6})
      },
      pageLength () {
        return Math.floor(this.topic_6.length % this.pageSize === 0 ? this.topic_6.length / this.pageSize : this.topic_6.length / this.pageSize + 1)
      }
    }
  }
</script>