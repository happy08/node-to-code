<template>
  <el-dialog
    :model-value="visible"
    :close-on-click-modal="false"
    :title="updateType === 'edit' ? $t('edit') : $t('add')"
    width="550px"
    top="5vh"
    @close="handleCancel"
  >
    <el-form :model="form" :rules="rules" ref="formRef" size="mini" label-width="120px">
      <el-row :gutter="20">
       <!-- 口岸代码 -->
    <el-col :span="24">
    <el-form-item :label="$t('port_code')" prop="code">
        <el-input v-model="form.code" disabled  ></el-input>
      </el-form-item>
      </el-col>
      <!-- 口岸名称 -->
    <el-col :span="24">
    <el-form-item :label="$t('port_name')" prop="name">
        <el-input v-model="form.name" disabled  ></el-input>
      </el-form-item>
      </el-col>
      <!-- 所属大区 -->
    <el-col :span="24">
    <el-form-item :label="$t('port_area')" prop="area">
        <el-input v-model="form.area" disabled  ></el-input>
      </el-form-item>
      </el-col>
      <!-- 国家/地区 -->
    <el-col :span="24">
    <el-form-item :label="$t('port_country')" prop="country">
        <el-input v-model="form.country" disabled  ></el-input>
      </el-form-item>
      </el-col>
      <!-- 省/州 -->
    <el-col :span="24">
    <el-form-item :label="$t('port_province')" prop="province">
        <el-input v-model="form.province" disabled  ></el-input>
      </el-form-item>
      </el-col>
      <!-- 城市 -->
    <el-col :span="24">
    <el-form-item :label="$t('port_city')" prop="city">
        <el-input v-model="form.city" disabled  ></el-input>
      </el-form-item>
      </el-col>
      <!-- 时区 -->
    <el-col :span="24">
    <el-form-item :label="$t('port_timezone')" prop="timezone">
        <el-input v-model="form.timezone" disabled  ></el-input>
      </el-form-item>
      </el-col>
      <!-- 班期 -->
    <el-col :span="24">
    <el-form-item :label="$t('port_workCycle')" prop="workCycle">
        <el-select v-model="form.workCycle" disabled filterable class="w-100">
    <el-option :value="1" label="启用"></el-option>
    <el-option :value="2" label="禁用"></el-option>
    </el-select>
      </el-form-item>
      </el-col>
      <!-- 最大处理能力（箱/包裹） -->
    <el-col :span="24">
    <el-form-item :label="$t('port_maxProcessingPower')" prop="maxProcessingPower">
        <el-input v-model="form.maxProcessingPower"   ></el-input>
      </el-form-item>
      </el-col>
      <!-- 状态 -->
    <el-col :span="24">
    <el-form-item :label="$t('port_status')" prop="status">
        <el-select v-model="form.status"  filterable class="w-100">
    <el-option :value="1" label="启用"></el-option>
    <el-option :value="2" label="禁用"></el-option>
    </el-select>
      </el-form-item>
      </el-col>
      <!-- 备注 -->
    <el-col :span="24">
    <el-form-item :label="$t('port_remark')" prop="remark">
        <el-input v-model="form.remark"  type="textarea"  ></el-input>
      </el-form-item>
      </el-col>
      
      </el-row>
    </el-form>
    <template #footer>
      <!-- 取消 -->
      <el-button @click="handleCancel"> {{ $t('cancel') }} </el-button>
      <!-- 确定 -->
      <el-button @click="handleConfirm" type="linear" :loading="confirmLoading"> {{ $t('confirm') }} </el-button>
    </template>
  </el-dialog>
</template>
<script>
import { defineComponent, watch, computed, ref, getCurrentInstance } from 'vue'
import { tableMetaDataAdd, tableMetaDataModify } from '@/services/tableMetaData'

export default defineComponent({
  name: 'addEdit',
  props: {
    visible: Boolean,
    row: Object
  },
  emits: ['update:visible', 'reloadData'],
  setup(props, { emit }) {
    const { proxy } = getCurrentInstance()

    // 修改类型
    const updateType = computed(() => (props.row && props.row.id ? 'edit' : 'add'))

    // 表单
    const form = ref({})
    watch(
      () => props.row,
      nVal => {
        form.value = proxy.$tools.deepClone(nVal)
      }
    )
    const rules = {
      code : [{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }],
      name : [{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }],
      area : [{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }],
      country : [{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }],
      province : [{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }],
      city : [{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }],
      timezone : [{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }],
      workCycle : [{ required: true, message: proxy.$t('please_select'), trigger: 'blur' }],
      maxProcessingPower : [{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }],
      status : [{ required: true, message: proxy.$t('please_select'), trigger: 'blur' }],
      
    }

    // 提交表单
    const formRef = ref(null)
    const confirmLoading = ref(false)
    const handleConfirm = async () => {
      try {
        await formRef.value.validate()
        confirmLoading.value = true
        if (updateType.value === 'edit') {
          await tableMetaDataModify(form.value)
        } else {
          await tableMetaDataAdd(form.value)
        }
        formRef.value.resetFields()
        emit('update:visible', false)
        emit('reloadData')
        proxy.$message.success('操作成功')
      } catch (error) {
        console.log(error)
      }
      confirmLoading.value = false
    }

    // 关闭窗口
    const handleCancel = () => {
      formRef.value.resetFields()
      emit('update:visible', false)
    }

    return {
      updateType,
      formRef,
      form,
      rules,
      confirmLoading,
      handleConfirm,
      handleCancel
    }
  }
})
</script>

<style lang="scss" scoped></style>

