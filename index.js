const fs = require("fs");
const path = require("path");
const folderPath = "./pages/";
//引入配置文件
const profileJson = require("./template/json")
//引入文件模板
const tableTemplate = require("./template/table").page;
const editTemplate = require("./template/edit").page;

// 递归创建文件夹
creatFolder(profileJson.data)

// 递归创建文件
creatFiles(profileJson.data)

// 创建文件
function creatFiles(data) {
    data.forEach((item) => {
        if (item.folder && item.file) {
            const template = eval(`${item.template}Template(item)`)

            // 创建vue页面
            fs.writeFile(`${folderPath}${item.folder}/${item.file}`, template, function (err) {
                if (err) {
                    return console.log('创建失败', err);
                }
                console.log(`创建文件成功！-${item.file}`);
            })
        }
        if (item.childFolder) {
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

