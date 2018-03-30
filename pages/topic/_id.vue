<template>
    <div>
        <v-parallax src="/images/banner3.jpg" class="app-banner">
            <!--<v-layout fill-height>-->
            <!--<v-flex xs12 align-end flexbox>-->
            <!--<div style="margin-top: 12%;">-->
            <!--<h1 class="white&#45;&#45;text text-xs-center">玄米新闻</h1>-->
            <!--<h3 class="white&#45;&#45;text text-xs-center">XUANM NEWS</h3>-->
            <!--</div>-->
            <!--</v-flex>-->
            <!--</v-layout>-->
        </v-parallax>
        <div v-html="topic.content" class="ql-editor pt-5"></div>
        <div class="text-xs-center">
            <v-btn flat @click="$nuxt._router.go(-1)">返回</v-btn>
        </div>
    </div>
</template>
<script>
  import axios from 'axios'

  export default {
    layout: 'index',
    async asyncData ({ params }) {
      let topicData = await axios.get('/topic/' + params.id)
      return { topic: topicData.data || {} }
    }
  }
</script>