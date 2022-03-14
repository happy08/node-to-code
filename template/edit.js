// table列
const templateTableColumn = (props) => {
  let str = ''
  const column = props.templateTableColumn
  for (key in column) {
    str += `<!-- ${column[key].labelCn || column[key].prop}${column[key].labelMsg||''}-->
    <el-col :span="${column[key].span || 24}">
    <el-form-item :label="$t('${props.fartherFolder}_${column[key].prop}')" prop="${column[key].prop}">
        ${inputType(column[key])}
      </el-form-item>
      </el-col>
      `
  }
  return str
}
function inputType(column){
  if(column.inputType === 'text'){
    return `<el-input v-model="form.${column.prop}" ${column.disabled?'disabled':''} ${column.prop.maxlength?'show-word-limit':''} ${column.prop.maxlength?'maxlength="'+column.prop.maxlength+'"':''}></el-input>`
  }else if(column.inputType === 'textarea'){
    return `<el-input v-model="form.${column.prop}" ${column.disabled?'disabled':''} type="textarea" ${column.prop.maxlength?'show-word-limit':''} ${column.prop.maxlength?'maxlength="'+column.prop.maxlength+'"':''}></el-input>`
  }else if(column.inputType === 'select'){
    return `<el-select v-model="form.${column.prop}" ${column.disabled?'disabled':''} filterable clearable class="w-100">
    <el-option :value="1" :label="$t('enable')"></el-option>
    <el-option :value="2" :label="$t('disable')"></el-option>
    </el-select>`
  }
}


// 校验规则
const rules = (props) =>{
  let str = ''
  const column = props.templateTableColumn
  for (key in column) {
    if(column[key].rules){
      str += `${column[key].prop} : ${column[key].rules},
      `
    }
  }
  return str
}

// 导出模板
exports.page = function (props) {
  return `<template>
  <el-dialog
    :model-value="visible"
    :close-on-click-modal="false"
    :title="updateType === 'edit' ? $t('edit') : $t('add')"
    width="${props.width || '600px'}"
    top="${props.top || '10vh'}"
    @close="handleCancel"
  >
    <el-form :model="form" :rules="rules" ref="formRef" size="mini" label-width="${props.labelWidth}">
      <el-row :gutter="20">
       ${templateTableColumn(props)}
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
      ${rules(props)}
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

`;
};
