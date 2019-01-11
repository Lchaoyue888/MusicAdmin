<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input placeholder="专辑名" style="width: 200px;" class="filter-item" @keyup.enter.native="handleFilter"/>
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">搜索</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">添加</el-button>
      <el-button v-waves :loading="downloadLoading" class="filter-item" type="primary" icon="el-icon-download" @click="handleDownload">导出</el-button>
    </div>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row>
            <el-table-column label="专辑id" width="180" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.album_id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="专辑名" >
        <template slot-scope="scope">
          {{ scope.row.album_name }}
        </template>
      </el-table-column>
      <el-table-column label="歌手id" width="180" align="center">
        <template slot-scope="scope">
          {{ scope.row.singer_id }}
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
  </div>
</template>

<script>
import { listAlbum } from '@/axios/api'

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
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      listAlbum(this.listQuery).then(response => {
        this.list = response.data.rows
        console.log('222222222222')
        console.log(this.list)
        this.listLoading = false
      })
    }
  }
}
</script>

<style scoped>
  .filter-container {
    margin-bottom: 20px
  }
</style>
