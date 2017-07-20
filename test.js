
import {removeDireita,returnParams, buildType ,mountObject, removeEsquerda, removeAspas,explodeProperties,explodeDetails} from './index'
import test from 'ava'

test('direita',t=>{
  t.is(removeDireita(JSON.stringify({id:'1'})),'{"id":"1"')
})
test('esquerda',t=>{
  t.is(removeEsquerda(JSON.stringify({id:'1'})),'"id":"1"}')
})
test('aspas',t=>{
  t.is(removeAspas(JSON.stringify({id:'1'})),'{id:1}')
})
test('combinado',t=>{
  t.is(removeAspas(
  removeDireita(
    removeEsquerda(
        JSON.stringify({id:'1'})
    )
  )
  ),
  'id:1'
)
})
test('combinado2',t=>{
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
test('explodeProperties',t=>{
  t.deepEqual(explodeProperties(
        removeAspas(
          removeDireita(
            removeEsquerda(
              JSON.stringify({id:'1',nome:"igor"})
            )
          )
        )
      ),
      ['id:1','nome:igor']
    )
})
test('explodeDetails',t=>{
  t.deepEqual(explodeDetails(
                explodeProperties(
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
test('explodeDetails2',t=>{
  t.deepEqual(explodeDetails(
    ['id:1','nome:igor']
              ),
              [
                ['id','1'],
                ['nome','igor']
              ]
            )
})
test('mountObject',t=>{
  t.deepEqual(mountObject(
                explodeDetails(
                  explodeProperties(
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
test('buildType',t=>{
  t.is(buildType('book',{id:'1',name:"igor"}),'book (id:"1",name:"igor")')
})
test('returnParams',t=>{
  t.is(returnParams(['name',{'author':['address','cellphone']}]),'{name, author {address,cellphone}}')
})


test('queryCompleta',t=>{
  t.is(buildType('book',{id:'1',name:"igor"}) +' '+ returnParams(['name',{'author':['address','cellphone']}]),'book (id:"1",name:"igor") {name, author {address,cellphone}}')
})

test('returnParamsComplex',t=>{
  t.is(returnParams(['name',buildType('author',{})]),'{name,author ()}')
})
test('returnParamsMoreComplex',t=>{
  t.is(returnParams(['name',returnParams(['age','photo'])]),'{name,{age,photo}}')
})
test('buildTypeWithreturnParams',t=>{
  t.is(buildType('author',{},returnParams(['name',returnParams(['age','photo'])])),'author (){name,{age,photo}}')
})
