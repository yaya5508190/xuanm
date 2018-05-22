<template>
    <v-card color="grey lighten-4" flat tile>
        <v-toolbar
                color="primary"
                dark
        >
            <v-btn icon @click="$nuxt._router.go(-1)">
                <v-icon>chevron_left</v-icon>
            </v-btn>
            <v-toolbar-title>新增文章</v-toolbar-title>
        </v-toolbar>
        <v-form v-model="valid" ref="form" lazy-validation>
            <v-card-text>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-text-field
                                label="文章标题"
                                v-model="topic.title"
                                :rules="validRules.titleRules"
                        />
                    </v-flex>
                    <v-flex xs12>
                        <v-select
                                label="文章类别"
                                :items="topicTypes"
                                v-model="topic.topicType"
                                :rules="validRules.topicTypesRules"
                        ></v-select>
                    </v-flex>
                    <v-flex xs12>
                        <v-text-field
                                label="封面图片地址(上传后自动生成)"
                                v-model="topic.coverImg"
                                :rules="validRules.coverImgRules"
                                readonly
                        />
                    </v-flex>
                    <v-flex xs12>
                        <dropzone @success="success" v-model="topic.coverImg"/>
                    </v-flex>
                    <v-flex xs12>
                        <no-ssr>
                            <div class="quill-editor"
                                 v-model="topic.content"
                                 style="height: 500px"
                                 v-quill:addQuillEditor="editorOption"
                                 v-show="show"
                            >
                            </div>
                        </no-ssr>
                        <div v-show="!show">
                            <v-text-field multi-line v-model="topic.content" style="height: 900px" no-resize></v-text-field>
                        </div>
                    </v-flex>
                </v-layout>
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
    mounted () {
      this.getTopicTypes()
    },
    data () {
      const vm = this
      return {
        submitStatus: false,
        valid: false,
        topic: {
          title: '',
          coverImg: '',
          content: '',
          topicType: ''
        },
        validRules: {
          titleRules: [
            v => !!v || '标题为必填项'
          ],
          coverImgRules: [
            v => !!v || '必须上传封面图片'
          ],
          topicTypesRules: [
            v => !!v || '必须选择类别'
          ]
        },
        topicTypes: [],
        content: '',
        show: true,
        editorOption: {
          // some quill options
          modules: {
            toolbar: {
              container: [
                ['bold', 'italic', 'underline', 'strike'],
                [{'indent': '-1'}, {'indent': '+1'}],
                [{'direction': 'rtl'}],
                [{'size': ['small', false, 'large', 'huge']}],
                [{'header': [1, 2, 3, 4, 5, 6, false]}],
                [{'color': []}, {'background': []}],
                [{'font': []}],
                [{'align': []}],
                ['clean'],
                ['link', 'image'],
                ['code']
              ],
              handlers: {
                'image': function () {
                  var self = this
                  var fileInput = this.container.querySelector('input.ql-image[type=file]')
                  if (fileInput == null) {
                    fileInput = document.createElement('input')
                    fileInput.setAttribute('type', 'file')
                    fileInput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon')
                    fileInput.classList.add('ql-image')
                    fileInput.addEventListener('change', function () {
                      var range = self.quill.getSelection()
                      var length = range ? range.index : 0
                      var formData = new FormData()
                      formData.append('image', fileInput.files[0])
                      axios({
                        url: '/upload',
                        method: 'POST',
                        data: formData
                      }).then((result) => {
                        self.quill.pasteHTML(length, `<img src="${result.data.url}" width="300" />`)
                        self.quill.setSelection(length + 1)
                      }).catch((err) => {
                        console.log(err)
                      })
                    })
                    // this.container.appendChild(fileInput)
                  }
                  fileInput.click()
                },
                'code': function () {
                  vm.show = !vm.show
                  console.log(1)
                }
              }
            },
            imageResize: true
          },
          placeholder: '请输入内容...'
        }
      }
    },
    methods: {
      success (file, response) {
        this.topic.coverImg = response.url
      },
      doSave () {
        if (this.$refs.form.validate()) {
          this.submitStatus = true
          axios.post('topic', this.topic).then(() => {
            this.submitStatus = false
            this.$nuxt._router.go(-1)
          })
        }
      },
      async getTopicTypes () {
        let { data } = await axios.get('/dict/topicType')
        this.topicTypes = data
      }
    }
  }
</script>