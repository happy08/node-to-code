<template>
  <el-dialog
    :model-value="visible"
    :close-on-click-modal="false"
    :title="updateType === 'edit' ? '编辑' : '新增'"
    width="550px"
    top="5vh"
    @close="handleCancel"
  >
    <el-form :model="form" :rules="rules" ref="formRef" size="mini" label-width="120px">
      <el-row :gutter="20">
       <el-col :span="24">
    <el-form-item label="港口代码" prop="code">
        <el-input v-model="form.code" disabled  ></el-input>
      </el-form-item>
      </el-col>
      <el-col :span="24">
    <el-form-item label="港口名称" prop="portCnName">
        <el-input v-model="form.portCnName" disabled  ></el-input>
      </el-form-item>
      </el-col>
      <el-col :span="24">
    <el-form-item label="港口英文名" prop="portEnName">
        <el-input v-model="form.portEnName" disabled  ></el-input>
      </el-form-item>
      </el-col>
      <el-col :span="24">
    <el-form-item label="港口类型" prop="type">
        <el-input v-model="form.type" disabled  ></el-input>
      </el-form-item>
      </el-col>
      <el-col :span="24">
    <el-form-item label="所属大区" prop="area">
        <el-input v-model="form.area" disabled  ></el-input>
      </el-form-item>
      </el-col>
      <el-col :span="24">
    <el-form-item label="国家/地区" prop="country">
        <el-input v-model="form.country" disabled  ></el-input>
      </el-form-item>
      </el-col>
      <el-col :span="24">
    <el-form-item label="省/州" prop="province">
        <el-input v-model="form.province" disabled  ></el-input>
      </el-form-item>
      </el-col>
      <el-col :span="24">
    <el-form-item label="城市" prop="city">
        <el-input v-model="form.city" disabled  ></el-input>
      </el-form-item>
      </el-col>
      <el-col :span="24">
    <el-form-item label="口岸" prop="portCode">
        <el-input v-model="form.portCode" disabled  ></el-input>
      </el-form-item>
      </el-col>
      <el-col :span="24">
    <el-form-item label="时区" prop="timezone">
        <el-input v-model="form.timezone" disabled  ></el-input>
      </el-form-item>
      </el-col>
      <el-col :span="24">
    <el-form-item label="班期" prop="workCycle">
        <el-input v-model="form.workCycle" disabled  ></el-input>
      </el-form-item>
      </el-col>
      <el-col :span="24">
    <el-form-item label="最大处理能力（箱/包裹）" prop="maxProcessingPower">
        <el-input v-model="form.maxProcessingPower"   ></el-input>
      </el-form-item>
      </el-col>
      <el-col :span="24">
    <el-form-item label="状态" prop="status">
        <el-select v-model="form.status"  filterable class="w-100">
    <el-option :value="1" label="启用"></el-option>
    <el-option :value="2" label="禁用"></el-option>
    </el-select>
      </el-form-item>
      </el-col>
      <el-col :span="24">
    <el-form-item label="备注" prop="remark">
        <el-input v-model="form.remark"  type="textarea"  ></el-input>
      </el-form-item>
      </el-col>
      
      </el-row>
    </el-form>
    <template #footer>
      <el-button @click="handleCancel"> 取消 </el-button>
      <el-button @click="handleConfirm" type="linear" :loading="confirmLoading"> 确定 </el-button>
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
        console.log('form.value', form.value)
      }
    )
    const rules = {
      code : [{ required: true, message: $t('please_enter'), trigger: 'blur' }],
      portCnName : [{ required: true, message: $t('please_enter'), trigger: 'blur' }],
      portEnName : [{ required: true, message: $t('please_enter'), trigger: 'blur' }],
      type : [{ required: true, message: $t('please_enter'), trigger: 'blur' }],
      area : [{ required: true, message: $t('please_enter'), trigger: 'blur' }],
      country : [{ required: true, message: $t('please_enter'), trigger: 'blur' }],
      province : [{ required: true, message: $t('please_enter'), trigger: 'blur' }],
      city : [{ required: true, message: $t('please_enter'), trigger: 'blur' }],
      portCode : [{ required: true, message: $t('please_enter'), trigger: 'blur' }],
      timezone : [{ required: true, message: $t('please_enter'), trigger: 'blur' }],
      workCycle : [{ required: true, message: $t('please_enter'), trigger: 'blur' }],
      maxProcessingPower : [{ required: true, message: $t('please_enter'), trigger: 'blur' }],
      status : [{ required: true, message: $t('please_select'), trigger: 'blur' }],
      
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

