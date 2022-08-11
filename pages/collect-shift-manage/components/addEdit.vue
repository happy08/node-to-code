<template>
  <zt-dialog :title="updateType === 'edit' ? $t('lnms_edit') : $t('lnms_add')" width="550px" @open="onOpen" @close="handleCancel" v-bind="$attrs" top="5vh" :close-on-click-modal="false">
    <zt-form :model="form" ref="formRef" label-width="120px">
      <zt-row :gutter="20">
        <!-- 揽收班次编码-->
        <zt-col :span="8">
          <zt-form-item :label="$t('lnms_collectShiftCode')" prop="shiftCode" :rules="[rules.input]">
            <zt-input v-model="form.shiftCode"></zt-input>
          </zt-form-item>
        </zt-col>
        <!-- 揽收班次名称-->
        <zt-col :span="8">
          <zt-form-item :label="$t('lnms_collectShiftName')" prop="shiftName" :rules="[rules.input]">
            <zt-input v-model="form.shiftName"></zt-input>
          </zt-form-item>
        </zt-col>
        <!-- 操作网点-->
        <zt-col :span="8">
          <zt-form-item :label="$t('lnms_originalPlace')" prop="originalPlace" :rules="[rules.input, ...rules.originalPlace]">
            <zt-input v-model="form.originalPlace"></zt-input>
          </zt-form-item>
        </zt-col>
        <!-- 操作网点业务简码-->
        <zt-col :span="8">
          <zt-form-item :label="$t('lnms_originalPlaceCode')" prop="placeCode" :rules="[rules.input]">
            <zt-input v-model="form.placeCode"></zt-input>
          </zt-form-item>
        </zt-col>
        <!-- 所属大区-->
        <zt-col :span="8">
          <zt-form-item :label="$t('lnms_originalArea')" prop="area" :rules="[rules.select]">
            <zt-select v-model="form.area" filterable clearable class="w-100">
              <zt-option :value="1" :label="$t('lnms_enable')"></zt-option>
              <zt-option :value="2" :label="$t('lnms_disable')"></zt-option>
            </zt-select>
          </zt-form-item>
        </zt-col>
        <!-- 国家/地区-->
        <zt-col :span="8">
          <zt-form-item :label="$t('lnms_countryRegion')" prop="country" :rules="[rules.select]">
            <zt-select v-model="form.country" filterable clearable class="w-100">
              <zt-option :value="1" :label="$t('lnms_enable')"></zt-option>
              <zt-option :value="2" :label="$t('lnms_disable')"></zt-option>
            </zt-select>
          </zt-form-item>
        </zt-col>
        <!-- 网点等级-->
        <zt-col :span="8">
          <zt-form-item :label="$t('lnms_siteLevel')" prop="siteLevel" :rules="[rules.select]">
            <zt-select v-model="form.siteLevel" filterable clearable class="w-100">
              <zt-option :value="1" :label="$t('lnms_enable')"></zt-option>
              <zt-option :value="2" :label="$t('lnms_disable')"></zt-option>
            </zt-select>
          </zt-form-item>
        </zt-col>
        <!-- 揽收出车时间-->
        <zt-col :span="8">
          <zt-form-item :label="$t('lnms_collectionDepartureTime')" prop="startDays" :rules="[rules.input]">
            <zt-input v-model="form.startDays"></zt-input>
          </zt-form-item>
        </zt-col>
        <!-- 截单时间-->
        <zt-col :span="8">
          <zt-form-item :label="$t('lnms_cutOffTime')" prop="cutOffTime" :rules="[rules.input]">
            <zt-input v-model="form.cutOffTime"></zt-input>
          </zt-form-item>
        </zt-col>
        <!-- 揽收发货时间-->
        <zt-col :span="8">
          <zt-form-item :label="$t('lnms_collectionShippingTime')" prop="endDays" :rules="[rules.input]">
            <zt-input v-model="form.endDays"></zt-input>
          </zt-form-item>
        </zt-col>
        <!-- 班期-->
        <zt-col :span="8">
          <zt-form-item :label="$t('lnms_schedule')" prop="schedule" :rules="[rules.select]">
            <zt-select v-model="form.schedule" filterable clearable class="w-100">
              <zt-option :value="1" :label="$t('lnms_enable')"></zt-option>
              <zt-option :value="2" :label="$t('lnms_disable')"></zt-option>
            </zt-select>
          </zt-form-item>
        </zt-col>
        <!-- 备注-->
        <zt-col :span="8">
          <zt-form-item :label="$t('lnms_remark')" prop="remark" :rules="[rules.input]">
            <zt-input v-model="form.remark"></zt-input>
          </zt-form-item>
        </zt-col>
        <!-- 状态-->
        <zt-col :span="8">
          <zt-form-item :label="$t('lnms_status')" prop="shiftStatus" :rules="[rules.select]">
            <zt-select v-model="form.shiftStatus" filterable clearable class="w-100">
              <zt-option :value="1" :label="$t('lnms_enable')"></zt-option>
              <zt-option :value="2" :label="$t('lnms_disable')"></zt-option>
            </zt-select>
          </zt-form-item>
        </zt-col>
        <!-- 最后修改人-->
        <zt-col :span="8">
          <zt-form-item :label="$t('lnms_lastUpdateBy')" prop="updateBy" :rules="[rules.input]">
            <zt-input v-model="form.updateBy"></zt-input>
          </zt-form-item>
        </zt-col>
        <!-- 最后修改时间-->
        <zt-col :span="8">
          <zt-form-item :label="$t('lnms_lastUpdateTime')" prop="updateTime" :rules="[rules.input]">
            <zt-input v-model="form.updateTime"></zt-input>
          </zt-form-item>
        </zt-col>
      </zt-row>
    </zt-form>
    <template #footer>
      <!-- 取消 -->
      <zt-button @click="handleCancel"> {{ $t("lnms_cancel") }} </zt-button>
      <!-- 确定 -->
      <zt-button @click="handleConfirm" type="linear" :loading="confirmLoading"> {{ $t("lnms_confirm") }} </zt-button>
    </template>
  </zt-dialog>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import { ZtMessage } from "zt-design";
