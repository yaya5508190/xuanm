<template>
    <v-app>
        <div id="particles">
        </div>
        <v-layout align-center justify-center style="margin-top: -15%">
            <v-flex xs12 sm12 lg4>
                <span class="addition-text" style="z-index:100">
                    <span style="vertical-align:middle;">
                        <img style="display: block;margin: 0 auto;" src="/images/m-logo.png" width="300"
                             height="60"/>
                    </span>
                </span>
                <v-card flat style="margin-top: 50px">
                    <v-card-media
                            height="50px"
                    >
                        <v-container fill-height fluid>
                            <v-layout fill-height>
                                <v-flex xs12 align-end flexbox>
                                    <span class="headline">登录后台</span>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-media>
                    <v-card-text>
                        <v-container fluid>
                            <v-layout row>
                                <v-flex xs12>
                                    <v-text-field
                                            label="用户名" v-model="username"></v-text-field>
                                    <v-text-field
                                            label="密码" type="password" v-model="password"></v-text-field>
                                    {{error}}
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" dark block @click="login">登录</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-app>
</template>
<script>
  export default {
    mounted () {
      window.particlesJS.load('particles', '/particles.data')
    },
    data () {
      return {
        error: '',
        username: '',
        password: ''
      }
    },
    methods: {
      async login () {
        try {
          await this.$store.dispatch('login', {
            username: this.username,
            password: this.password
          })
          this.username = ''
          this.password = ''
          this.error = null
          this.$nuxt._router.push('/admin/dashboard')
        } catch (e) {
          this.error = e.message
        }
      }
    }
  }
</script>
<style type="text/css">
    #particles {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: #f7fafc;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
    }

    .addition-text {
        position: relative;
        text-align: center;
        color: white;
    }
</style>