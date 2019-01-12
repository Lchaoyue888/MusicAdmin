<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input placeholder="昵称" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"/>
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleAdd">添加</el-button>
      
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

      <el-table-column label="用户id" width="180" align="center">
        <template slot-scope="scope">
          {{ scope.row.user_id }}
        </template>
      </el-table-column>
      <el-table-column label="昵称">
        <template slot-scope="scope">
          {{ scope.row.nick_name }}
        </template>
      </el-table-column>
      <el-table-column label="真实姓名" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.true_name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="手机号" width="180" align="center">
        <template slot-scope="scope">
          {{ scope.row.phone }}
        </template>
      </el-table-column>
      <el-table-column label="邮箱" width="180" align="center">
        <template slot-scope="scope">
          {{ scope.row.email }}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">编辑</el-button>
          <el-button v-if="scope.row.status!='deleted'" size="mini" type="danger" @click="handleModifyStatus(scope.row,'deleted')">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  <div>
  <el-dialog :title="form && form.id ? '编辑' : '添加' " :visible.sync="formVisible" :close-on-click-modal="false">
    <el-form :model="form" label-width="100px" :rules="rules" ref="form">
      <el-form-item label="姓名" prop="nick_name">
        <el-input v-model="form.nick_name" />
      </el-form-item>
      <!-- <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="form.sex">
          <el-radio :label="1">男</el-radio>
          <el-radio :label="2">女</el-radio>
        </el-radio-group>
      </el-form-item> -->
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click.native="formVisible = false">取消</el-button>
      <el-button type="primary" @click.native="addData" :loading="formLoading">提交</el-button>
    </div>
  </el-dialog>
  </div>
  </div>
</template>

<script>
import { listUser } from '@/axios/api'
import { addUser } from '@/axios/api'
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
      form : {},
      size : 20,
      list: null,
      total : 0,
      rows : {},
      clientHeight : '100%',
      fliters : {},
      listLoading: false,
      formLoading: false,
      formVisible: false,
      rules : {
  nick_name: [{
    required: true,
    message: '请输入姓名',
    trigger: 'blur'
  }],
  sex: [{
    required: true,
    message: '请选择性别',
    trigger: 'change'
  }]
},
      // page: 1
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      listUser(this.listQuery).then(response => {
        this.list = response.data.rows
        console.log(this.list)
        this.listLoading = false
      })
    },
    addData() {
      this.formLoading = true
      addUser(this.form).then(response => {
        this.formLoading = false
        if (!response.data.success) {
          
          this.$message({
            showClose: true,
            message: response.data.message,
            type: 'error'
          })
          return
        }
        this.$message({
          type: 'success',
          message: '保存成功！'
        })
        // this.page = 1
        this.fetchData()
        this.formVisible = false
      })
    },
    handleAdd() {
      console.log("1111111")
  this.form = {}
  // this.form.sex = 1
  this.formVisible = true      
    },
    handleDownload() {
      
    },
    handleFilter() {

    },
    downloadLoading() {
      
    }
  }
}
</script>

<style scoped>
  .filter-container {
    margin-bottom: 20px
  }
</style>
