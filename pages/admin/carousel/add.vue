<template>
    <v-card color="grey lighten-4" flat tile>
        <v-toolbar
                color="primary"
                dark
        >
            <v-btn icon @click.native="$nuxt._router.go(-1)">
                <v-icon>chevron_left</v-icon>
            </v-btn>
            <v-toolbar-title>新增轮播图</v-toolbar-title>
        </v-toolbar>
        <v-form v-model="valid" ref="form" lazy-validation>
            <v-card-text>
                <v-text-field
                        label="标题描述"
                        v-model="carousel.title"
                        :rules="validRules.titleRules"
                />
                <v-text-field
                        label="图片地址(上传后自动生成)"
                        v-model="carousel.img"
                        :rules="validRules.imgRules"
                        readonly
                />
                <dropzone @success="success" v-model="carousel.img"/>
            </v-card-text>
            <v-card-actions>
                <v-spacer/>
                <v-btn color="green darken-1" flat @click="doSave" :disabled="submitStatus">保存</v-btn>
            </v-card-actions>
        </v-form>
    </v-card>
</template>
<script>
  import Dropzone from '~/components/upload'
  import axios from '~/plugins/axios'

  export default {
    components: {
      Dropzone
    },
    methods: {
      success (file, response) {
        this.carousel.img = response.url
        this.carousel.filename = response.filename
      },
      doSave () {
        if (this.$refs.form.validate()) {
          this.submitStatus = true
          axios.post('carousels', this.carousel).then(() => {
            this.submitStatus = false
            this.$nuxt._router.go(-1)
          })
        }
      }
    },
    data: () => ({
      valid: false,
      submitStatus: false,
      carousel: {
        title: '',
        img: '',
        filename: ''
      },
      validRules: {
        titleRules: [
          v => !!v || '标题为必填项'
        ],
        imgRules: [
          v => !!v || '必须上传图片'
        ]
      }
    })
  }
</script>