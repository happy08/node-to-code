<!-- 项目列表 -->
<template>
<div class="main-container">
  <ZtSearchForm @search="onSearch" @reset="onReset" >
    <zt-form label-position="top">
      <zt-row :gutter="20">
        <!-- 项目名称 -->
      <zt-col :span="5">
      <zt-form-item :label="$t('undefined_bbbb')">
        <zt-input v-model="searchForm.bbbb" clearable :placeholder="$t('undefined_please_enter')"></zt-input>
      </zt-form-item>
    </zt-col>
    <!-- 发布时间 -->
      <zt-col :span="5">
      <zt-form-item :label="$t('undefined_dddd')">
        <zt-input v-model="searchForm.dddd" clearable :placeholder="$t('undefined_please_enter')"></zt-input>
      </zt-form-item>
    </zt-col>
    <!-- 状态 -->
      <zt-col :span="5">
      <zt-form-item :label="$t('undefined_eeee')">
        <zt-select v-model="searchForm.eeee" filterable clearable class="w-100">
          <zt-option value="E" :label="$t('undefined_enable')"></zt-option>
          <zt-option value="D" :label="$t('undefined_disable')"></zt-option>
          <zt-option v-for="item in 2" :key="item" value="item" :label="$t('undefined_disable')"></zt-option>
        </zt-select>
      </zt-form-item>
    </zt-col>
    
      </zt-row>
    </zt-form>
  </ZtSearchForm>

  <ZtDefaultTable>
    <template #title> {{ $t('undefined_rcms_operatingOutlet_list') }} </template>
    <template #btnGroup>
    
    
    <!-- 导出 -->
      <zt-button @click="handleExportExcel" :loading="exportLoading" type="warning">
        {{ $t('undefined_export') }}
      </zt-button>
      <!-- 导出详情 -->
      <zt-button @click="$router.push('/export-detail?businessType=4')" type="warning">
        {{ $t('undefined_rcms_exportDetail') }}
      </zt-button>
      
    </template>
    <zt-table v-loading="tableLoading" :data="tableData"  stripe>
      <!-- 项目编码-->
      <zt-table-column prop="aaaa" :label="$t('undefined_aaaa')"  show-overflow-tooltip></zt-table-column>
    <!-- 项目名称-->
      <zt-table-column prop="bbbb" :label="$t('undefined_bbbb')"  show-overflow-tooltip></zt-table-column>
    <!-- 项目区域-->
      <zt-table-column prop="cccc" :label="$t('undefined_cccc')"  show-overflow-tooltip></zt-table-column>
    <!-- 发布时间-->
      <zt-table-column prop="dddd" :label="$t('undefined_dddd')"  show-overflow-tooltip></zt-table-column>
    <!-- 状态-->
      <zt-table-column prop="eeee" :label="$t('undefined_eeee')"  show-overflow-tooltip></zt-table-column>
    <!-- 竞价开始时间-->
      <zt-table-column prop="ffff" :label="$t('undefined_ffff')"  show-overflow-tooltip></zt-table-column>
    <!-- 竞价结束时间-->
      <zt-table-column prop="gggg" :label="$t('undefined_gggg')"  show-overflow-tooltip></zt-table-column>
    <!-- 是否报价-->
      <zt-table-column prop="hhhh" :label="$t('undefined_hhhh')"  show-overflow-tooltip></zt-table-column>
    
      <!-- 操作 -->
      <zt-table-column :label="$t('undefined_operation')" fixed="right" width="80">
        <template #default="scope">
          
          
        </template>
      </zt-table-column>
    </zt-table>
    <!-- 分页 -->
    <zt-default-pagination :currentPage="pagination.currentPage" :totalCount="pagination.totalCount" :pageSize="pagination.pageSize" @current-change="onCurrentChange" @size-change="onSizeChange" />
    </ZtDefaultTable>
  </div>
</template>

<script lang='ts' setup>
import { ref, reactive } from 'vue'
import { ZtMessage } from 'zt-design'
import { useRouter } from 'vue-router'

import { $t } from '@/lang/index'
import { useTable, useExport } from '@/utils/hooks'
import { formatDateUtc } from '@/utils/getDate'
import { siteAirportList, siteAirportEnable, siteAirportDisable } from '@/services/area'
import { getEnumeration } from '@/services/common'

defineOptions({ 
  name: 'projectList' 
})

const router = useRouter()

// 初始化搜索条件
const FORM_KEY = 'undefined-projectList-app'

// 功能
const {
  searchForm,
  tableLoading,
  tableData,
  initData,
  
  pagination,
  onSearch,
  onReset,
  onCurrentChange,
  onSizeChange
} = useTable({
  FORM_KEY
})

// 初始化数据列表
initData(async () => {
  const params = {
    ...searchForm.value,
    startIndex: (pagination.currentPage - 1) * pagination.pageSize,
    count: pagination.pageSize
  }
  const { data } = await siteAirportList(params)
  tableData.value = data?.dataList || []
  pagination.totalCount = data?.TotalCount || 0
})
    
// 初始化枚举-WHType操作网点类型
const enumerationList = reactive({ WHType: {} })
// 操作网点类型
getEnumeration('enumeration')
  .then(res => {
    res.data.forEach(item => {
      if (['WHType'].includes(item.EnumType)) {
        enumerationList[item.EnumType][item.EnumValue] = {
          EnumKey: item.EnumKey,
          EnumValue: item.EnumValue
        }
      }
    })
  })
  .catch(err => {
    console.log('err', err)
  })







// 导出
const { exportLoading, exportExcel } = useExport()
const handleExportExcel = exportExcel(searchForm, siteAirportsExport)

</script>

<style lang="scss" scoped></style>
