const transformReturnParams = (cur, obj) =>  {
  cur += typeof obj === 'string' ? obj :' '
  cur += typeof obj === 'object' ? Object.keys(obj)[0]+' {'+ Object.keys(obj).map(function(key) {
                                            return obj[key];
                                          }).join(',') +'}':''
  cur += ','
  return cur
}

const retornaParametros = obj =>  {
  let result = obj.reduce(transformReturnParams,'')
  result = result.substr(0,result.length-1)
  return '{'+result+'}'
}

module.exports = retornaParametros
