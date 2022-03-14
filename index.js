const fs = require("fs");
const path = require("path");
const folderPath = "./pages/";
// 引入配置文件

const viewJson = require("./template/view/air-freight-resources-json") // 空运资源管理

// const viewJson = require("./template/view/operating-outlet-json") // 操作网点管理
// const viewJson = require("./template/view/airport-json") // 机场管理
// const viewJson = require("./template/view/harbor-json") // 港口管理
// const viewJson = require("./template/view/port-json") // 口岸管理

//引入文件模板
const tableTemplate = require("./template/table").page; // table
const editTemplate = require("./template/edit").page; // 编辑
const lanTemplate = require("./template/lan").page; // 语言

// 递归创建文件夹
creatFolder(viewJson.data)

// 递归创建文件
creatFiles(viewJson.data)

// 创建文件
function creatFiles(data) {
    data.forEach((item) => {
        if (item.folder && item.file) {
            // 待
            const template = eval(`${item.template}Template(item)`)

            // 创建vue页面
            fs.writeFile(`${folderPath}${item.folder}/${item.file}`, template, function (err) {
                if (err) {
                    return console.log('创建失败', err);
                }
                console.log(`创建文件成功！-${item.file}`);
            })

            // 创建语言文件
            if(item.template === 'table')
                fs.writeFile(`${folderPath}${item.folder}/lan.js`, lanTemplate(item), function (err) {
                    if (err) {
                        return console.log('创建失败', err);
                    }
                    console.log(`创建文件成功！-语言`);
            })
        }
        if (item.childFolder) {
            item.childFolder.forEach(citem=>{
                citem.templateTableColumn = item.templateTableColumn
                citem.fartherFolder = item.folder
                citem.folder = item.folder+'/components'
            })
            creatFiles(item.childFolder)
        }
    })
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
            mkdirsSync(`${folderPath}${item.folder}`)
            if (item.childFolder) {
                creatFolder(item.childFolder)
            }
        }
    })
}

