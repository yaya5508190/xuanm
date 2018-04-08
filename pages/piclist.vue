<template>
    <div v-resize="onResize">
        <v-parallax src="/images/banner5.png" class="app-banner">
            <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                    <div style="width: 200px;margin-top: 3%;margin-right: 1%;float:right ">
                        <h1 class="white--text mb-10 display-10 text-xs-center">案例展示</h1>
                        <h3 class="white--text mb-10 display-10 text-xs-center">CASE SHOWS</h3>
                    </div>
                </v-flex>
            </v-layout>
        </v-parallax>
        <div class="successing app-content">
            <h3 class="head3">成功案例</h3>
            <h6 class="head6">Successful case</h6>
            <v-container fluid grid-list-md>
                <v-layout row wrap>
                    <template v-for="(item,i) in topic_1">
                        <v-flex class="lg4 md4 sm4 xs4" v-if="i >= 9 * ( page - 1) && i < 9 * page">
                            <v-card nuxt :to="'/topic/' + item._id">
                                <v-card-media
                                        :src="item.coverImg"
                                        :style="{height : windowSize.x/5 + 'px'}"
                                >
                                </v-card-media>
                                <div class="case-pic-info">{{item.title}}</div>
                            </v-card>
                        </v-flex>
                    </template>
                </v-layout>
            </v-container>
        </div>
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
      page: 1,
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
      pageLength () {
        return Math.floor(this.topic_1.length % 9 === 0 ? this.topic_1.length / 9 : this.topic_1.length / 9 + 1)
      }
    },
    methods: {
      onResize () {
        this.windowSize = {x: window.innerWidth, y: window.innerHeight}
      }
    }
  }
</script>