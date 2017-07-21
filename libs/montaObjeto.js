const montaPares = obj =>  Array.isArray(obj) && obj.length > 0 ? obj[0]+':"'+obj[1]+'"' : ''

const montaObjeto = obj =>  obj.map(montaPares)

module.exports = montaObjeto
