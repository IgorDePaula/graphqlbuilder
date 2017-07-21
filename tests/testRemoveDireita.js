
import removeDireita from '../libs/removeDireita'
import test from 'ava'
test('Removendo chave da direita',t=>{
  t.is(removeDireita(JSON.stringify({id:'1'})),'{"id":"1"')
})
