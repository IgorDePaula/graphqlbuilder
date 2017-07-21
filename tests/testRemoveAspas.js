
import removeAspas from '../libs/removeAspas'
import test from 'ava'
test('Removendo aspas',t=>{
  t.is(removeAspas(JSON.stringify({id:'1'})),'{id:1}')
})
