exports.data = [
  {
    template: "table", //模板标识（写死）
    templateName: "港口信息管理", //目录名称
    folder: "harbor", //目录名称
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
      //   rules:`[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
      //   maxlength:0 // 是否限制长度
      // },
      {
        prop: "code",
        labelCn: "港口代码",
        isShowColumn: true,
        isSearch: true,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 编辑时行占比
      },
      {
        prop: "portCnName",
        labelCn: "港口名称",
        isShowColumn: true,
        isSearch: true,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "portEnName",
        labelCn: "港口英文名",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "type",
        labelCn: "港口类型",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "area",
        labelCn: "所属大区",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
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
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
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
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
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
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "portCode",
        labelCn: "口岸",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
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
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
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
        rules: `[{ required: true, message: proxy.$t('please_select'), trigger: 'blur' }]`,
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
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
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
        rules: `[{ required: true, message: proxy.$t('please_select'), trigger: 'blur' }]`,
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
        farther: "harbor",
        folder: "harbor/components", //目录名称
        file: "addEdit.vue", //文件名称
        componentName: "addEdit", //组件名称
        labelWidth: "120px", //label宽度
        width: "550px", //弹窗宽度
        top: "5vh", //弹窗距顶
      },
    ],
  },
];
