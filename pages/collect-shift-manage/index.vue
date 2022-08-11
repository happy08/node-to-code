<!-- 揽收班次管理 -->
<template>
<div class="main-container">
  <ZtSearchForm @search="onSearch" @reset="onReset" isMore>
    <zt-form label-position="top">
      <zt-row :gutter="20">
        <!-- 揽收班次编码 -->
      <zt-col :span="5">
      <zt-form-item :label="$t('lnms_collectShiftCode')">
        <zt-input v-model="searchForm.condition.shiftCode" clearable :placeholder="$t('lnms_pleaseEnter')"></zt-input>
      </zt-form-item>
    </zt-col>
    <!-- 揽收班次名称 -->
      <zt-col :span="5">
      <zt-form-item :label="$t('lnms_collectShiftName')">
        <zt-input v-model="searchForm.condition.shiftName" clearable :placeholder="$t('lnms_pleaseEnter')"></zt-input>
      </zt-form-item>
    </zt-col>
    <!-- 操作网点 -->
      <zt-col :span="5">
      <zt-form-item :label="$t('lnms_originalPlace')">
        <zt-input v-model="searchForm.condition.originalPlace" clearable :placeholder="$t('lnms_pleaseEnter')"></zt-input>
      </zt-form-item>
    </zt-col>
    <!-- 所属大区 -->
      <zt-col :span="5">
      <zt-form-item :label="$t('lnms_originalArea')">
        <zt-select v-model="searchForm.condition.area" filterable clearable class="w-100">
          <zt-option :value="1" :label="$t('lnms_draft')"></zt-option>
          <zt-option :value="0" :label="$t('lnms_enable')"></zt-option>
          <zt-option :value="2" :label="$t('lnms_disable')"></zt-option>
          <zt-option v-for="item in 2" :key="item" value="item" :label="$t('lnms_disable')"></zt-option>
        </zt-select>
      </zt-form-item>
    </zt-col>
    <!-- 国家/地区 -->
      <zt-col :span="5">
      <zt-form-item :label="$t('lnms_countryRegion')">
        <zt-select v-model="searchForm.condition.country" filterable clearable class="w-100">
          <zt-option :value="1" :label="$t('lnms_draft')"></zt-option>
          <zt-option :value="0" :label="$t('lnms_enable')"></zt-option>
          <zt-option :value="2" :label="$t('lnms_disable')"></zt-option>
          <zt-option v-for="item in 2" :key="item" value="item" :label="$t('lnms_disable')"></zt-option>
        </zt-select>
      </zt-form-item>
    </zt-col>
    <!-- 网点等级 -->
      <zt-col :span="5">
      <zt-form-item :label="$t('lnms_siteLevel')">
        <zt-select v-model="searchForm.condition.siteLevel" filterable clearable class="w-100">
          <zt-option :value="1" :label="$t('lnms_draft')"></zt-option>
          <zt-option :value="0" :label="$t('lnms_enable')"></zt-option>
          <zt-option :value="2" :label="$t('lnms_disable')"></zt-option>
          <zt-option v-for="item in 2" :key="item" value="item" :label="$t('lnms_disable')"></zt-option>
        </zt-select>
      </zt-form-item>
    </zt-col>
    <!-- 状态 -->
      <zt-col :span="5">
      <zt-form-item :label="$t('lnms_status')">
        <zt-select v-model="searchForm.condition.shiftStatus" filterable clearable class="w-100">
          <zt-option :value="1" :label="$t('lnms_draft')"></zt-option>
          <zt-option :value="0" :label="$t('lnms_enable')"></zt-option>
          <zt-option :value="2" :label="$t('lnms_disable')"></zt-option>
          <zt-option v-for="item in 2" :key="item" value="item" :label="$t('lnms_disable')"></zt-option>
        </zt-select>
      </zt-form-item>
    </zt-col>
    
      </zt-row>
    </zt-form>
  </ZtSearchForm>

  <ZtDefaultTable>
    <template #title> {{ $t('lnms_operatingOutlet_list') }} </template>
    <template #btnGroup>
    <!-- 新增 -->
      <zt-button @click="handleAddEdit('add')" type="warning" leftIcon="Plus">
        {{ $t('lnms_add') }}
      </zt-button>
    <!-- 启用 -->
      <zt-button @click="handleEnableDisable('E')" type="warning">
        {{ $t('lnms_enable') }}
      </zt-button>
      <!-- 禁用 -->
      <zt-button @click="handleEnableDisable('D')" type="warning">
        {{ $t('lnms_disable') }}
      </zt-button>
    
      
    </template>
    <zt-table v-loading="tableLoading" :data="tableData" @current-change="onTableCurrentChange" highlight-current-row stripe>
      <!-- 揽收班次编码-->
      <zt-table-column prop="shiftCode" :label="$t('lnms_collectShiftCode')" width="100" show-overflow-tooltip></zt-table-column>
    <!-- 揽收班次名称-->
      <zt-table-column prop="shiftName" :label="$t('lnms_collectShiftName')" width="100" show-overflow-tooltip></zt-table-column>
    <!-- 操作网点-->
      <zt-table-column prop="originalPlace" :label="$t('lnms_originalPlace')" width="100" show-overflow-tooltip></zt-table-column>
    <!-- 操作网点业务简码-->
      <zt-table-column prop="placeCode" :label="$t('lnms_originalPlaceCode')" width="100" show-overflow-tooltip></zt-table-column>
    <!-- 所属大区-->
      <zt-table-column prop="area" :label="$t('lnms_originalArea')" width="100" show-overflow-tooltip></zt-table-column>
    <!-- 国家/地区-->
      <zt-table-column prop="country" :label="$t('lnms_countryRegion')" width="100" show-overflow-tooltip></zt-table-column>
    <!-- 网点等级-->
      <zt-table-column prop="siteLevel" :label="$t('lnms_siteLevel')" width="100" show-overflow-tooltip></zt-table-column>
    <!-- 揽收出车时间-->
      <zt-table-column prop="startDays" :label="$t('lnms_collectionDepartureTime')" width="100" show-overflow-tooltip></zt-table-column>
    <!-- 截单时间-->
      <zt-table-column prop="cutOffTime" :label="$t('lnms_cutOffTime')" width="100" show-overflow-tooltip></zt-table-column>
    <!-- 揽收发货时间-->
      <zt-table-column prop="endDays" :label="$t('lnms_collectionShippingTime')" width="100" show-overflow-tooltip></zt-table-column>
    <!-- 班期-->
      <zt-table-column prop="schedule" :label="$t('lnms_schedule')" width="100" show-overflow-tooltip></zt-table-column>
    <!-- 备注-->
      <zt-table-column prop="remark" :label="$t('lnms_remark')" width="100" show-overflow-tooltip></zt-table-column>
    <!-- 状态-->
      <zt-table-column prop="shiftStatus" :label="$t('lnms_status')" width="100" show-overflow-tooltip></zt-table-column>
    <!-- 最后修改人-->
      <zt-table-column prop="updateBy" :label="$t('lnms_lastUpdateBy')" width="100" show-overflow-tooltip></zt-table-column>
    <!-- 最后修改时间-->
      <zt-table-column prop="updateTime" :label="$t('lnms_lastUpdateTime')" width="100" show-overflow-tooltip></zt-table-column>
    
      <!-- 操作 -->
      <zt-table-column :label="$t('lnms_operation')" fixed="right" width="80">
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
import { useTable, useEnableDisable } from '@/utils/hooks'
import { formatDateUtc } from '@/utils/getDate'
import { siteAirportList, siteAirportEnable, siteAirportDisable } from '@/services/area'
import { getEnumeration } from '@/services/common'

defineOptions({ 
  name: 'collectShiftManage' 
})

const router = useRouter()

// 初始化搜索条件
const FORM_KEY = 'lnms-collectShiftManage-app'

// 搜索条件
const searchFormOpt = {
  condition:{
    shiftCode: '',
    shiftName: '',
    originalPlace: '',
    area: '',
    country: '',
    siteLevel: '',
    shiftStatus: '',
    
  }
}

// 功能
const {
  searchForm,
  tableLoading,
  tableData,
  initData,
  tableCurrentRow, onTableCurrentChange,
  pagination,
  onSearch,
  onReset,
  onCurrentChange,
  onSizeChange
} = useTable({
  FORM_KEY,
  searchFormOpt
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



    // 启用禁用
    const { enableDisable } = useEnableDisable()
    const handleEnableDisable = (type: string) => {
      enableDisable({ apiE: siteAirportEnable, apiD: siteAirportDisable, tableCurrentRow, type })
    }





</script>

<style lang="scss" scoped></style>
