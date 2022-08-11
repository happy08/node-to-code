exports.data = [
  {
    project: "lnms", //项目
    template: "table", //模板标识（写死）
    templateName: "揽收班次管理", //目录名称
    folder: "collect-shift-manage", //目录名称
    file: "index.vue", //文件名称
    isSearchForm: true, //是否需要搜索表单
    isAddBtn: true, //是否新增按钮
    isEnableBtn: true, //是否启用禁用按钮
    isAddEdit: true, //是否可编辑
    isExport: false, //是否导出按钮
    isTableCurrentRow: true, //是否需要table选中单行

    templateTableColumn: [
      // {
      //   prop: "Id", // 字段
      //   labelCn: "Id",  // 名称
      //   $t: "ID",  // 翻译 为空就和prop一样
      //   isShowColumn: true, // 是否在列中显示
      //   isSearch: false, // [false true]  是否搜索
      //   inputType:"text", // [text select]  input类型
      //   disabled: false,  // [input select]  是否禁用
      //   required: 'input',  // [input select]  必填类型，rules不为空才有用
      //   rules:'', // 检验规则，如果只是必填用required就好
      //   maxlength:0 // 是否限制长度
      //   span: 8, // 行占比
      // },

      {
        prop: "shiftCode",
        labelCn: "揽收班次编码",
        $t: "collectShiftCode",
        isShowColumn: true,
        isSearch: true,
        inputType: "text", // text select
        disabled: false,
        required: true, 
        rules: "",
        maxlength: 0, // 是否限制输入长度
        span: 8, // 编辑时行占比
      },
      {
        prop: "shiftName",
        labelCn: "揽收班次名称",
        $t: "collectShiftName",
        isShowColumn: true,
        isSearch: true,
        inputType: "text", // text select
        disabled: false,
        required: true, 
        rules: "",
        maxlength: 0, // 是否限制输入长度
        span: 8, // 行占比
      },
      // {
      //   prop: "shiftType",
      //   labelCn: "班次类型",
      //   $t: "",
      //   isShowColumn: true,
      //   isSearch: false,
      //   inputType: "select", // text select
      //   disabled: false,
      //   required: true,
      //   rules: '',
      //   maxlength: 0, // 是否限制输入长度
      //   span: 8, // 行占比
      // },
      {
        prop: "originalPlace",
        labelCn: "操作网点",
        $t: "originalPlace",
        isShowColumn: true,
        isSearch: true,
        inputType: "text", // text select
        disabled: false,
        required: true, 
        rules: "[{ validator: checkAge, trigger: 'blur' }]",
        maxlength: 0, // 是否限制输入长度
        span: 8, // 行占比
      },
      {
        prop: "placeCode",
        labelCn: "操作网点业务简码",
        $t: "originalPlaceCode",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: false,
        required: true, 
        rules: "",
        maxlength: 0, // 是否限制输入长度
        span: 8, // 行占比
      },
      {
        prop: "area",
        labelCn: "所属大区",
        $t: "originalArea",
        isShowColumn: true,
        isSearch: true,
        inputType: "select", // text select
        disabled: false,
        required: true, 
        rules: "",
        maxlength: 0, // 是否限制输入长度
        span: 8, // 行占比
      },
      {
        prop: "country",
        labelCn: "国家/地区",
        $t: "countryRegion",
        isShowColumn: true,
        isSearch: true,
        inputType: "select", // text select
        disabled: false,
        required: true, 
        rules: "",
        maxlength: 0, // 是否限制输入长度
        span: 8, // 行占比
      },
      {
        prop: "siteLevel",
        labelCn: "网点等级",
        $t: "siteLevel",
        isShowColumn: true,
        isSearch: true,
        inputType: "select", // text select
        disabled: false,
        required: true, 
        rules: "",
        maxlength: 0, // 是否限制输入长度
        span: 8, // 行占比
      },
      {
        prop: "startDays",
        labelCn: "揽收出车时间",
        $t: "collectionDepartureTime",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: false,
        required: true, 
        rules: "",
        maxlength: 0, // 是否限制输入长度
        span: 8, // 行占比
      },
      {
        prop: "cutOffTime",
        labelCn: "截单时间",
        $t: "cutOffTime",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: false,
        required: true, 
        rules: "",
        maxlength: 0, // 是否限制输入长度
        span: 8, // 行占比
      },
      {
        prop: "endDays",
        labelCn: "揽收发货时间",
        $t: "collectionShippingTime",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: false,
        required: true, 
        rules: '',
        maxlength: 0, // 是否限制输入长度
        span: 8, // 行占比
      },
      {
        prop: "schedule",
        labelCn: "班期",
        $t: "schedule",
        isShowColumn: true,
        isSearch: false,
        inputType: "select", // text select
        disabled: false,
        required: true, 
        rules: "",
        maxlength: 0, // 是否限制输入长度
        span: 8, // 行占比
      },
      {
        prop: "remark",
        labelCn: "备注",
        $t: "remark",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: false,
        required: true, 
        rules: '',
        maxlength: 0, // 是否限制输入长度
        span: 8, // 行占比
      },
      {
        prop: "shiftStatus",
        labelCn: "状态",
        $t: "status",
        isShowColumn: true,
        isSearch: true,
        inputType: "select", // text select
        disabled: false,
        required: true, 
        rules: '',
        maxlength: 0, // 是否限制输入长度
        span: 8, // 行占比
      },
      {
        prop: "updateBy",
        labelCn: "最后修改人",
        $t: "lastUpdateBy",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: false,
        required: true, 
        rules: '',
        maxlength: 0, // 是否限制输入长度
        span: 8, // 行占比
      },
      {
        prop: "updateTime",
        labelCn: "最后修改时间",
        $t: "lastUpdateTime",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: false,
        required: true, 
        rules: '',
        maxlength: 0, // 是否限制输入长度
        span: 8, // 行占比
      },
    ],

    //子目录
    childFolder: [
      {
        template: "edit", //模板标识（写死）
        // fartherFolder: "air-freight-resources",
        // folder: "air-freight-resources/components", //目录名称
        file: "addEdit.vue", //文件名称
        componentName: "addEdit", //组件名称
        labelWidth: "120px", //label宽度
        width: "550px", //弹窗宽度
        top: "5vh", //弹窗距顶
      },
    ],
  },
];
