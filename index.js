const fs = require("fs");
const path = require("path");
const folderPath = "./pages/";
// 引入配置文件
const viewJson = require("./template/json/shift/collect-shift-manage") // 揽收班次管理

// const viewJson = require("./template/json/push-record-json") // airb

// const viewJson = require("./template/json/project-list-json") // airb

// const viewJson = require("./template/json/airb-list-json") // airb
// const viewJson = require("./template/json/delivery-channels-json") // 派送渠道管理

// const viewJson = require("./template/json/air-resources-json") // 空运资源管理
// const viewJson = require("./template/json/car-manage-json") // 车辆管理

// const viewJson = require("./template/json/operating-outlet-json"); // 操作网点管理
// const viewJson = require("./template/json/airport-json") // 机场管理
// const viewJson = require("./template/json/harbor-json") // 港口管理
// const viewJson = require("./template/json/port-json") // 口岸管理

//引入文件模板
const tableTemplate = require("./template/view/tablePage").page; // table
const editTemplate = require("./template/view/editPage").page; // 编辑
const langTemplate = require("./template/view/lang").page; // 语言

// 递归创建文件夹
creatFolder(viewJson.data);

// 递归创建文件
creatFiles(viewJson.data);

// 创建文件
function creatFiles(data) {
  data.forEach((item) => {
    if (item.folder && item.file) {
      // 目录转小驼峰
      item.folderSmallHump = strike2smallHump(item.folder);

      const template = eval(`${item.template}Template(item)`);

      // 创建vue页面
      fs.writeFile(`${folderPath}${item.folder}/${item.file}`, template, function (err) {
        if (err) {
          return console.log("创建失败", err);
        }
        console.log(`创建文件成功！-${item.file}`);
      });

      // 创建语言文件
      if (item.template === "table")
        fs.writeFile(`${folderPath}${item.folder}/lang.js`, langTemplate(item), function (err) {
          if (err) {
            return console.log("创建失败", err);
          }
          console.log(`创建文件成功！-语言`);
        });
    }
    if (item.childFolder) {
      item.childFolder.forEach((citem) => {
        citem.project = item.project;
        citem.templateTableColumn = item.templateTableColumn;
        citem.fartherFolder = item.folder;
        citem.fartherFolderSmallHump = item.folderSmallHump;
        citem.folder = item.folder + "/components";
      });
      creatFiles(item.childFolder);
    }
  });
}

// 递归创建目录 同步方法
function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      console.log(`创建目录成功-${dirname}`);
    }
  }
}
// 遍历配置文件并调用创建目录方法
function creatFolder(data) {
  data.forEach((item) => {
    if (item.folder) {
      mkdirsSync(`${folderPath}${item.folder}`);
      if (item.childFolder) {
        creatFolder(item.childFolder);
      }
    }
  });
}

// 中横线转小驼峰 strike-hump 转为 strikeHump
function strike2smallHump(s) {
  const a = s.split("-");
  let result = a[0];
  for (let i = 1; i < a.length; i++) {
    result = result + a[i].slice(0, 1).toUpperCase() + a[i].slice(1);
  }
  return result;
}
