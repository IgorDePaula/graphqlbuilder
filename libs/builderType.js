import removeAspas from '../libs/removeAspas'
import removeDireita from '../libs/removeDireita'
import removeEsquerda from '../libs/removeEsquerda'
import explodeDetalhes from '../libs/explodeDetalhes'
import explodePropriedades from '../libs/explodePropriedades'
import montaObjeto from '../libs/montaObjeto'

const builderType = (name, properties, returnParams) => {
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

module.exports = builderType
