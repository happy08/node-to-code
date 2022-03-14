<!-- 操作网点管理 -->
<template>
  <ZtSearchForm @search="onSearch">
    <el-form label-position="top">
      <el-row :gutter="20">
        <!-- 操作网点代码 -->
      <el-col :span="5">
      <el-form-item :label="$t('operating-outlet_code')">
        <el-input v-model="searchForm.code" clearable :placeholder="$t('please_enter')"></el-input>
      </el-form-item>
    </el-col>
    <!-- 操作网点中文名称 -->
      <el-col :span="5">
      <el-form-item :label="$t('operating-outlet_cnName')">
        <el-input v-model="searchForm.cnName" clearable :placeholder="$t('please_enter')"></el-input>
      </el-form-item>
    </el-col>
    <!-- 操作网点类型 -->
      <el-col :span="5">
      <el-form-item :label="$t('operating-outlet_type')">
        <el-select v-model="searchForm.type" filterable clearable class="w-100">
          <el-option :value="1" label="启用"></el-option>
          <el-option :value="2" label="禁用"></el-option>
        </el-select>
      </el-form-item>
    </el-col>
    <!-- 状态 -->
      <el-col :span="5">
      <el-form-item :label="$t('operating-outlet_status')">
        <el-select v-model="searchForm.status" filterable clearable class="w-100">
          <el-option :value="1" label="启用"></el-option>
          <el-option :value="2" label="禁用"></el-option>
        </el-select>
      </el-form-item>
    </el-col>
    
      </el-row>
    </el-form>
  </ZtSearchForm>

  <ZtDefaultTable>
    <template #btnGroup>
    <!-- 导出 -->
      <el-button @click="handleExport" :loading="exportLoading" type="warning" size="mini">
        {{ $t('export') }}
      </el-button>
      
    </template>
    <zt-table v-loading="tableLoading" :data="tableData" stripe>
      <!-- 操作网点代码 -->
      <zt-table-column prop="code" :label="$t('operating-outlet_code')" ></zt-table-column>
    <!-- 操作网点中文名称 -->
      <zt-table-column prop="cnName" :label="$t('operating-outlet_cnName')" ></zt-table-column>
    <!-- 操作网点英文名称 -->
      <zt-table-column prop="enName" :label="$t('operating-outlet_enName')" ></zt-table-column>
    <!-- 操作网点类型 -->
      <zt-table-column prop="type" :label="$t('operating-outlet_type')" ></zt-table-column>
    <!-- 网点等级 -->
      <zt-table-column prop="siteLevel" :label="$t('operating-outlet_siteLevel')" ></zt-table-column>
    <!-- 开展业务 -->
      <zt-table-column prop="conductBusiness" :label="$t('operating-outlet_conductBusiness')" ></zt-table-column>
    <!-- 所属大区 -->
      <zt-table-column prop="areaName" :label="$t('operating-outlet_areaName')" ></zt-table-column>
    <!-- 国家/地区 -->
      <zt-table-column prop="country" :label="$t('operating-outlet_country')" ></zt-table-column>
    <!-- 省/州 -->
      <zt-table-column prop="province" :label="$t('operating-outlet_province')" ></zt-table-column>
    <!-- 城市 -->
      <zt-table-column prop="city" :label="$t('operating-outlet_city')" ></zt-table-column>
    <!-- 详细地址 -->
      <zt-table-column prop="detailedAddress" :label="$t('operating-outlet_detailedAddress')" ></zt-table-column>
    <!-- 邮政编码 -->
      <zt-table-column prop="postCode" :label="$t('operating-outlet_postCode')" ></zt-table-column>
    <!-- 联系人姓名 -->
      <zt-table-column prop="contactName" :label="$t('operating-outlet_contactName')" ></zt-table-column>
    <!-- 联系方式 -->
      <zt-table-column prop="contactInfo" :label="$t('operating-outlet_contactInfo')" ></zt-table-column>
    <!-- 时区 -->
      <zt-table-column prop="timezone" :label="$t('operating-outlet_timezone')" ></zt-table-column>
    <!-- 班期 -->
      <zt-table-column prop="workCycle" :label="$t('operating-outlet_workCycle')" ></zt-table-column>
    <!-- 最大处理能力（箱/包裹） -->
      <zt-table-column prop="maxProcessingPower" :label="$t('operating-outlet_maxProcessingPower')" ></zt-table-column>
    <!-- 状态 -->
      <zt-table-column prop="status" :label="$t('operating-outlet_status')" ></zt-table-column>
    <!-- 备注 -->
      <zt-table-column prop="remark" :label="$t('operating-outlet_remark')" ></zt-table-column>
    
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
    <!-- 分页 -->
    <zt-pagination
      :currentPage="pagination.currentPage"
      :totalCount="pagination.totalCount"
      :pageSize="pagination.pageSize"
      @current-change="onCurrentChange"
      @size-change="onSizeChange"
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
  name: "operating-outlet",
  components: { 
    AddEdit 
  },
  setup() {
    const { proxy } = getCurrentInstance()

    // 搜索条件
    const searchForm = ref({})

    // 初始化搜索条件
    const FORM_KEY = 'operating-outletAPP'

    // 功能
    const {
      tableLoading,
      tableData,
      initData,
      addEditVisible,
      editRow,
      handleAddEdit,
      exportLoading,
      handleExport,

      pagination,
      onSearch,
      handleReset,
      onCurrentChange,
      onSizeChange
    } = tableCommon({
      getDataList,
      addEdit,
      exportExcel,
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


    

    // 导出
async function exportExcel() {
  try {
    const res = await baseOrganizationList()
    proxy.$tools.openFile(res, 'download')
  } catch (err) {
    console.log('err', err)
  }
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
      onCurrentChange,
      onSizeChange,
      
      exportLoading,
      handleExport,
    }
  }
})
</script>

<style lang="scss" scoped></style>
    