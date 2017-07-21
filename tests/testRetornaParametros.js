import retornaParametros from '../libs/retornaParametros'
import test from 'ava'

test('formata parametros de retorno',t=>{
  t.is(retornaParametros(['name',{'author':['address','cellphone']}]),'{name, author {address,cellphone}}')
})
