<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <img src="/images/m-logo.png" alt="Vuetify.js" class="mb-5" />
      </div>
      <v-card>
        <v-card-title class="headline">玄米CRM后台管理</v-card-title>
        <v-card-text>
          <p>“玄米数字”主创团队拥有十多年媒体创意及整合技术执行的从业经验</p>
          <p>熟悉传统展示媒介向多元化互动新媒体+互联网信息整合的综合展示技术</p>
          <p>专业综合场景展示及氛围营造的整合服务机构</p>
          <!--<p>Find a bug? Report it on the github <a href="https://github.com/vuetifyjs/vuetify/issues" target="_blank" title="contribute">issue board</a>.</p>-->
          <!--<p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>-->
          <div class="text-xs-right">
            <em><small>&mdash; 陈老板,鹿老板</small></em>
          </div>
          <hr class="my-3">
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat nuxt to="/admin/carousel">继续</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    layout: 'admin'
  }
</script>
