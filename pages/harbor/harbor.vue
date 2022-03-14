<!-- 港口信息管理 -->
<template>
  <ZtSearchForm @search="onSearch">
    <el-form label-position="top">
      <el-row :gutter="20">
        <!-- 港口代码 -->
      <el-col :span="5">
      <el-form-item :label="$t('harbor_code')">
        <el-input v-model="searchForm.code" clearable :placeholder="$t('please_enter')"></el-input>
      </el-form-item>
    </el-col>
    <!-- 港口名称 -->
      <el-col :span="5">
      <el-form-item :label="$t('harbor_portCnName')">
        <el-input v-model="searchForm.portCnName" clearable :placeholder="$t('please_enter')"></el-input>
      </el-form-item>
    </el-col>
    <!-- 状态 -->
      <el-col :span="5">
      <el-form-item :label="$t('harbor_status')">
        <el-select v-model="searchForm.undefined" filterable class="w-100">
          <el-option :key="1" :value="1" label="启用"></el-option>
          <el-option :key="2" :value="2" label="禁用"></el-option>
        </el-select>
      </el-form-item>
    </el-col>
    
      </el-row>
    </el-form>
  </ZtSearchForm>

  <ZtDefaultTable>
    <template #btnGroup>
      <el-button type="warning" size="mini">{{ $t('export') }}</el-button>
    </template>
    <zt-table v-loading="tableLoading" :data="tableData" stripe>
      <!-- 港口代码 -->
      <zt-table-column prop="code" :label="$t('harbor_code')" ></zt-table-column>
    <!-- 港口名称 -->
      <zt-table-column prop="portCnName" :label="$t('harbor_portCnName')" ></zt-table-column>
    <!-- 港口英文名 -->
      <zt-table-column prop="portEnName" :label="$t('harbor_portEnName')" ></zt-table-column>
    <!-- 港口类型 -->
      <zt-table-column prop="type" :label="$t('harbor_type')" ></zt-table-column>
    <!-- 所属大区 -->
      <zt-table-column prop="area" :label="$t('harbor_area')" ></zt-table-column>
    <!-- 国家/地区 -->
      <zt-table-column prop="country" :label="$t('harbor_country')" ></zt-table-column>
    <!-- 省/州 -->
      <zt-table-column prop="province" :label="$t('harbor_province')" ></zt-table-column>
    <!-- 城市 -->
      <zt-table-column prop="city" :label="$t('harbor_city')" ></zt-table-column>
    <!-- 口岸 -->
      <zt-table-column prop="portCode" :label="$t('harbor_portCode')" ></zt-table-column>
    <!-- 时区 -->
      <zt-table-column prop="timezone" :label="$t('harbor_timezone')" ></zt-table-column>
    <!-- 班期 -->
      <zt-table-column prop="workCycle" :label="$t('harbor_workCycle')" ></zt-table-column>
    <!-- 最大处理能力（箱/包裹） -->
      <zt-table-column prop="maxProcessingPower" :label="$t('harbor_maxProcessingPower')" ></zt-table-column>
    <!-- 状态 -->
      <zt-table-column prop="status" :label="$t('harbor_status')" ></zt-table-column>
    <!-- 备注 -->
      <zt-table-column prop="remark" :label="$t('harbor_remark')" ></zt-table-column>
    
      <!-- 操作 -->
      <zt-table-column :label="$t('operation')" fixed="right" width="80">
        <template #default="scope">
          <!-- 编辑 -->
          <el-button @click="handleAddEdit(scope.row)" type="text">
              {{ $t("status.edit") }}
          </el-button>
          
        </template>
      </zt-table-column>
    </zt-table>
    <ZtPagination
      :currentPage="pagination.currentPage"
      :totalCount="pagination.totalCount"
      :pageSize="pagination.pageSize"
      @handleCurrentChange="handleCurrentChange"
      @handlePageSizeChange="handlePageSizeChange"
    />
  </ZtDefaultTable>

  
  <!-- 新增编辑 -->
  <AddEdit v-if="editVisible" v-model:visible="editVisible" :row="editRow" @reloadData="initData" />

</template>

<script>
import { defineComponent, ref, getCurrentInstance } from 'vue'
import { tableCommon } from '@/utils/handle-common'
import { getEnumeration } from '@/services/transport'
import { siteOperatingOutlets } from '@/services/area'


import AddEdit from "./components/addEdit";


export default defineComponent({
  name: "harbor",
  components: { 
    AddEdit 
  },
  setup() {
    const { proxy } = getCurrentInstance()

    // 搜索条件
    const searchForm = ref({})

    // 初始化搜索条件
    const FORM_KEY = 'harborAPP'

    // 功能
    const {
      tableLoading,
      tableData,
      initData,
      addEditVisible,
      editRow,
      handleAddEdit,

      pagination,
      onSearch,
      handleReset,
      handleCurrentChange,
      handlePageSizeChange
    } = tableCommon({
      getDataList,
      addEdit,
      searchForm,
      FORM_KEY
    })

    // 获取数据列表
    async function getDataList() {
      try {
        const params = {
          ...searchForm.value,
          startIndex: (pagination.currentPage - 1) * pagination.pageSize,
          count: pagination.pageSize
        }
        const res = await siteOperatingOutlets(params)
        tableData.value = res?.data?.items || []
        pagination.totalCount = res?.data?.TotalCount || 0
      } catch (err) {
        console.log('err', err)
      }
    }
    initData()

    /**
     * 获取枚举
     * 操作网点类型 WHType
     */
    const enumerationList = ref({ WHType: [] })
    // getEnumeration('enumeration')
    //   .then(res => {
    //     enumerationList.value.WHType = res.data.filter(item => item.EnumType === 'WHType')
    //   })
    //   .catch(err => {
    //     console.log('err', err)
    //   })

    
    // 新增编辑
    function addEdit(row = {}) {
      editRow.value = row
      addEditVisible.value = true
    }


    

    return {
      searchForm,
      onSearch,
      handleReset,
      enumerationList,
      tableLoading,
      tableData,
      initData,
      pagination,
      addEditVisible,
      editRow,
      handleAddEdit,
      handleCurrentChange,
      handlePageSizeChange
    }
  }
})
</script>

<style lang="scss" scoped></style>
    