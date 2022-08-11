<template>
  <zt-dialog :title="updateType === 'edit' ? $t('rcms_edit') : $t('rcms_add')" width="550px" @open="onOpen" @close="handleCancel" v-bind="$attrs" top="5vh" :close-on-click-modal="false">
    <zt-form :model="form" ref="formRef" label-width="120px">
      <zt-row :gutter="20">
       <!-- 操作网点代码-->
    <zt-col :span="24">
    <zt-form-item :label="$t('rcms_code')" prop="code" :rules="[rules.code]"  >
        <zt-input v-model="form.code" disabled  ></zt-input>
      </zt-form-item>
      </zt-col>
      <!-- 操作网点中文名称-->
    <zt-col :span="24">
    <zt-form-item :label="$t('rcms_cnName')" prop="cnName" :rules="[rules.cnName]"  >
        <zt-input v-model="form.cnName" disabled  ></zt-input>
      </zt-form-item>
      </zt-col>
      <!-- 操作网点英文名称-->
    <zt-col :span="24">
    <zt-form-item :label="$t('rcms_enName')" prop="enName" :rules="[rules.enName]"  >
        <zt-input v-model="form.enName" disabled  ></zt-input>
      </zt-form-item>
      </zt-col>
      <!-- 操作网点类型-->
    <zt-col :span="24">
    <zt-form-item :label="$t('rcms_type')" prop="type" :rules="[rules.type]"  >
        <zt-select v-model="form.type" disabled filterable clearable class="w-100">
    <zt-option :value="1" :label="$t('rcms_enable')"></zt-option>
    <zt-option :value="2" :label="$t('rcms_disable')"></zt-option>
    </zt-select>
      </zt-form-item>
      </zt-col>
      <!-- 网点等级-->
    <zt-col :span="24">
    <zt-form-item :label="$t('rcms_siteLevel')" prop="siteLevel" :rules="[rules.siteLevel]"  >
        <zt-input v-model="form.siteLevel" disabled  ></zt-input>
      </zt-form-item>
      </zt-col>
      <!-- 开展业务-->
    <zt-col :span="24">
    <zt-form-item :label="$t('rcms_conductBusiness')" prop="conductBusiness" :rules="[rules.conductBusiness]"  >
        <zt-input v-model="form.conductBusiness" disabled  ></zt-input>
      </zt-form-item>
      </zt-col>
      <!-- 所属大区-->
    <zt-col :span="24">
    <zt-form-item :label="$t('rcms_areaName')" prop="areaName" :rules="[rules.areaName]"  >
        <zt-input v-model="form.areaName" disabled  ></zt-input>
      </zt-form-item>
      </zt-col>
      <!-- 国家/地区-->
    <zt-col :span="24">
    <zt-form-item :label="$t('rcms_country')" prop="country" :rules="[rules.country]"  >
        <zt-input v-model="form.country" disabled  ></zt-input>
      </zt-form-item>
      </zt-col>
      <!-- 省/州-->
    <zt-col :span="24">
    <zt-form-item :label="$t('rcms_province')" prop="province" :rules="[rules.province]"  >
        <zt-input v-model="form.province" disabled  ></zt-input>
      </zt-form-item>
      </zt-col>
      <!-- 城市-->
    <zt-col :span="24">
    <zt-form-item :label="$t('rcms_city')" prop="city" :rules="[rules.city]"  >
        <zt-input v-model="form.city" disabled  ></zt-input>
      </zt-form-item>
      </zt-col>
      <!-- 详细地址-->
    <zt-col :span="24">
    <zt-form-item :label="$t('rcms_detailedAddress')" prop="detailedAddress" :rules="[rules.detailedAddress]"  >
        <zt-input v-model="form.detailedAddress" disabled  ></zt-input>
      </zt-form-item>
      </zt-col>
      <!-- 邮政编码-->
    <zt-col :span="24">
    <zt-form-item :label="$t('rcms_postCode')" prop="postCode" :rules="[rules.postCode]"  >
        <zt-input v-model="form.postCode" disabled  ></zt-input>
      </zt-form-item>
      </zt-col>
      <!-- 联系人姓名-->
    <zt-col :span="24">
    <zt-form-item :label="$t('rcms_contactName')" prop="contactName" :rules="[rules.contactName]"  >
        <zt-input v-model="form.contactName" disabled  ></zt-input>
      </zt-form-item>
      </zt-col>
      <!-- 联系方式-->
    <zt-col :span="24">
    <zt-form-item :label="$t('rcms_contactInfo')" prop="contactInfo" :rules="[rules.contactInfo]"  >
        <zt-input v-model="form.contactInfo" disabled  ></zt-input>
      </zt-form-item>
      </zt-col>
      <!-- 时区-->
    <zt-col :span="24">
    <zt-form-item :label="$t('rcms_timezone')" prop="timezone" :rules="[rules.timezone]"  >
        <zt-input v-model="form.timezone" disabled  ></zt-input>
      </zt-form-item>
      </zt-col>
      <!-- 班期-->
    <zt-col :span="24">
    <zt-form-item :label="$t('rcms_workCycle')" prop="workCycle" :rules="[rules.workCycle]"  >
        <zt-select v-model="form.workCycle" disabled filterable clearable class="w-100">
    <zt-option :value="1" :label="$t('rcms_enable')"></zt-option>
    <zt-option :value="2" :label="$t('rcms_disable')"></zt-option>
    </zt-select>
      </zt-form-item>
      </zt-col>
      <!-- 最大处理能力（箱/包裹）-->
    <zt-col :span="24">
    <zt-form-item :label="$t('rcms_maxProcessingPower')" prop="maxProcessingPower" :rules="[rules.maxProcessingPower]"  >
        <zt-input v-model="form.maxProcessingPower"   ></zt-input>
      </zt-form-item>
      </zt-col>
      <!-- 状态-->
    <zt-col :span="24">
    <zt-form-item :label="$t('rcms_status')" prop="status" :rules="[rules.status]"  >
        <zt-select v-model="form.status"  filterable clearable class="w-100">
    <zt-option :value="1" :label="$t('rcms_enable')"></zt-option>
    <zt-option :value="2" :label="$t('rcms_disable')"></zt-option>
    </zt-select>
      </zt-form-item>
      </zt-col>
      <!-- 备注-->
    <zt-col :span="24">
    <zt-form-item :label="$t('rcms_remark')" prop="remark"   >
        <zt-input v-model="form.remark"  type="textarea" :rows="3"  ></zt-input>
      </zt-form-item>
      </zt-col>
      
      </zt-row>
    </zt-form>
    <template #footer>
      <!-- 取消 -->
      <zt-button @click="handleCancel"> {{ $t('rcms_cancel') }} </zt-button>
      <!-- 确定 -->
      <zt-button @click="handleConfirm" type="linear" :loading="confirmLoading"> {{ $t('rcms_confirm') }} </zt-button>
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
  code : [{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }],
      cnName : [{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }],
      enName : [{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }],
      type : [{ required: true, message: $t('rcms_please_select'), trigger: 'blur' }],
      siteLevel : [{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }],
      conductBusiness : [{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }],
      areaName : [{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }],
      country : [{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }],
      province : [{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }],
      city : [{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }],
      detailedAddress : [{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }],
      postCode : [{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }],
      contactName : [{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }],
      contactInfo : [{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }],
      timezone : [{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }],
      workCycle : [{ required: true, message: $t('rcms_please_select'), trigger: 'blur' }],
      maxProcessingPower : [{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }],
      status : [{ required: true, message: $t('rcms_please_select'), trigger: 'blur' }],
      
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
    ZtMessage.success($t('rcms_operation_success'))
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

