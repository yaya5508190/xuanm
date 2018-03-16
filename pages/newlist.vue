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
            <v-flex xs12 v-if="newsItems.length > 0 ">
                <v-card>
                    <v-list>
                        <template v-for="(item,i) in newsItems" >
                            <v-list-tile @click="" :key="i" :to="item.id">
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
            <v-pagination :length="20" v-model="page" :total-visible="5" color="red darken-1"></v-pagination>
        </div>
    </div>
</template>
<script>
  export default {
    layout: 'index',
    mounted () {
      this.onResize()
    },
    data: () => ({
      newsItems: [
        {
          title: '庆祝玄米数字成功上市!',
          id: '/marketing'
        },
        {
          title: '庆祝玄米数字成功上市！',
          id: 'marketing'
        },
        {
          title: '庆祝玄米数字成功上市！',
          id: 'marketing'
        },
        {
          title: '庆祝玄米数字成功上市！',
          id: 'marketing'
        }
      ],
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
    }
  }
</script>