<!-- 机场管理 -->
<template>
  <ZtSearchForm @search="onSearch">
    <el-form label-position="top">
      <el-row :gutter="20">
        <!-- 资源编码  -->
      <el-col :span="5">
      <el-form-item :label="$t('air-freight-resources_resourceCode')">
        <el-input v-model="searchForm.resourceCode" clearable :placeholder="$t('please_enter')"></el-input>
      </el-form-item>
    </el-col>
    <!-- 资源类型  -->
      <el-col :span="5">
      <el-form-item :label="$t('air-freight-resources_resourceType')">
        <el-input v-model="searchForm.resourceType" clearable :placeholder="$t('please_enter')"></el-input>
      </el-form-item>
    </el-col>
    <!-- 始发机场  -->
      <el-col :span="5">
      <el-form-item :label="$t('air-freight-resources_departureAirport')">
        <el-select v-model="searchForm.departureAirport" filterable clearable class="w-100">
          <el-option value="E" :label="$t('enable')"></el-option>
          <el-option value="D" :label="$t('disable')"></el-option>
        </el-select>
      </el-form-item>
    </el-col>
    <!-- 目的机场  -->
      <el-col :span="5">
      <el-form-item :label="$t('air-freight-resources_destinationAirport')">
        <el-select v-model="searchForm.destinationAirport" filterable clearable class="w-100">
          <el-option value="E" :label="$t('enable')"></el-option>
          <el-option value="D" :label="$t('disable')"></el-option>
        </el-select>
      </el-form-item>
    </el-col>
    <!-- 服务商  -->
      <el-col :span="5">
      <el-form-item :label="$t('air-freight-resources_serviceProviderName')">
        <el-select v-model="searchForm.serviceProviderName" filterable clearable class="w-100">
          <el-option value="E" :label="$t('enable')"></el-option>
          <el-option value="D" :label="$t('disable')"></el-option>
        </el-select>
      </el-form-item>
    </el-col>
    <!-- 航司  -->
      <el-col :span="5">
      <el-form-item :label="$t('air-freight-resources_airlineCompany')">
        <el-select v-model="searchForm.airlineCompany" filterable clearable class="w-100">
          <el-option value="E" :label="$t('enable')"></el-option>
          <el-option value="D" :label="$t('disable')"></el-option>
        </el-select>
      </el-form-item>
    </el-col>
    <!-- 预计到达时间  -->
      <el-col :span="5">
      <el-form-item :label="$t('air-freight-resources_estimatedArrivalTime')">
        <el-input v-model="searchForm.estimatedArrivalTime" clearable :placeholder="$t('please_enter')"></el-input>
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
      <!-- 资源编码 -->
      <zt-table-column prop="resourceCode" :label="$t('air-freight-resources_resourceCode')" ></zt-table-column>
    <!-- 资源类型 -->
      <zt-table-column prop="resourceType" :label="$t('air-freight-resources_resourceType')" ></zt-table-column>
    <!-- 所属大区 -->
      <zt-table-column prop="routeArea" :label="$t('air-freight-resources_routeArea')" ></zt-table-column>
    <!-- 固舱编码 -->
      <zt-table-column prop="spaceCode" :label="$t('air-freight-resources_spaceCode')" ></zt-table-column>
    <!-- 航线编码 -->
      <zt-table-column prop="airRouteCode" :label="$t('air-freight-resources_airRouteCode')" ></zt-table-column>
    <!-- 航线 -->
      <zt-table-column prop="airRoute" :label="$t('air-freight-resources_airRoute')" ></zt-table-column>
    <!-- 始发机场 -->
      <zt-table-column prop="departureAirport" :label="$t('air-freight-resources_departureAirport')" ></zt-table-column>
    <!-- 目的机场 -->
      <zt-table-column prop="destinationAirport" :label="$t('air-freight-resources_destinationAirport')" ></zt-table-column>
    <!-- 服务商 -->
      <zt-table-column prop="serviceProviderName" :label="$t('air-freight-resources_serviceProviderName')" ></zt-table-column>
    <!-- 航司 -->
      <zt-table-column prop="airlineCompany" :label="$t('air-freight-resources_airlineCompany')" ></zt-table-column>
    <!-- 舱位类型 -->
      <zt-table-column prop="cargoHoldType" :label="$t('air-freight-resources_cargoHoldType')" ></zt-table-column>
    <!-- 预计起飞时间 -->
      <zt-table-column prop="estimatedDepartureTime" :label="$t('air-freight-resources_estimatedDepartureTime')" ></zt-table-column>
    <!-- 预计到达时间 -->
      <zt-table-column prop="estimatedArrivalTime" :label="$t('air-freight-resources_estimatedArrivalTime')" ></zt-table-column>
    <!-- 方数 -->
      <zt-table-column prop="volume" :label="$t('air-freight-resources_volume')" ></zt-table-column>
    <!-- 航班号 -->
      <zt-table-column prop="flightNumber" :label="$t('air-freight-resources_flightNumber')" ></zt-table-column>
    <!-- 机型 -->
      <zt-table-column prop="aircraftType" :label="$t('air-freight-resources_aircraftType')" ></zt-table-column>
    <!-- 航班周期 -->
      <zt-table-column prop="flightCycle" :label="$t('air-freight-resources_flightCycle')" ></zt-table-column>
    <!-- 生效时间 -->
      <zt-table-column prop="effectiveTime" :label="$t('air-freight-resources_effectiveTime')" ></zt-table-column>
    <!-- 失效时间 -->
      <zt-table-column prop="failureTime" :label="$t('air-freight-resources_failureTime')" ></zt-table-column>
    <!-- 舱位日期 -->
      <zt-table-column prop="cargoHoldDate" :label="$t('air-freight-resources_cargoHoldDate')" ></zt-table-column>
    <!-- 固舱状态 （W=待生效，D=生效中，E=已失效，I=已作废）-->
      <zt-table-column prop="spaceStatus" :label="$t('air-freight-resources_spaceStatus')" ></zt-table-column>
    <!-- 资源状态 （W=未创建计划，E=已创建计划，I=已作废，P=部分创建发货计划）-->
      <zt-table-column prop="resourceStatus" :label="$t('air-freight-resources_resourceStatus')" ></zt-table-column>
    
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

  
</template>

<script>
import { defineComponent, ref, getCurrentInstance } from 'vue'
import { tableCommon } from '@/utils/handle-common'
import { getEnumeration } from '@/services/transport'
import { siteOperatingOutlets } from '@/services/area'



export default defineComponent({
  name: "air-freight-resources",
  components: { 
     
  },
  setup() {
    const { proxy } = getCurrentInstance()

    // 搜索条件
    const searchForm = ref({})

    // 初始化搜索条件
    const FORM_KEY = 'air-freight-resourcesAPP'

    // 功能
    const {
      tableLoading,
      tableData,
      initData,
      exportLoading,
      exportExcel,
      pagination,
      onSearch,
      handleReset,
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
      handleReset,
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
    