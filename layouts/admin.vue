<template>
  <v-app id="inspire">
    <v-navigation-drawer
            clipped
            fixed
            v-model="drawer"
            app
    >
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat @click="logout">登出</v-btn>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>

</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        items: [
          { icon: 'apps', title: '欢迎页', to: '/admin/dashboard' },
          { icon: 'image', title: '轮播图管理', to: '/admin/carousel' },
          { icon: 'image', title: '合作伙伴管理', to: '/admin/partner' },
          { icon: 'reorder', title: '文章管理', to: '/admin/topic' }
        ],
        title: '玄米数字',
        error: ''
      }
    },
    methods: {
      async logout () {
        try {
          await this.$store.dispatch('logout')
          this.$nuxt._router.push('/admin/login')
        } catch (e) {
          this.error = e.message
        }
      }
    }
  }
</script>
