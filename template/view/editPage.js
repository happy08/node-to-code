// table列
const templateTableColumn = (props) => {
  let str = ''
  const column = props.templateTableColumn
  for (key in column) {
    str += `<!-- ${column[key].labelCn || column[key].prop}${column[key].labelMsg||''}-->
    <zt-col :span="${column[key].span || 8}">
    <zt-form-item :label="$t('${props.project}_${column[key].$t || column[key].prop}')" prop="${column[key].prop}" ${column[key].required || column[key].rules ?`:rules="[${column[key].required?(column[key].inputType==='select'?'rules.select':'rules.input'):''}${column[key].rules?', ...rules.'+column[key].prop:''}]"`:''}>
        ${inputType(column[key], props)}
      </zt-form-item>
      </zt-col>
      `
  }
  return str
}
function inputType(column, props){
  if(column.inputType === 'text'){
    return `<zt-input v-model="form.${column.prop}" ${column.disabled?'disabled':''} ${column.prop.maxlength?'show-word-limit':''} ${column.prop.maxlength?'maxlength="'+column.prop.maxlength+'"':''}></zt-input>`
  }else if(column.inputType === 'textarea'){
    return `<zt-input v-model="form.${column.prop}" ${column.disabled?'disabled':''} type="textarea" :rows="3" ${column.prop.maxlength?'show-word-limit':''} ${column.prop.maxlength?'maxlength="'+column.prop.maxlength+'"':''}></zt-input>`
  }else if(column.inputType === 'select'){
    return `<zt-select v-model="form.${column.prop}" ${column.disabled?'disabled':''} filterable clearable class="w-100">
    <zt-option :value="1" :label="$t('${props.project}_enable')"></zt-option>
    <zt-option :value="2" :label="$t('${props.project}_disable')"></zt-option>
    </zt-select>`
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
  <zt-dialog :title="updateType === 'edit' ? $t('${props.project}_edit') : $t('${props.project}_add')" width="${props.width || '600px'}" @open="onOpen" @close="handleCancel" v-bind="$attrs" top="${props.top || '10vh'}" :close-on-click-modal="false">
    <zt-form :model="form" ref="formRef" label-width="${props.labelWidth}">
      <zt-row :gutter="20">
       ${templateTableColumn(props)}
      </zt-row>
    </zt-form>
    <template #footer>
      <!-- 取消 -->
      <zt-button @click="handleCancel"> {{ $t('${props.project}_cancel') }} </zt-button>
      <!-- 确定 -->
      <zt-button @click="handleConfirm" type="linear" :loading="confirmLoading"> {{ $t('${props.project}_confirm') }} </zt-button>
    </template>
  </zt-dialog>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { ZtMessage } from 'zt-design'
import { $t } from '@/lang/index'
import { enumTimezone, enumWeeks } from '@/utils/enumeration'

const props = defineProps({
  row: {
    type: Object,
    default() {
      return {}
    }
  },
  enumerationList: {
    type: Object,
    default() {
      return {}
    }
  }
})
const emit = defineEmits(['update:modelValue', 'reloadData'])

// 修改类型
const updateType = computed(() => (props.row && props.row.id ? 'edit' : 'add'))

// 表单
const form = ref()
const onOpen = () => {
  form.value = {
    ...props.row
  }
}
const rules = {
  input: { required: true, message: $t('lnms_pleaseEnter'), trigger: 'blur' },
  select: { required: true, message: $t('lnms_pleaseSelect'), trigger: 'change' },
  ${rules(props)}
}

// 提交表单
const formRef = ref()
const confirmLoading = ref(false)
const handleConfirm = async () => {
  try {
    await formRef.value.validate()
    confirmLoading.value = true
    if (updateType.value === 'edit') {
      await siteOperatingOutletUpdate(form.value)
    } else {
      await siteOperatingOutletAdd(form.value)
    }
    emit('update:modelValue', false)
    emit('reloadData')
    ZtMessage.success($t('${props.project}_operation_success'))
  } catch (err) {
    console.log(err)
  }
  confirmLoading.value = false
  formRef.value.resetFields()
}

// 关闭窗口
const handleCancel = () => {
  emit('update:modelValue', false)
  formRef.value.resetFields()
}
</script>

<style lang="scss" scoped></style>

`;
};
