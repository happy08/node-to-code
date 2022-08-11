<!-- Airb -->
<template>
<div class="main-container">
  <ZtSearchForm @search="onSearch">
    <el-form label-position="top">
      <el-row :gutter="20">
        <!-- 项目名称 -->
      <el-col :span="5">
      <el-form-item :label="$t('airbList_enName')">
        <el-input v-model="searchForm.enName" clearable :placeholder="$t('please_enter')"></el-input>
      </el-form-item>
    </el-col>
    <!-- 项目所属区域 -->
      <el-col :span="5">
      <el-form-item :label="$t('airbList_conductBusiness')">
        <el-input v-model="searchForm.conductBusiness" clearable :placeholder="$t('please_enter')"></el-input>
      </el-form-item>
    </el-col>
    <!-- 创建时间 -->
      <el-col :span="5">
      <el-form-item :label="$t('airbList_timezone')">
        <el-input v-model="searchForm.timezone" clearable :placeholder="$t('please_enter')"></el-input>
      </el-form-item>
    </el-col>
    
      </el-row>
    </el-form>
    
  </ZtSearchForm>

  <ZtDefaultTable>
    <template #btnGroup>
    
    <!-- 导出 -->
      <el-button @click="handleExportExcel" :loading="exportLoading" type="warning" size="mini">
        {{ $t('export') }}
      </el-button>
      
    </template>
    <zt-table v-loading="tableLoading" :data="tableData" stripe>
      <!-- 序号-->
      <zt-table-column prop="code" :label="$t('airbList_code')"  show-overflow-tooltip></zt-table-column>
    <!-- 项目编码-->
      <zt-table-column prop="cnName" :label="$t('airbList_cnName')"  show-overflow-tooltip></zt-table-column>
    <!-- 项目名称-->
      <zt-table-column prop="enName" :label="$t('airbList_enName')"  show-overflow-tooltip></zt-table-column>
    <!-- 项目所属区域-->
      <zt-table-column prop="conductBusiness" :label="$t('airbList_conductBusiness')"  show-overflow-tooltip></zt-table-column>
    <!-- 状态-->
      <zt-table-column prop="areaName" :label="$t('airbList_areaName')"  show-overflow-tooltip></zt-table-column>
    <!-- 竞价开始时间-->
      <zt-table-column prop="timezone" :label="$t('airbList_timezone')"  show-overflow-tooltip></zt-table-column>
    <!-- 竞价结束时间-->
      <zt-table-column prop="timezone" :label="$t('airbList_timezone')"  show-overflow-tooltip></zt-table-column>
    <!-- 评估结束时间-->
      <zt-table-column prop="timezone" :label="$t('airbList_timezone')"  show-overflow-tooltip></zt-table-column>
    <!-- 发布人-->
      <zt-table-column prop="contactName" :label="$t('airbList_contactName')"  show-overflow-tooltip></zt-table-column>
    <!-- 发布时间-->
      <zt-table-column prop="timezone" :label="$t('airbList_timezone')"  show-overflow-tooltip></zt-table-column>
    <!-- 创建人-->
      <zt-table-column prop="contactName" :label="$t('airbList_contactName')"  show-overflow-tooltip></zt-table-column>
    <!-- 创建时间-->
      <zt-table-column prop="timezone" :label="$t('airbList_timezone')"  show-overflow-tooltip></zt-table-column>
    <!-- 修改人-->
      <zt-table-column prop="contactName" :label="$t('airbList_contactName')"  show-overflow-tooltip></zt-table-column>
    <!-- 修改时间-->
      <zt-table-column prop="timezone" :label="$t('airbList_timezone')"  show-overflow-tooltip></zt-table-column>
    
      <!-- 操作 -->
      <zt-table-column :label="$t('operation')" fixed="right" width="80">
        <template #default="scope">
          
          
        </template>
      </zt-table-column>
    </zt-table>
    <!-- 分页 -->
    <zt-pagination
      :currentPage="pagination.currentPage"
      :totalCount="pagination.totalCount"
      :pageSize="pagination.pageSize"
      @current-change="onCurrentChange"
      @size-change="onSizeChange"
    />
  </ZtDefaultTable>
</div>
  
</template>

<script>
import { defineComponent, ref, getCurrentInstance } from 'vue'
import { tableCommon } from '@/utils/handle-common'
import { getEnumeration } from '@/services/transport'
import { siteOperatingOutlets } from '@/services/area'



export default defineComponent({
  name: "airbList",
  components: { 
     
  },
  setup() {
    const { proxy } = getCurrentInstance()

    // 搜索条件
    const searchForm = ref({})

    // 初始化搜索条件
    const FORM_KEY = 'airbListAPP'

    // 功能
    const {
      tableLoading,
      tableData,
      initData,
      exportLoading,
      exportExcel,
      pagination,
      onSearch,
      onReset,
      onCurrentChange,
      onSizeChange
    } = tableCommon({
      searchForm,
      FORM_KEY
    })

    // 初始化数据列表
    initData(async () => {
      const params = {
        ...searchForm.value,
        startIndex: (pagination.currentPage - 1) * pagination.pageSize,
        count: pagination.pageSize
      }
      const res = await siteAirportList(params)
      tableData.value = res?.data?.dataList || []
      pagination.totalCount = res?.data?.TotalCount || 0
    })

    

    

    // 导出
const handleExportExcel = exportExcel(siteAirportsExport, null, proxy)

    
    return {
      searchForm,
      onSearch,
      onReset,
      enumerationList,
      tableLoading,
      tableData,
      initData,
      pagination,
      onCurrentChange,
      onSizeChange,
      exportLoading,
      handleExportExcel,
    }
  }
})
</script>

<style lang="scss" scoped></style>
    