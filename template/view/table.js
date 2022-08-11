// 搜索
const templateSearchForm = (props) => {
  let str = "";
  const column = props.isSearchColumn;
  for (key in column) {
    let code = `<!-- ${column[key].labelCn || column[key].prop}${column[key].labelMsg||''} -->
      <zt-col :span="5">
      <zt-form-item :label="$t('${props.project}_${column[key].$t || column[key].prop}')">
        <zt-input v-model="searchForm.${column[key].prop}" clearable :placeholder="$t('${props.project}_please_enter')"></zt-input>
      </zt-form-item>
    </zt-col>
    `
    if(column[key].inputType === 'select'){
      code = `<!-- ${column[key].labelCn || column[key].prop}${column[key].labelMsg||''} -->
      <zt-col :span="5">
      <zt-form-item :label="$t('${props.project}_${column[key].$t || column[key].prop}')">
        <zt-select v-model="searchForm.${column[key].prop}" filterable clearable class="w-100">
          <zt-option value="E" :label="$t('${props.project}_enable')"></zt-option>
          <zt-option value="D" :label="$t('${props.project}_disable')"></zt-option>
          <zt-option v-for="(item, key) in enumerationList.Area" :key="key" :value="key" :label="item.EnumKey"></zt-option>
        </zt-select>
      </zt-form-item>
    </zt-col>
    `
    }
      str += code;
  }
  return str;
};

// table列
const templateTableColumn = (props) => {
  let str = "";
  const column = props.templateTableColumn;
  for (key in column) {
    str += `<!-- ${column[key].labelCn || column[key].prop}${column[key].labelMsg||''}-->
      <zt-table-column prop="${column[key].prop}" :label="$t('${props.project}_${column[key].$t || column[key].prop}')" ${column[key].columnWidth?`width="${column[key].columnWidth}"`:''} show-overflow-tooltip></zt-table-column>
    `;
  }
  return str;
};

// 新增按钮
const templateAddBtn = `
                    <!-- 新增 -->
                    <zt-button @click="handleAddEdit" type="warning" icon="el-icon-plus"> {{ $t("add") }} </zt-button>
`;

// 新增编辑组件
const templateAddEditComponent = `
  <!-- 新增编辑 -->
  <AddEdit v-model="addEditVisible" :row="editRow" @reloadData="initData" />
`;
// 新增编辑组件导入
const jsEditImportComponent = `
import AddEdit from "./components/addEdit";
`;
// 新增编辑js代码
const jsAddEdit = `
    // 新增编辑
    const { addEditVisible, editRow, addEdit } = useEdit()
    const handleAddEdit = addEdit()
`;

// 启用禁用
const jsEnableDisable = `
// 启用禁用
const { enableDisable } = useEnableDisable()
const handleEnableDisable = (type: string) => {
  enableDisable({ apiE: siteAirportEnable, apiD: siteAirportDisable, tableCurrentRow, type })
}`

const jsDel = `// 删除
        const handleDelete = (row) => {
            proxy
                .$confirm(proxy.$t("confirmDelete"), "", {
                    type: "warning"
                })
                .then(() => {
                    roleDelete({ roleId: row.roleId })
                        .then((res) => {
                            proxy.$message.success(res.msg);
                            initData();
                        })
                        .catch((err) => {});
                })
                .catch(() => {});
        };`;

const jsExport = () => `// 导出
const { exportLoading, exportExcel } = useExport()
const handleExportExcel = exportExcel(searchForm, siteAirportsExport)
`

// 导出模板
exports.page = function (props) {
  // 搜索的列
  props.isSearchColumn = props.templateTableColumn.filter((item)=>item.isSearch === true)


  return `<!-- ${props.templateName} -->
<template>
<div class="main-container">
  <ZtSearchForm @search="onSearch" @reset="onReset" ${props.isSearchColumn.length>5?'isMore':''}>
    <zt-form label-position="top">
      <zt-row :gutter="20">
        ${templateSearchForm(props)}
      </zt-row>
    </zt-form>
  </ZtSearchForm>

  <ZtDefaultTable>
    <template #title> {{ $t('${props.project}_rcms_operatingOutlet_list') }} </template>
    <template #btnGroup>
    ${
      props.isAddBtn
        ? `<!-- 新增 -->
      <zt-button @click="handleAddEdit" type="warning" size="mini">
        {{ $t('${props.project}_add') }}
      </zt-button>`
        : ""
    }
    ${
      props.isExport
        ? `<!-- 导出 -->
      <zt-button @click="handleExportExcel" :loading="exportLoading" type="warning" size="mini">
        {{ $t('${props.project}_export') }}
      </zt-button>
      <!-- 导出详情 -->
      <zt-button @click="$router.push('/export-detail?businessType=4')" type="warning">
        {{ $t('${props.project}_rcms_exportDetail') }}
      </zt-button>` : ""
    }
      
    </template>
    <zt-table v-loading="tableLoading" :data="tableData" stripe highlight-current-row>
      ${templateTableColumn(props)}
      <!-- 操作 -->
      <zt-table-column :label="$t('${props.project}_operation')" fixed="right" width="80">
        <template #default="{ row }">
          ${
            props.isAddEdit
              ? `<!-- 编辑 -->
          <zt-button @click="handleAddEdit(row)" type="text">
              {{ $t("edit") }}
          </zt-button>`
              : ""
          }
          ${
            props.isDel
              ? `<!-- 删除 -->
          <zt-button @click="handleDelete(row)" type="text">
              {{ $t("delete") }}
          </zt-button>`
              : ""
          }
        </template>
      </zt-table-column>
    </zt-table>
    <!-- 分页 -->
    <zt-default-pagination :currentPage="pagination.currentPage" :totalCount="pagination.totalCount" :pageSize="pagination.pageSize" @current-change="onCurrentChange" @size-change="onSizeChange" />
</div>
  ${props.isAddEdit ? templateAddEditComponent : ""}
</template>

<script lang='ts' setup>
import { ref, reactive } from 'vue'
import { ZtMessage } from 'zt-design'

import { $t } from '@/lang/index'
import { useTable${props.isAddEdit ? ", useEdit" : ""}${props.isExport ? ", useExport" : ""}${props.isEnableBtn ? ", useEnableDisable" : ""} } from '@/utils/hooks'
import { formatDateUtc } from '@/utils/getDate'
import { getEnumeration } from '@/services/transport'
import { siteAirportList, siteAirportEnable, siteAirportDisable } from '@/services/area'

defineOptions({ 
  name: '${props.folderSmallHump}' 
})

${props.isAddEdit ? jsEditImportComponent : ""}

// 初始化搜索条件
const FORM_KEY = '${props.folderSmallHump}-app'

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
} = tableCommon({
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

${props.isAddEdit ? jsAddEdit : ""}

${props.isEnableBtn ? jsEnableDisable : ""}

${props.isDel ? jsDel : ""}

${props.isExport ? jsExport(props) : ""}
</script>


<style lang="scss" scoped></style>
`;
};
