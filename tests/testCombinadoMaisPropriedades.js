
import removeAspas from '../libs/removeAspas'
import removeDireita from '../libs/removeDireita'
import removeEsquerda from '../libs/removeEsquerda'
import test from 'ava'

test('Combinando funções para limpar as propriedades, com mais propriedades',t=>{
  t.is(removeAspas(
        removeDireita(
          removeEsquerda(
            JSON.stringify({id:'1',nome:"igor"})
          )
        )
      ),
      'id:1,nome:igor'
    )
})
