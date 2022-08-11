// table列
const templateTableColumn = (props) => {
  let str = ''
  const column = props.templateTableColumn
  for (key in column) {
    if(!column[key].labelLang){
  str += `${props.project}_${column[key].$t || column[key].prop}: '${column[key].labelCn}',
    `
  }
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
