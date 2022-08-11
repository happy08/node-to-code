exports.data = [
  {
    template: "table", //模板标识（写死）
    templateName: "空运资源管理", //目录名称
    folder: "air-resources", //目录名称
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
        prop: "resourceCode",
        labelCn: "资源编码",
        isShowColumn: true,
        isSearch: true,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 编辑时行占比
      },
      {
        prop: "resourceType",
        labelCn: "资源类型",
        isShowColumn: true,
        isSearch: true,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "routeArea",
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
        prop: "spaceCode",
        labelCn: "固舱编码",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "airRouteCode",
        labelCn: "航线编码",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "airRoute",
        labelCn: "航线",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "departureAirport",
        labelCn: "始发机场",
        isShowColumn: true,
        isSearch: true,
        inputType: "select", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "destinationAirport",
        labelCn: "目的机场",
        isShowColumn: true,
        isSearch: true,
        inputType: "select", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "serviceProviderName",
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
        prop: "airlineCompany",
        labelCn: "航司",
        isShowColumn: true,
        isSearch: true,
        inputType: "select", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "cargoHoldType",
        labelCn: "舱位类型",
        isShowColumn: true,
        isSearch: false,
        inputType: "select", // text select
        disabled: true,
        rules: `[{ required: true, message: proxy.$t('please_select'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "estimatedDepartureTime",
        labelCn: "预计起飞时间",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: false,
        rules: `[{ required: true, message: proxy.$t('please_enter'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "estimatedArrivalTime",
        labelCn: "预计到达时间",
        isShowColumn: true,
        isSearch: true,
        inputType: "text", // text select
        disabled: false,
        rules: `[{ required: true, message: proxy.$t('please_select'), trigger: 'blur' }]`,
        maxlength: 0, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "volume",
        labelCn: "方数",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: false,
        rules: `[{ required: true, message: proxy.$t('please_select'), trigger: 'blur' }]`,
        maxlength: 200, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "flightNumber",
        labelCn: "航班号",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: false,
        rules: `[{ required: true, message: proxy.$t('please_select'), trigger: 'blur' }]`,
        maxlength: 200, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "aircraftType",
        labelCn: "机型",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: false,
        rules: `[{ required: true, message: proxy.$t('please_select'), trigger: 'blur' }]`,
        maxlength: 200, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "flightCycle",
        labelCn: "航班周期",
        isShowColumn: true,
        isSearch: false,
        inputType: "select", // text select
        disabled: false,
        rules: `[{ required: true, message: proxy.$t('please_select'), trigger: 'blur' }]`,
        maxlength: 200, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "effectiveTime",
        labelCn: "生效时间",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: false,
        rules: `[{ required: true, message: proxy.$t('please_select'), trigger: 'blur' }]`,
        maxlength: 200, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "failureTime",
        labelCn: "失效时间",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: false,
        rules: `[{ required: true, message: proxy.$t('please_select'), trigger: 'blur' }]`,
        maxlength: 200, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "cargoHoldDate",
        labelCn: "舱位日期",
        isShowColumn: true,
        isSearch: false,
        inputType: "text", // text select
        disabled: false,
        rules: `[{ required: true, message: proxy.$t('please_select'), trigger: 'blur' }]`,
        maxlength: 200, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "spaceStatus",
        labelCn: "固舱状态",
        labelMsg: "（W=待生效，D=生效中，E=已失效，I=已作废）",
        isShowColumn: true,
        isSearch: false,
        inputType: "select", // text select
        disabled: false,
        rules: `[{ required: true, message: proxy.$t('please_select'), trigger: 'blur' }]`,
        maxlength: 200, // 是否限制输入长度
        span: 24, // 行占比
      },
      {
        prop: "resourceStatus",
        labelCn: "资源状态",
        labelMsg: "（W=未创建计划，E=已创建计划，I=已作废，P=部分创建发货计划）",
        isShowColumn: true,
        isSearch: false,
        inputType: "select", // text select
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
