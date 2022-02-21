
<template>
    
    <div class="top-search-form">
        <el-form :model="searchForm" ref="searchFormRef" labelPosition="top" class="table-search-form">
            <el-row :gutter="24">
                <el-col :md="12" :lg="8">
                    <!-- 操作记录 -->
                    <el-form-item :label="$t('permissionLog.record') + '/' + $t('permissionLog.createBy')">
                        <el-input v-model="searchForm.keywards" :placeholder="$t('pleaseEnter')" clearable></el-input>
                    </el-form-item>
                </el-col>
            
            </el-row>

            <div class="table-search-btns">
                <!-- 查询 -->
                <el-button @click="handelSearch" type="primary">{{ $t("search") }}</el-button>
                <!-- 重置 -->
                <el-button @click="resetForm">{{ $t("reset") }}</el-button>
            </div>
        </el-form>
    </div>

    <div class="p-25 bg-white round-4">
        <div class="flex between mb-10">
            <div>
                <div class="fl mb-10 mr-15">
                    <!-- 新增 -->
                    <el-button @click="handleAddEdit('add')" type="primary" icon="el-icon-plus"> {{ $t("status.add") }} </el-button>
                </div>
            </div>
            <div class="flex vstart"></div>
        </div>

        <BmTable :data="tableData">
            <!-- Id -->
    <BmTableColumn prop="Id" :label="$t('home_Id')">
      <template #default="scope">
        {{ scope.row.Id }}
      </template>
    </BmTableColumn>
    <!-- 名字 -->
    <BmTableColumn prop="Name" :label="$t('home_Name')">
      <template #default="scope">
        {{ scope.row.Name }}
      </template>
    </BmTableColumn>
    
            <BmTableColumn :label="$t('table.operation')" width="120">
                <template #default="scope">
                    <!-- 编辑 -->
                    <el-button @click="handleAddEdit('edit', scope.row)" type="text">
                        {{ $t("status.edit") }}
                    </el-button>
                    
                    
                </template>
            </BmTableColumn>
        </BmTable>
    </div>

    
  <!-- 新增编辑 -->
  <AddEdit v-if="editVisible" v-model:visible="editVisible" :row="editRow" @reloadData="initData" />

</template>

<script>
import { ref, computed, watch, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import { roleFind, roleDelete } from "@/api/permission";

import AddEdit from "./component/addEdit";


export default {
     
    components: { AddEdit },
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

    