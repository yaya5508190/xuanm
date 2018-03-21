<template>
    <dropzone id='upload' ref="el" :options="options" :destroyDropzone="true"></dropzone>
</template>
<script>
  import Dropzone from 'nuxt-dropzone'
  import 'nuxt-dropzone/dropzone.css'
  import axios from '~/plugins/axios'

  export default {
    components: {
      Dropzone
    },
    name: 'customDropZone',
    props: ['url'],
    data () {
      const vm = this
      return {
        options: {
          url: '/api/upload',
          addRemoveLinks: true,
          paramName: 'image',
          maxFiles: 1,
          acceptedFiles: 'image/*',
          dictDefaultMessage: '点击或拖拽图片上传',
          dictMaxFilesExceeded: '只能上传一个文件',
          dictRemoveFile: '删除文件',
          maxFilesize: 5,
          dictFileTooBig: '文件过大 ({{filesize}}MiB). 文件最大: {{maxFilesize}}MiB.',
          success (file, response) {
            file._removeLink.onclick = () => {
              if (file.xhr) {
                const filename = JSON.parse(file.xhr.response).filename
                axios.delete('upload', {
                  params: {
                    filename: filename
                  }
                })
              }
            }
            vm.$emit('success', ...arguments)
            if (file.previewElement) {
              file.previewElement.classList.add('dz-success')
            }
          }
          // removedfile (file) {
          //   console.log(file)
          //   if (file.xhr) {
          //     const filename = JSON.parse(file.xhr.response).filename
          //     axios.delete('upload', {
          //       params: {
          //         filename: filename
          //       }
          //     })
          //   }
          //   if (file.previewElement != null && file.previewElement.parentNode != null) {
          //     file.previewElement.parentNode.removeChild(file.previewElement)
          //   }
          //   return this._updateMaxFilesReachedClass()
          // }
        }
      }
    }
  }
</script>