import { $t } from "@/lang/index";
import { enumTimezone, enumWeeks } from "@/utils/enumeration";

const props = defineProps({
  row: {
    type: Object,
    default() {
      return {};
    },
  },
  enumerationList: {
    type: Object,
    default() {
      return {};
    },
  },
});
const emit = defineEmits(["update:modelValue", "reloadData"]);

// 修改类型
const updateType = computed(() => (props.row && props.row.id ? "edit" : "add"));

// 表单
const form = ref();
const onOpen = () => {
  form.value = {
    ...props.row,
  };
};
const rules = {
  input: { required: true, message: $t("lnms_pleaseEnter"), trigger: "blur" },
  select: { required: true, message: $t("lnms_pleaseSelect"), trigger: "change" },
  originalPlace: [{ validator: checkAge, trigger: "blur" }],
};

// 提交表单
const formRef = ref();
const confirmLoading = ref(false);
const handleConfirm = async () => {
  try {
    await formRef.value.validate();
    confirmLoading.value = true;
    if (updateType.value === "edit") {
      await siteOperatingOutletUpdate(form.value);
    } else {
      await siteOperatingOutletAdd(form.value);
    }
    emit("update:modelValue", false);
    emit("reloadData");
    ZtMessage.success($t("lnms_operation_success"));
  } catch (err) {
    console.log(err);
  }
  confirmLoading.value = false;
  formRef.value.resetFields();
};

// 关闭窗口
const handleCancel = () => {
  emit("update:modelValue", false);
  formRef.value.resetFields();
};
</script>

<style lang="scss" scoped></style>
