// 搜索
const templateSearchForm = (porps) => {
    let str = ''
    const column = porps.templateTableColumn
    for (key in column) {
        if (column[key].isSearch) {
            str += `<el-col :md="12" :lg="8">
                    <!-- 操作记录 -->
                    <el-form-item :label="$t('permissionLog.record') + '/' + $t('permissionLog.createBy')">
                        <el-input v-model="searchForm.keywards" :placeholder="$t('pleaseEnter')" clearable></el-input>
                    </el-form-item>
                </el-col>
            `
        }
    }
    return str
}

// table列
const templateTableColumn = (porps) => {
    let str = ''
    const column = porps.templateTableColumn
    for (key in column) {
        str += `<!-- ${column[key].labelCn || column[key].prop} -->
    <BmTableColumn prop="${column[key].prop}" :label="$t('${column[key].label ? column[key].label : (porps.folder + '_' + column[key].prop)}')">
      <template #default="scope">
        {{ scope.row.${column[key].prop} }}
      </template>
    </BmTableColumn>
    `
    }
    return str
}

// 新增按钮
const templateAddBtn = `
                    <!-- 新增 -->
                    <el-button @click="handleAddEdit('add')" type="primary" icon="el-icon-plus"> {{ $t("status.add") }} </el-button>
`

// 新增编辑组件
const templateAddEditComponent = `
  <!-- 新增编辑 -->
  <AddEdit v-if="editVisible" v-model:visible="editVisible" :row="editRow" @reloadData="initData" />
`

// 新增编辑组件导入
const jsEditImportComponent = `
import AddEdit from "./component/addEdit";
`
// 新增编辑js代码
const jsAddEdit = `
    //新增编辑
    const editVisible = ref(false);
    const editRow = ref({});
    const handleAddEdit = (type, row) => {
        if (type === "add") {
            editRow.value = {};
        } else if (type === "edit") {
            editRow.value = row;
        }
        editVisible.value = true;
    };
`

const jsDel = `//删除
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
        };`

// 导出模板
exports.page = function (props) {
    return `
<template>
    ${props.isSearchForm ? `
    <div class="top-search-form">
        <el-form :model="searchForm" ref="searchFormRef" labelPosition="top" class="table-search-form">
            <el-row :gutter="24">
                ${templateSearchForm(props)}
            </el-row>

            <div class="table-search-btns">
                <!-- 查询 -->
                <el-button @click="handelSearch" type="primary">{{ $t("search") }}</el-button>
                <!-- 重置 -->
                <el-button @click="resetForm">{{ $t("reset") }}</el-button>
            </div>
        </el-form>
    </div>`: ''
        }

    <div class="p-25 bg-white round-4">
        <div class="flex between mb-10">
            <div>
                <div class="fl mb-10 mr-15">${props.isAddBtn ? templateAddBtn : ''}                </div>
            </div>
            <div class="flex vstart"></div>
        </div>

        <BmTable :data="tableData">
            ${templateTableColumn(props)}
            <BmTableColumn :label="$t('table.operation')" width="120">
                <template #default="scope">
                    ${props.isAddEdit ? `<!-- 编辑 -->
                    <el-button @click="handleAddEdit('edit', scope.row)" type="text">
                        {{ $t("status.edit") }}
                    </el-button>` : ''}
                    ${props.isDel ? `<!-- 删除 -->
                    <el-button @click="handleDelete(scope.row)" type="text">
                        {{ $t("status.delete") }}
                    </el-button>` : ''}
                    
                </template>
            </BmTableColumn>
        </BmTable>
    </div>

    ${props.isAddEdit ? templateAddEditComponent : ''}
</template>

<script>
import { ref, computed, watch, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import { roleFind, roleDelete } from "@/api/permission";
${props.isAddEdit ? jsEditImportComponent : ''}

export default {
    name: "${porps.folder}",
    components: { 
        ${props.isAddEdit ? AddEdit : ''} 
    },
    setup() {
        const { proxy } = getCurrentInstance();
        const store = useStore();

        const lang = computed(() => store.state.app.lang);
        watch(lang, (nVal) => {
            initData();
        });

        //状态
        const forbiddenEnable = computed(() => {
            return [
                {
                    name: proxy.$t("status.enable"),
                    value: 0
                },
                {
                    name: proxy.$t("status.forbidden"),
                    value: 1
                }
            ];
        });

        let tableData = ref([]);

        //获取列表
        const getListPage = () => {
            roleFind()
                .then((res) => {
                    tableData.value = res.data.records.map((item) => {
                        for (let i in forbiddenEnable.value) {
                            if (forbiddenEnable.value[i].value === item.status) {
                                item.statusName = forbiddenEnable.value[i].name;
                                break;
                            }
                        }
                        return item;
                    });
                })
                .catch((err) => {});
        };

        //初始化
        const initData = () => {
            getListPage();
        };
        initData();
        
        ${props.isAddEdit ? jsAddEdit : ''}

        ${props.isDel ? jsDel : ''}

        return {
            forbiddenEnable,
            initData,
            tableData,

            editVisible,
            editRow,
            handleAddEdit,
            handleDelete
        };
    }
};
</script>

    `
}
