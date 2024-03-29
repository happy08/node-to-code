exports.data = [
  {
    project: "rcms", //项目
    template: "table", //模板标识（写死）
    templateName: "操作网点管理", //目录名称
    folder: "operating-outlet", //目录名称
    file: "index.vue", //文件名称
    isSearchForm: true, //是否需要搜索表单
    isAddBtn: true, //是否新增按钮
    isAddEdit: true, //是否可编辑
    isExport: true, //是否导出按钮

    templateTableColumn: [
      // {
      //   prop: "Id",
      //   labelCn: "Id",
      //   isShowColumn: true,
      //   isSearch: false,
      //   inputType:"text", // text select
      //   span: 24, // 行占比
      //   rules:`[{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }]`,
      //   maxlength:0 // 是否限制长度
      // },
      {
        prop: "code",
        labelCn: "操作网点代码",
        isShowColumn: true,
        isSearch: true,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 编辑时行占比
      },
      {
        prop: "cnName",
        labelCn: "操作网点中文名称",
        isShowColumn: true,
        isSearch: true,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "enName",
        labelCn: "操作网点英文名称",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "type",
        labelCn: "操作网点类型",
        isShowColumn: true,
        isSearch: true,
        inputType: "select", // text select
        disabled: true,
        rules: `[{ required: true, message: $t('rcms_please_select'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "siteLevel",
        labelCn: "网点等级",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "conductBusiness",
        labelCn: "开展业务",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "areaName",
        labelCn: "所属大区",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "country",
        labelCn: "国家/地区",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "province",
        labelCn: "省/州",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "city",
        labelCn: "城市",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "detailedAddress",
        labelCn: "详细地址",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "postCode",
        labelCn: "邮政编码",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "contactName",
        labelCn: "联系人姓名",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "contactInfo",
        labelCn: "联系方式",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "timezone",
        labelCn: "时区",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "workCycle",
        labelCn: "班期",
        isShowColumn: true,
        isSearch: false,
        inputType: "select", // text select
        disabled: true,
        rules: `[{ required: true, message: $t('rcms_please_select'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "maxProcessingPower",
        labelCn: "最大处理能力（箱/包裹）",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: false,
        rules: `[{ required: true, message: $t('rcms_please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "status",
        labelCn: "状态",
        isShowColumn: true,
        isSearch: true,
        inputType: "select", // text select
        disabled: false,
        rules: `[{ required: true, message: $t('rcms_please_select'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "remark",
        labelCn: "备注",
        isShowColumn: true,
        isSearch: false,
        inputType: "textarea", // text select
        disabled: false,
        rules: ``,
        maxlength: 200, // 是否限制输入长度
        span: 24, // 行占比
      },
    ],

    //子目录
    childFolder: [
      {
        template: "edit", //模板标识（写死）
        farther: "operating-outlet",
        folder: "operating-outlet/components", //目录名称
        file: "addEdit.vue", //文件名称
        componentName: "addEdit", //组件名称
        labelWidth: "120px", //label宽度
        width: "550px", //弹窗宽度
        top: "5vh", //弹窗距顶
      },
    ],
  },
];
