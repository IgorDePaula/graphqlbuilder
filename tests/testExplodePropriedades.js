
import removeAspas from '../libs/removeAspas'
import removeDireita from '../libs/removeDireita'
import removeEsquerda from '../libs/removeEsquerda'
import explodePropriedades from '../libs/explodePropriedades'
import test from 'ava'


test('Separando as propriedades',t=>{
  t.deepEqual(explodePropriedades(
                removeAspas(
                  removeDireita(
                    removeEsquerda(
                      JSON.stringify({id:'1',nome:"igor"})
                    )
                  )
                )
              ),
              [
                'id:1',
                'nome:igor'
              ]
            )
})
