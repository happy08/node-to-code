exports.data = [
  {
    template: "table", //模板标识（写死）
    templateName: "Airb", //目录名称
    folder: "airb-list", //目录名称
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
        prop: "code",
        labelCn: "序号",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 编辑时行占比
      },
      {
        prop: "cnName",
        labelCn: "项目编码",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "enName",
        labelCn: "项目名称",
        isShowColumn: true,
        isSearch: true,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "conductBusiness",
        labelCn: "项目所属区域",
        isShowColumn: true,
        isSearch: true,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "areaName",
        labelCn: "状态",
        isShowColumn: true,
        isSearch: false,
        inputType: "select", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "timezone",
        labelCn: "竞价开始时间",
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
        labelCn: "竞价结束时间",
        isShowColumn: true,
        isSearch: false,
        inputType: "select", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "timezone",
        labelCn: "评估结束时间",
        isShowColumn: true,
        isSearch: false,
        inputType: "select", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "contactName",
        labelCn: "发布人",
        isShowColumn: true,
        isSearch: false,
        inputType: "select", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "timezone",
        labelCn: "发布时间",
        isShowColumn: true,
        isSearch: false,
        inputType: "select", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "contactName",
        labelCn: "创建人",
        isShowColumn: true,
        isSearch: false,
        inputType: "select", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_select'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "timezone",
        labelCn: "创建时间",
        isShowColumn: true,
        isSearch: true,
        inputType: "text", // text select
        disabled: false,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "contactName",
        labelCn: "修改人",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: false,
        rules: `[{ required: true, message: proxy.$t('please_select'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "timezone",
        labelCn: "修改时间",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: false,
        rules: `[{ required: true, message: proxy.$t('please_select'), trigger: 'blur' }]`,
        maxlength: 200, // 是否限制输入长度
        span: 24, // 行占比
      }
     
    ],

    //子目录
    childFolder: [
      {
        template: "edit", //模板标识（写死）
        // fartherFolder: "airb-list",
        // folder: "airb-list/components", //目录名称
        file: "addEdit.vue", //文件名称
        componentName: "addEdit", //组件名称
        labelWidth: "120px", //label宽度
        width: "550px", //弹窗宽度
        top: "5vh", //弹窗距顶
      },
    ],
  },
];
