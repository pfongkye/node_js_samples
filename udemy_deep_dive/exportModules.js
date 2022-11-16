//exports and module.exports point to the same object
//however replacing the reference of exports using exports = {} will make exports point to another object
//which will be different from module.exports
//and importing from another module will import module.exports
//However we can mutate exports like so exports.newProp = {} and module.exports will have the newProp also