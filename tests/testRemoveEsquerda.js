
import removeEsquerda from '../libs/removeEsquerda'
import test from 'ava'
test('Removendo chave da esquerda',t=>{
  t.is(removeEsquerda(JSON.stringify({id:'1'})),'"id":"1"}')
})
