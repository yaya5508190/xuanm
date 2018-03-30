<template>
  <div>
      <v-layout row wrap>
          <v-flex class="lg3 md6 xs6" v-for="partner in partners" v-dragging="{ item: partner, list: partners, group: 'partner' }" :key='partner._id' >
              <v-card height="350px">
                  <v-card-media :src="partner.img" height="200px">
                  </v-card-media>
                  <v-card-title primary-title>
                      <div>
                          <h3 class="headline mb-0">{{partner.title}}</h3>
                          <div>{{partner.createDate}}</div>
                      </div>
                  </v-card-title>
                  <v-card-actions>
                      <v-spacer></v-spacer>
                      <!--<v-btn flat >编辑</v-btn>-->
                      <v-btn flat @click="deletePartner(partner)">删除</v-btn>
                  </v-card-actions>
              </v-card>
          </v-flex>
          <v-flex class="lg3 md6 xs6">
              <!--<v-card dark height="350px"  @click="test">-->
                  <!--<v-card-text >-->

                  <!--</v-card-text>-->
              <!--</v-card>-->
              <v-btn style="height: 350px;margin: 0 0 0 0" flat block to="/admin/partner/add">
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
      this.getPartner()
      this.$dragging.$on('dragend', () => {
        this.setOrder(this.partners)
        axios.post('/partner/sort', this.partners)
      })
    },
    data () {
      return {
        deleteDialog: false,
        selectedPartner: '',
        partners: []
      }
    },
    methods: {
      setOrder: (arr) => {
        arr.forEach((e, i) => {
          e.order = i
        })
      },
      deletePartner (Partner) {
        this.deleteDialog = true
        this.selectedPartner = Partner
      },
      async doDelete () {
        this.deleteDialog = false
        let { data } = await axios.delete('partner/' + this.selectedPartner.id, {
          params: {
            filename: this.selectedPartner.filename
          }
        })
        if (data) {
          this.getPartner()
        }
      },
      async getPartner () {
        let { data } = await axios.get('partner')
        this.partners = data
      }
    }
  }
</script>