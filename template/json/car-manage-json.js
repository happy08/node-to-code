exports.data = [
  {
    template: "table", //模板标识（写死）
    templateName: "车辆管理", //目录名称
    folder: "car-manage", //目录名称
    file: "index.vue", //文件名称
    isSearchForm: true, //是否需要搜索表单
    isAddBtn: false, //是否新增按钮
    isAddEdit: false, //是否可编辑
    isExport: true, //是否导出按钮

    templateTableColumn: [
      // {
      //   prop: "Id",
      //   labelCn: "Id",
      //   isShowColumn: true,
      //   isSearch: false,
      //   inputType:"text", // text select
      //   span: 24, // 行占比
      //   rules:`[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
      //   maxlength:0 // 是否限制长度
      // },
      {
        prop: "plateNumber",
        labelCn: "车牌号",
        isShowColumn: true,
        isSearch: true,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 编辑时行占比
      },
      {
        prop: "vehicleType",
        labelCn: "车辆类别",
        isShowColumn: true,
        isSearch: true,
        inputType: "select", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "vehicleModel",
        labelCn: "车型",
        isShowColumn: true,
        isSearch: true,
        inputType: "select", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "vehicleProperty",
        labelCn: "车辆属性",
        isShowColumn: true,
        isSearch: true,
        inputType: "select", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "serviceProvider",
        labelCn: "服务商",
        isShowColumn: true,
        isSearch: true,
        inputType: "select", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "branchOffice",
        labelCn: "分公司",
        isShowColumn: true,
        isSearch: true,
        inputType: "select", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "operatingOutletName",
        labelCn: "操作网点",
        isShowColumn: true,
        isSearch: true,
        inputType: "select", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "approvedLoadWeight",
        labelCn: "核定装载重量（吨）",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "approvedLoadVolume",
        labelCn: "核定装载体积（方）",
        isShowColumn: true,
        isSearch: false,
        inputType: "select", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "vehicleLength",
        labelCn: "车辆长度（米）",
        isShowColumn: true,
        isSearch: false,
        inputType: "select", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "vehicleWidth",
        labelCn: "车辆宽度（米）",
        isShowColumn: true,
        isSearch: false,
        inputType: "select", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_select'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "vehicleHeight",
        labelCn: "车辆高度（米）",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: false,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "status",
        labelCn: "状态",
        labelLang: "status",
        isShowColumn: true,
        isSearch: true,
        inputType: "select", // text select
        disabled: false,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "remark",
        labelCn: "备注",
        labelMsg: "",
        labelLang: "remark",
        isShowColumn: true,
        isSearch: false,
        inputType: "textarea", // text select
        disabled: false,
        rules: `[{ required: true, message: proxy.$t('please_select'), trigger: 'blur' }]`,
        maxlength: 200, // 是否限制输入长度
        span: 24, // 行占比
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
