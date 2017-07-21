const removeAspas = obj => obj.length > 0 ? obj.replace(/\"/g,'') : '';

module.exports = removeAspas
