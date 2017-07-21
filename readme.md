[![Build Status](https://travis-ci.org/IgorDePaula/graphqlbuilder.svg?branch=master)](https://travis-ci.org/IgorDePaula/graphqlbuilder)

GraphQL Builder
===============


A tool for build GraphQL queries

Usage
---

```import {buidlerType, retornaParametros } from 'graphqlbuilder'```



```
// build a type

const book = builderType('book',{isbn:'3747485xxxxxxx'})
// output: book (isbn:3747485xxxxxxx)

const bookwithParams = builderType('book',{isbn:'3747485xxxxxxx'}, retornaParametros(['name',retornaParametros(['address','email'])]))
// output: book (isbn:3747485xxxxxxx) {name, author: {address, email} }

```
