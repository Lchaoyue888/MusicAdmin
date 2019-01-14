<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input placeholder="歌单" v-model="searchName" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"/>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
      <el-button lebel="添加" class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleAdd">添加</el-button>
      <!-- <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">导出</el-button> -->
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row>
      <!-- <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column> -->

      <el-table-column label="歌单id" width="100" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.songlist_id }}</span>
        </template>
      </el-table-column>  
      <el-table-column label="歌单名">
        <template slot-scope="scope">
          {{ scope.row.songlist_name }}
        </template>
      </el-table-column>
            <el-table-column label="歌单标签">
        <template slot-scope="scope">
          {{ scope.row.songlist_label }}
        </template>
      </el-table-column>
      <el-table-column label="歌单简介">
        <template slot-scope="scope">
          {{ scope.row.description }}
        </template>
      </el-table-column>
      <el-table-column label="用户id" width="100" align="center">
        <template slot-scope="scope">
          {{ scope.row.user_id }}
        </template>
      </el-table-column>
            <!-- <el-table-column label="创建时间" width="160" align="center">
        <template slot-scope="scope">
          {{ scope.row.songlist_time }}
        </template>
      </el-table-column> -->
      <el-table-column label="操作" align="center" width="150" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button label ='编辑' type="primary" size="mini" @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
          <el-button v-if="scope.row.status!='deleted'" size="mini" type="danger" @click="handleDelete(scope.$index,scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div id="songlist_foot" class="songlist_foot">
					<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
					</el-pagination>
				</div>
    <div>
  <el-dialog :title="form && form.id ? '添加' : '编辑'" :visible.sync="formVisible" :close-on-click-modal="false">
    <el-form :model="form" label-width="100px" :rules="rules" ref="form">
      <el-form-item label="歌单id" prop="songlist_id">
        <el-input v-model="form.songlist_id" />
      </el-form-item>
            <el-form-item label="歌单名" prop="songlist_name">
        <el-input v-model="form.songlist_name" />
      </el-form-item>
      <el-form-item label="歌单标签" prop="songlist_label">
        <el-input v-model="form.songlist_label" />
      </el-form-item>
      <el-form-item label="简介" prop="description">
        <el-input v-model="form.description" />
      </el-form-item>
                  <el-form-item label="用户id" prop="user_id">
        <el-input v-model="form.user_id" />
      </el-form-item>
      <!-- <el-form-item label="创建时间" prop="songlist_time">
        <el-input v-model="form.songlist_time" />
      </el-form-item> -->
                  <!-- <el-form-item label="手机号" prop="phone">
        <el-input v-model="form.phone" />
      </el-form-item> -->
                  <!-- <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email" />
      </el-form-item> -->
      <!-- <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="form.sex">
          <el-radio :label="1">男</el-radio>
          <el-radio :label="2">女</el-radio>
        </el-radio-group>
      </el-form-item> -->
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click.native="formVisible = false">取消</el-button>
      <el-button type="primary" @click.native="addOrUpdate" :loading="formLoading">提交</el-button>
    </div>
  </el-dialog>
  </div>
  </div>
</template>

<script>
import { listSonglist } from '@/axios/api'
import { addSonglist } from '@/axios/api'
import { deleteSonglist } from '@/axios/api'
import { updateSonglist } from '@/axios/api'
import { searchSonglist } from '@/axios/api'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      searchName : '',
      searchform: {},
      flag : 0,
      list: null,
      listLoading: true ,
      form : {},
      updateform:{},
      size : 20,
      filters : {},
      formLoading: false,
      formVisible: false,
      total : 0,
      currentPage : 1,
      pageSize : 20,
      listQuery: {},
      rows : {},
      clientHeight : '100%',
      rules : {
        songlist_id: [{
        required: true,
        message: '请输入ID',
        trigger: 'blur'
      }],
      user_id: [{
        required: true,
        message: '请输入ID',
        trigger: 'blur'
      }],
      songlist_name: [{
        required: true,
        message: '请输入歌单名',
        trigger: 'blur'
      }],
},
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      this.listQuery = {
        currentPage: this.currentPage,
        pageSize: this.pageSize
      }
      listSonglist(this.listQuery).then(response => {
        this.list = response.data
        this.total = response.data.total
        this.currentPage++
        console.log('555555')
        console.log(this.list)
        this.listLoading = false
      })
    },
    addData() {
      this.formLoading = true
      addSonglist(this.form).then(response => {
        console.log('retret')
        console.log(response)
        this.formLoading = false
        if (!response.data) {
          
          this.$message({
            showClose: true,
            message: 'error',
            type: 'error'
          })
          return
        }
        this.$message({
          type: 'success',
          message: '保存成功！'
        })
        this.currentPage = 1
        this.fetchData()
        this.formVisible = false
      })
    },
    handleAdd() {
      this.flag = 1
      console.log("1111111")
  this.form = {}
  // this.form.sex = 1
  this.formVisible = true      
    },
    handleDownload() {
      
    },
    handleFilter() {
      this.searchform={
        currentPage: this.currentPage,
        pageSize: this.pageSize,
        songlist_label : this.searchName
      }
      searchSonglist(this.searchform).then(res => {
        console.log('res')
        //未完成分页，查出来后点下一页不行
        console.log(res.data)
        if (!res.data) {
          this.$message({
            type: 'error',
            message: '歌手不存在!'
          })
          return 
        } 
        this.currentPage = 1
        this.list = res.data
        // this.currentPage = 1
      })
    },
    downloadLoading() {
      
    },
    handleDelete(index,row){
      this.$confirm('此操作将永久删除数据，是否继续？','提示', {
        confirmButtonText: '确定',
        canceButtonText: '取消',
        type : 'warning'

      }).then(() => {
        // console.log('delete在这')
        this.listLoading = true
        deleteSonglist(row.songlist_id).then(res =>{
          // console.log('delete在这2')
          this.listLoading = false
          if(!res.data){
            this.$message({
              type : 'error',
              message : 'error!'
            })
            return
          }
          this.$message({
            type : 'success',
            message : row.songlist_name+'   删除成功！'
          })
            this.currentPage = 1
          this.fetchData()
        })
        
      })

    },
    handleEdit(index,row){
      this.flag = 2
      this.form = Object.assign({},row)
      this.formVisible = true
    },
    handleCurrentChange(val) {
				this.currentPage = val
				this.fetchData()
      },
     addOrUpdate() {
      if (this.flag === 1) {
        this.addData()
        this.flag = 0
      } else if (this.flag === 2) {
        this.updateData()
        this.flag = 0
      } else {
        return
      }
    },
    updateData() {
      this.formLoading = true
      updateSonglist(this.form).then(response => {
        console.log('retret')
        console.log(response)
        this.formLoading = false
        if (!response.data) {
          this.$message({
            showClose: true,
            message: 'error',
            type: 'error'
          })
          return
        }
        this.$message({
          type: 'success',
          message: '修改成功！'
        })
        this.currentPage = 1
        this.fetchData()
        this.formVisible = false
      })
    },
  },

}
</script>

<style scoped>
  .filter-container {
    margin-bottom: 20px
  }
</style>
