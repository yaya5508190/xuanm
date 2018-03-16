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
                    <v-flex class="lg4 md4 sm4 xs4" v-for="(item,i) in successingItems" :key="i">
                        <v-card nuxt to="/">
                            <v-card-media
                                    :src="item.img"
                                    :style="{height : windowSize.x/5 + 'px'}"
                            >
                            </v-card-media>
                            <div class="case-pic-info">{{item.title}}</div>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
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