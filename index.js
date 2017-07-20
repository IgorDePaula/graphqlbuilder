const removeDireita = obj => obj.replace('}','')

const removeEsquerda = obj => obj.replace('{','')

const removeAspas = obj => obj.length > 0 ? obj.replace(/\"/g,'') : '';

const explodeProperties = obj =>  obj.length > 0 ? obj.split(',') : []

const explodePais = obj =>  obj.split(':')

const explodeDetails = obj => obj.map(explodePais)

const mountPair = obj =>  Array.isArray(obj) && obj.length > 0 ? obj[0]+':"'+obj[1]+'"' : ''

const mountObject = obj =>  obj.map(mountPair)

const buildType = (name, properties, returnParams) => {
  const params = mountObject(
                  explodeDetails(
                    explodeProperties(
                      removeAspas(
                        removeDireita(
                          removeEsquerda(
                            JSON.stringify(properties)
                          )
                        )
                      )
                    )
                  )
                )
                let result = name+' ('+params.join(',')+')'
                result += typeof returnParams === 'undefined' ? '' : returnParams
                return result
}

const transformReturnParams = (cur, obj) =>  {
  cur += typeof obj === 'string' ? obj :' '
  cur += typeof obj === 'object' ? Object.keys(obj)[0]+' {'+ Object.keys(obj).map(function(key) {
                                            return obj[key];
                                          }).join(',') +'}':''
  cur += ','
  return cur
}



const returnParams = obj =>  {
  let result = obj.reduce(transformReturnParams,'')
  result = result.substr(0,result.length-1)
  return '{'+result+'}'
}

module.exports = exports = {
  removeEsquerda,
  removeDireita,
  removeAspas,
  explodeProperties,
  explodeDetails,
  mountObject,
  buildType,
  returnParams
}
