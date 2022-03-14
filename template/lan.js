// table列
const templateTableColumn = (props) => {
  let str = ''
  const column = props.templateTableColumn
  for (key in column) {
  str += `${props.folder}_${column[key].prop}: '${column[key].labelCn}',
    `
  }
  return str
}

// 导出模板
exports.page = function (props) {
return `export default {
  // ${props.templateName}
  ${templateTableColumn(props)}
}`;
};
