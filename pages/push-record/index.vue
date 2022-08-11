<!-- 推送日志 -->
<template>
<div class="main-container">
  <ZtSearchForm @search="onSearch" @reset="onReset">
    <zt-form label-position="top">
      <zt-row :gutter="20">
        <!-- 数据编码 -->
      <zt-col :span="5">
      <zt-form-item :label="$t('pushRecord_dataEncoding')">
        <zt-input v-model="searchForm.dataEncoding" clearable :placeholder="$t('please_enter')"></zt-input>
      </zt-form-item>
    </zt-col>
    <!-- 数据类型 -->
      <zt-col :span="5">
      <zt-form-item :label="$t('pushRecord_tableName')">
        <zt-input v-model="searchForm.tableName" clearable :placeholder="$t('please_enter')"></zt-input>
      </zt-form-item>
    </zt-col>
    <!-- 推送类型 -->
      <zt-col :span="5">
      <zt-form-item :label="$t('pushRecord_pushType')">
        <zt-input v-model="searchForm.pushType" clearable :placeholder="$t('please_enter')"></zt-input>
      </zt-form-item>
    </zt-col>
    <!-- 推送状态 -->
      <zt-col :span="5">
      <zt-form-item :label="$t('pushRecord_pushStatus')">
        <zt-input v-model="searchForm.pushStatus" clearable :placeholder="$t('please_enter')"></zt-input>
      </zt-form-item>
    </zt-col>
    <!-- 推送时间 -->
      <zt-col :span="5">
      <zt-form-item :label="$t('pushRecord_pushTime')">
        <zt-input v-model="searchForm.pushTime" clearable :placeholder="$t('please_enter')"></zt-input>
      </zt-form-item>
    </zt-col>
    <!-- 推送系统 -->
      <zt-col :span="5">
      <zt-form-item :label="$t('pushRecord_pushSystem')">
        <zt-select v-model="searchForm.pushSystem" filterable clearable class="w-100">
          <zt-option value="E" :label="$t('enable')"></zt-option>
          <zt-option value="D" :label="$t('disable')"></zt-option>
        </zt-select>
      </zt-form-item>
    </zt-col>
    
      </zt-row>
    </zt-form>
  </ZtSearchForm>

  <ZtDefaultTable>
    <template #btnGroup>
    
    <!-- 导出 -->
      <zt-button @click="handleExportExcel" :loading="exportLoading" type="warning" size="mini">
        {{ $t('export') }}
      </zt-button>
      
    </template>
    <zt-table v-loading="tableLoading" :data="tableData" stripe>
      <!-- 数据编码-->
      <zt-table-column prop="dataEncoding" :label="$t('pushRecord_dataEncoding')"  show-overflow-tooltip></zt-table-column>
    <!-- 数据类型-->
      <zt-table-column prop="tableName" :label="$t('pushRecord_tableName')"  show-overflow-tooltip></zt-table-column>
    <!-- 推送类型-->
      <zt-table-column prop="pushType" :label="$t('pushRecord_pushType')"  show-overflow-tooltip></zt-table-column>
    <!-- 推送状态-->
      <zt-table-column prop="pushStatus" :label="$t('pushRecord_pushStatus')"  show-overflow-tooltip></zt-table-column>
    <!-- 说明-->
      <zt-table-column prop="pushResult" :label="$t('pushRecord_pushResult')"  show-overflow-tooltip></zt-table-column>
    <!-- 推送时间-->
      <zt-table-column prop="pushTime" :label="$t('pushRecord_pushTime')"  show-overflow-tooltip></zt-table-column>
    <!-- 推送系统-->
      <zt-table-column prop="pushSystem" :label="$t('pushRecord_pushSystem')"  show-overflow-tooltip></zt-table-column>
    <!-- 推送内容-->
      <zt-table-column prop="pushContent" :label="$t('pushRecord_pushContent')"  show-overflow-tooltip></zt-table-column>
    
      <!-- 操作 -->
      <zt-table-column :label="$t('operation')" fixed="right" width="80">
        <template #default="scope">
          
          
        </template>
      </zt-table-column>
    </zt-table>
    <!-- 分页 -->
    <zt-default-pagination :currentPage="pagination.currentPage" :totalCount="pagination.totalCount" :pageSize="pagination.pageSize" @current-change="onCurrentChange" @size-change="onSizeChange" />
</div>
  
</template>

<script>
import { defineComponent, ref, getCurrentInstance } from 'vue'
import { tableCommon } from '@/utils/handle-common'
import { getEnumeration } from '@/services/transport'
import { siteOperatingOutlets } from '@/services/area'



export default defineComponent({
  name: "pushRecord",
  components: { 
     
  },
  setup() {
    const { proxy } = getCurrentInstance()

    // 搜索条件
    const searchForm = ref({})

    // 初始化搜索条件
    const FORM_KEY = 'pushRecord-app'

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
    