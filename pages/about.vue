<template>
    <div v-resize="onResize">
        <v-parallax src="/images/banner4.png" class="app-banner">
            <v-layout column
                      align-center
                      justify-center
                      class="white--text">
                <div>
                    <h1 class="white--text mb-10 display-10 text-xs-center">关于我们</h1>
                    <h3 class="white--text mb-10 display-10 text-xs-center">TEAM INTRODUCTION</h3>
                </div>
            </v-layout>
        </v-parallax>
        <div class="introduction_info">
            <img src="/images/introduction_info.jpg"/>
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