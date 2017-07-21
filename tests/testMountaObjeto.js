
import removeAspas from '../libs/removeAspas'
import removeDireita from '../libs/removeDireita'
import removeEsquerda from '../libs/removeEsquerda'
import explodeDetalhes from '../libs/explodeDetalhes'
import explodePropriedades from '../libs/explodePropriedades'
import montaObjeto from '../libs/montaObjeto'
import test from 'ava'
test('monta objeto final',t=>{
  t.deepEqual(
    montaObjeto(
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
      )
    ),
    [
      'id:"1"',
      'nome:"igor"'
      ]
  )
})
