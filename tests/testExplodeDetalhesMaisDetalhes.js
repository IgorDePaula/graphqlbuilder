
import removeAspas from '../libs/removeAspas'
import removeDireita from '../libs/removeDireita'
import removeEsquerda from '../libs/removeEsquerda'
import explodeDetalhes from '../libs/explodeDetalhes'
import explodePropriedades from '../libs/explodePropriedades'
import test from 'ava'
test('explode detalhes com mais detalhes',t=>{
  t.deepEqual(
    explodeDetalhes(
      explodePropriedades(
        removeAspas(
          removeDireita(
            removeEsquerda(
              JSON.stringify({id:'1',nome:"igor"})
            )
          )
        )
      )
    ),
    [
      ['id','1'],
      ['nome','igor']
    ]
  )
})
