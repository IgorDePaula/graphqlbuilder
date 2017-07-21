const explodePares = obj =>  obj.split(':')

const explodeDetalhes = obj => obj.map(explodePares)

module.exports = explodeDetalhes
