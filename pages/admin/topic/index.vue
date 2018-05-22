<template>
    <div>
        <v-card>
            <v-card-title>
                <v-text-field
                        append-icon="search"
                        label="查询"
                        single-line
                        hide-details
                        v-model="search"
                ></v-text-field>
                <v-spacer></v-spacer>
                <v-btn icon to="/admin/topic/add">
                    <v-icon>add</v-icon>
                </v-btn>
                <v-btn icon @click="doEdit">
                    <v-icon>edit</v-icon>
                </v-btn>
                <v-btn icon @click = "showDel">
                    <v-icon>delete</v-icon>
                </v-btn>
            </v-card-title>
            <v-data-table
                    v-model="selected"
                    :headers="headers"
                    :items="topics"
                    item-key="_id"
                    :search="search"
                    class="elevation-1"
                    select-all
            >
                <template slot="headers" slot-scope="props">
                    <tr>
                        <th>
                            <v-checkbox
                                    primary
                                    hide-details
                                    @click.native="toggleAll"
                                    :input-value="props.all"
                                    :indeterminate="props.indeterminate"
                            />
                        </th>
                        <th
                                v-for="header in props.headers"
                                :key="header.text"
                                :class="['column sortable', pagination.descending ? 'desc' : 'asc', header.value === pagination.sortBy ? 'active' : '']"
                                @click="changeSort(header.value)"
                        >
                            {{ header.text }}
                        </th>
                    </tr>
                </template>
                <template slot="items" slot-scope="props">
                    <tr :active="props.selected" @click="props.selected = !props.selected">
                        <td>
                            <v-checkbox
                                    primary
                                    hide-details
                                    :input-value="props.selected"
                            />
                        </td>
                        <td class="text-xs-center">{{ props.item.topicTypeText }}</td>
                        <td class="text-xs-center">{{ props.item.title }}</td>
                        <td class="text-xs-center">{{ props.item.createDate }}</td>
                    </tr>
                </template>
            </v-data-table>
        </v-card>
        <v-dialog v-model="deleteDialog" persistent max-width="290">
            <v-card>
                <v-card-title class="headline">确认删除?</v-card-title>
                <v-card-text>删除后将不可恢复.</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" flat @click="doDel">同意</v-btn>
                    <v-btn color="green darken-1" flat @click.native="deleteDialog = false">取消</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-snackbar
                :timeout="2000"
                :top="true"
                :color="notice.color"
                v-model="notice.show"
        >
            {{ notice.message }}
            <v-btn flat dark @click.native="notice.show = false">关闭</v-btn>
        </v-snackbar>
    </div>
</template>
<script>
  import axios from '~/plugins/axios'

  export default {
    mounted () {
      this.getTopics()
    },
    data () {
      return {
        search: '',
        deleteDialog: false,
        notice: {
          show: false,
          message: '',
          color: 'primary'
        },
        pagination: {
          sortBy: 'topicTypeText'
        },
        selected: [],
        headers: [
          {text: '分类', value: 'topicTypeText'},
          {text: '标题', value: 'title'},
          {text: '日期', value: 'createDate'}
        ],
        topics: []
      }
    },
    methods: {
      toggleAll () {
        if (this.selected.length) this.selected = []
        else this.selected = this.topics.slice()
      },
      changeSort (column) {
        if (this.pagination.sortBy === column) {
          this.pagination.descending = !this.pagination.descending
        } else {
          this.pagination.sortBy = column
          this.pagination.descending = false
        }
      },
      doEdit () {
        if (this.selected.length === 1) {
          this.$nuxt._router.push({
            path: '/admin/topic/' + this.selected[0]._id
          })
        } else {
          this.notice.message = '请选择一条记录'
          this.notice.color = 'red'
          this.notice.show = true
        }
      },
      showDel () {
        if (this.selected.length === 1) {
          this.deleteDialog = true
        } else {
          this.notice.message = '请选择一条记录'
          this.notice.color = 'red'
          this.notice.show = true
        }
      },
      async doDel () {
        axios.delete('topic/' + this.selected[0]._id)
        this.getTopics()
        this.deleteDialog = false
        this.notice.message = '删除成功'
        this.notice.color = 'success'
        this.notice.show = true
      },
      async getTopics () {
        let { data } = await axios.get('topic')
        this.topics = data
      }
    }
  }
</script>