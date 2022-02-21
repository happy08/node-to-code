exports.data = [
  {
    template: "table", //模板
    folder: "home", //目录名称
    file: "home.vue", //文件名称
    isSearchForm: true, //是否需要搜索表单
    isAddBtn: true, //是否新增按钮
    isAddEdit: true,//是否可编辑
    templateTableColumn: [
      {
        prop: "Id",
        label: null,
        labelCn: "Id",
        isShowColumn: true,
      },
      {
        prop: "Name",
        label: "home_Name",
        labelCn: "名字",
        isShowColumn: true,
        isSearch: {
          type: "text",
        },
      }
    ],

    //子目录
    childFolder: [
      {
        template: "edit",
        folder: "home/components", //目录名称
        file: "addEdit.vue", //文件名称
        componentName: "addEdit"
      },
    ]
  }
]
