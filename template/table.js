// 搜索
const templateSearchForm = (props) => {
  let str = "";
  const column = props.templateTableColumn;
  for (key in column) {
    if (column[key].isSearch) {
      let code = `<!-- ${column[key].labelCn || column[key].prop}${column[key].labelMsg||''} -->
      <el-col :span="5">
      <el-form-item :label="$t('${props.folder}_${column[key].prop}')">
        <el-input v-model="searchForm.${column[key].prop}" clearable :placeholder="$t('please_enter')"></el-input>
      </el-form-item>
    </el-col>
    `
    if(column[key].inputType === 'select'){
      code = `<!-- ${column[key].labelCn || column[key].prop}${column[key].labelMsg||''} -->
      <el-col :span="5">
      <el-form-item :label="$t('${props.folder}_${column[key].prop}')">
        <el-select v-model="searchForm.${column[key].prop}" filterable clearable class="w-100">
          <el-option value="E" :label="$t('enable')"></el-option>
          <el-option value="D" :label="$t('disable')"></el-option>
        </el-select>
      </el-form-item>
    </el-col>
    `
    }
      str += code;
    }
  }
  return str;
};

// table列
const templateTableColumn = (props) => {
  let str = "";
  const column = props.templateTableColumn;
  for (key in column) {
    str += `<!-- ${column[key].labelCn || column[key].prop}${column[key].labelMsg||''}-->
      <zt-table-column prop="${column[key].prop}" :label="$t('${props.folder}_${column[key].prop}')" ${column[key].columnWidth?`width="${column[key].columnWidth}"`:''}></zt-table-column>
    `;
  }
  return str;
};

// 新增按钮
const templateAddBtn = `
                    <!-- 新增 -->
                    <el-button @click="handleAddEdit('add')" type="primary" icon="el-icon-plus"> {{ $t("add") }} </el-button>
`;

// 新增编辑组件
const templateAddEditComponent = `
  <!-- 新增编辑 -->
  <AddEdit v-model:visible="addEditVisible" :row="editRow" @reloadData="initData" />
`;
// 新增编辑组件导入
const jsEditImportComponent = `
import AddEdit from "./components/addEdit";
`;
// 新增编辑js代码
const jsAddEdit = `
    // 新增编辑
    const handleAddEdit = addEdit((row = {}) => {
      editRow.value = row
      addEditVisible.value = true
    })
`;

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
const handleExportExcel = exportExcel(siteAirportsExport, null, proxy)
`

// 导出模板
exports.page = function (props) {
  return `<!-- ${props.templateName} -->
<template>
  <ZtSearchForm @search="onSearch">
    <el-form label-position="top">
      <el-row :gutter="20">
        ${templateSearchForm(props)}
      </el-row>
    </el-form>
  </ZtSearchForm>

  <ZtDefaultTable>
    <template #btnGroup>
    ${
      props.isAddBtn
        ? `<!-- 新增 -->
      <el-button @click="handleAddEdit" type="warning" size="mini">
        {{ $t('add') }}
      </el-button>`
        : ""
    }
    ${
      props.isExport
        ? `<!-- 导出 -->
      <el-button @click="handleExportExcel" :loading="exportLoading" type="warning" size="mini">
        {{ $t('export') }}
      </el-button>`
        : ""
    }
      
    </template>
    <zt-table v-loading="tableLoading" :data="tableData" stripe>
      ${templateTableColumn(props)}
      <!-- 操作 -->
      <zt-table-column :label="$t('operation')" fixed="right" width="80">
        <template #default="scope">
          ${
            props.isAddEdit
              ? `<!-- 编辑 -->
          <el-button @click="handleAddEdit(scope.row)" type="text">
              {{ $t("edit") }}
          </el-button>`
              : ""
          }
          ${
            props.isDel
              ? `<!-- 删除 -->
          <el-button @click="handleDelete(scope.row)" type="text">
              {{ $t("delete") }}
          </el-button>`
              : ""
          }
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

  ${props.isAddEdit ? templateAddEditComponent : ""}
</template>

<script>
import { defineComponent, ref, getCurrentInstance } from 'vue'
import { tableCommon } from '@/utils/handle-common'
import { getEnumeration } from '@/services/transport'
import { siteOperatingOutlets } from '@/services/area'

${props.isAddEdit ? jsEditImportComponent : ""}

export default defineComponent({
  name: "${props.folder}",
  components: { 
    ${props.isAddEdit ? "AddEdit" : ""} 
  },
  setup() {
    const { proxy } = getCurrentInstance()

    // 搜索条件
    const searchForm = ref({})

    // 初始化搜索条件
    const FORM_KEY = '${props.folder}APP'

    // 功能
    const {
      tableLoading,
      tableData,
      initData,${props.isAddEdit ? `addEditVisible,
      editRow,
      addEdit,` : ""}
      ${props.isExport ? `exportLoading,
      exportExcel,` : ""}
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

    ${props.isAddEdit ? jsAddEdit : ""}

    ${props.isDel ? jsDel : ""}

    ${props.isExport ? jsExport(props) : ""}
    
    return {
      searchForm,
      onSearch,
      handleReset,
      enumerationList,
      tableLoading,
      tableData,
      initData,
      pagination,${props.isAddEdit ? `addEditVisible,
      editRow,
      handleAddEdit,` : ""}
      onCurrentChange,
      onSizeChange,${props.isExport ? `
      exportLoading,
      handleExportExcel,` : ""}
    }
  }
})
</script>

<style lang="scss" scoped></style>
    `;
};
