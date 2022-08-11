<!-- 操作网点管理 -->
<template>
<div class="main-container">
  <ZtSearchForm @search="onSearch" @reset="onReset" >
    <zt-form label-position="top">
      <zt-row :gutter="20">
        <!-- 操作网点代码 -->
      <zt-col :span="5">
      <zt-form-item :label="$t('rcms_code')">
        <zt-input v-model="searchForm.code" clearable :placeholder="$t('rcms_please_enter')"></zt-input>
      </zt-form-item>
    </zt-col>
    <!-- 操作网点中文名称 -->
      <zt-col :span="5">
      <zt-form-item :label="$t('rcms_cnName')">
        <zt-input v-model="searchForm.cnName" clearable :placeholder="$t('rcms_please_enter')"></zt-input>
      </zt-form-item>
    </zt-col>
    <!-- 操作网点类型 -->
      <zt-col :span="5">
      <zt-form-item :label="$t('rcms_type')">
        <zt-select v-model="searchForm.type" filterable clearable class="w-100">
          <zt-option value="E" :label="$t('rcms_enable')"></zt-option>
          <zt-option value="D" :label="$t('rcms_disable')"></zt-option>
          <zt-option v-for="item in 2" :key="item" value="item" :label="$t('rcms_disable')"></zt-option>
        </zt-select>
      </zt-form-item>
    </zt-col>
    <!-- 状态 -->
      <zt-col :span="5">
      <zt-form-item :label="$t('rcms_status')">
        <zt-select v-model="searchForm.status" filterable clearable class="w-100">
          <zt-option value="E" :label="$t('rcms_enable')"></zt-option>
          <zt-option value="D" :label="$t('rcms_disable')"></zt-option>
          <zt-option v-for="item in 2" :key="item" value="item" :label="$t('rcms_disable')"></zt-option>
        </zt-select>
      </zt-form-item>
    </zt-col>
    
      </zt-row>
    </zt-form>
  </ZtSearchForm>

  <ZtDefaultTable>
    <template #title> {{ $t('rcms_rcms_operatingOutlet_list') }} </template>
    <template #btnGroup>
    <!-- 新增 -->
      <zt-button @click="handleAddEdit('add')" type="warning" leftIcon="Plus">
        {{ $t('rcms_add') }}
      </zt-button>
    
    <!-- 导出 -->
      <zt-button @click="handleExportExcel" :loading="exportLoading" type="warning">
        {{ $t('rcms_export') }}
      </zt-button>
      <!-- 导出详情 -->
      <zt-button @click="$router.push('/export-detail?businessType=4')" type="warning">
        {{ $t('rcms_rcms_exportDetail') }}
      </zt-button>
      
    </template>
    <zt-table v-loading="tableLoading" :data="tableData"  stripe>
      <!-- 操作网点代码-->
      <zt-table-column prop="code" :label="$t('rcms_code')"  show-overflow-tooltip></zt-table-column>
    <!-- 操作网点中文名称-->
      <zt-table-column prop="cnName" :label="$t('rcms_cnName')"  show-overflow-tooltip></zt-table-column>
    <!-- 操作网点英文名称-->
      <zt-table-column prop="enName" :label="$t('rcms_enName')"  show-overflow-tooltip></zt-table-column>
    <!-- 操作网点类型-->
      <zt-table-column prop="type" :label="$t('rcms_type')"  show-overflow-tooltip></zt-table-column>
    <!-- 网点等级-->
      <zt-table-column prop="siteLevel" :label="$t('rcms_siteLevel')"  show-overflow-tooltip></zt-table-column>
    <!-- 开展业务-->
      <zt-table-column prop="conductBusiness" :label="$t('rcms_conductBusiness')"  show-overflow-tooltip></zt-table-column>
    <!-- 所属大区-->
      <zt-table-column prop="areaName" :label="$t('rcms_areaName')"  show-overflow-tooltip></zt-table-column>
    <!-- 国家/地区-->
      <zt-table-column prop="country" :label="$t('rcms_country')"  show-overflow-tooltip></zt-table-column>
    <!-- 省/州-->
      <zt-table-column prop="province" :label="$t('rcms_province')"  show-overflow-tooltip></zt-table-column>
    <!-- 城市-->
      <zt-table-column prop="city" :label="$t('rcms_city')"  show-overflow-tooltip></zt-table-column>
    <!-- 详细地址-->
      <zt-table-column prop="detailedAddress" :label="$t('rcms_detailedAddress')"  show-overflow-tooltip></zt-table-column>
    <!-- 邮政编码-->
      <zt-table-column prop="postCode" :label="$t('rcms_postCode')"  show-overflow-tooltip></zt-table-column>
    <!-- 联系人姓名-->
      <zt-table-column prop="contactName" :label="$t('rcms_contactName')"  show-overflow-tooltip></zt-table-column>
    <!-- 联系方式-->
      <zt-table-column prop="contactInfo" :label="$t('rcms_contactInfo')"  show-overflow-tooltip></zt-table-column>
    <!-- 时区-->
      <zt-table-column prop="timezone" :label="$t('rcms_timezone')"  show-overflow-tooltip></zt-table-column>
    <!-- 班期-->
      <zt-table-column prop="workCycle" :label="$t('rcms_workCycle')"  show-overflow-tooltip></zt-table-column>
    <!-- 最大处理能力（箱/包裹）-->
      <zt-table-column prop="maxProcessingPower" :label="$t('rcms_maxProcessingPower')"  show-overflow-tooltip></zt-table-column>
    <!-- 状态-->
      <zt-table-column prop="status" :label="$t('rcms_status')"  show-overflow-tooltip></zt-table-column>
    <!-- 备注-->
      <zt-table-column prop="remark" :label="$t('rcms_remark')"  show-overflow-tooltip></zt-table-column>
    
      <!-- 操作 -->
      <zt-table-column :label="$t('rcms_operation')" fixed="right" width="80">
        <template #default="scope">
          <!-- 编辑 -->
          <zt-button @click="handleAddEdit('edit', scope.row)" type="text">
              {{ $t("edit") }}
          </zt-button>
          
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
  name: 'operatingOutlet' 
})

const router = useRouter()

// 初始化搜索条件
const FORM_KEY = 'rcms-operatingOutlet-app'

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


    // 新增编辑
    const handleAddEdit = (type: string, row?: any) => {
      router.push(`collect-shift-manage/addEdit?title=${$t(`lnms_${type}`) + '-' + $t('lnms_collectShift')}&updateType=${type}${row?.id ? '&id=' + row?.id : ''}`)
    }






// 导出
const { exportLoading, exportExcel } = useExport()
const handleExportExcel = exportExcel(searchForm, siteAirportsExport)

</script>

<style lang="scss" scoped></style>
