<template>
  <div>
      <v-layout row wrap>
          <v-flex class="lg3 md6 xs6" v-for="carousel in carousels" v-dragging="{ item: carousel, list: carousels, group: 'carousels' }" :key='carousel._id' >
              <v-card height="350px">
                  <v-card-media :src="carousel.img" height="200px">
                  </v-card-media>
                  <v-card-title primary-title>
                      <div>
                          <h3 class="headline mb-0">{{carousel.title}}</h3>
                          <div>{{carousel.createDate}}</div>
                      </div>
                  </v-card-title>
                  <v-card-actions>
                      <v-spacer></v-spacer>
                      <!--<v-btn flat >编辑</v-btn>-->
                      <v-btn flat @click="deleteCarousel(carousel)">删除</v-btn>
                  </v-card-actions>
              </v-card>
          </v-flex>
          <v-flex class="lg3 md6 xs6">
              <!--<v-card dark height="350px"  @click="test">-->
                  <!--<v-card-text >-->

                  <!--</v-card-text>-->
              <!--</v-card>-->
              <v-btn style="height: 350px;margin: 0 0 0 0" flat block to="/admin/carousel/add">
                  <v-icon class="display-4">add_circle_outline</v-icon>
              </v-btn>
          </v-flex>
          <v-dialog v-model="deleteDialog" persistent max-width="290">
              <v-card>
                  <v-card-title class="headline">确认删除?</v-card-title>
                  <v-card-text>删除后将不可恢复.</v-card-text>
                  <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="green darken-1" flat @click="doDelete">同意</v-btn>
                      <v-btn color="green darken-1" flat @click.native="deleteDialog = false">取消</v-btn>
                  </v-card-actions>
              </v-card>
          </v-dialog>
      </v-layout>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    mounted () {
      this.getCarousels()
      this.$dragging.$on('dragend', () => {
        this.setOrder(this.carousels)
        axios.post('/carousels/sort', this.carousels)
      })
    },
    data () {
      return {
        deleteDialog: false,
        selectedCarousel: '',
        carousels: []
      }
    },
    methods: {
      setOrder: (arr) => {
        arr.forEach((e, i) => {
          e.order = i
        })
      },
      deleteCarousel (carousel) {
        this.deleteDialog = true
        this.selectedCarousel = carousel
      },
      async doDelete () {
        this.deleteDialog = false
        let { data } = await axios.delete('carousels/' + this.selectedCarousel.id, {
          params: {
            filename: this.selectedCarousel.filename
          }
        })
        if (data) {
          this.getCarousels()
        }
      },
      async getCarousels () {
        let { data } = await axios.get('carousels')
        this.carousels = data
      }
    }
  }
</script>